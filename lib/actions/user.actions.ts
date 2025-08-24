"use server"

import { ID, Query } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { encryptId, extractCustomerIdFromUrl, parseStringify } from "../utils";
import { CountryCode, ProcessorTokenCreateRequest, ProcessorTokenCreateRequestProcessorEnum, Products } from "plaid";
import { plaidClient } from "@/lib/plaid";
import { revalidatePath } from "next/cache";
//import { addFundingSource, createDwollaCustomer } from "./dwolla.actions";

const {
    APPWRITE_DATABASE_ID: DATABASE_ID,
    APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
    APPWRITE_BANK_COLLECTION_ID: BANK_COLLECTION_ID,
} = process.env;

export const getUserInfo = async ({ userId }: getUserInfoProps) => {
        try {
        const { database } = await createAdminClient();
        const user = await database.listDocuments(
        DATABASE_ID!,
        USER_COLLECTION_ID!,
        [Query.equal("userId", [userId])], // target the id that belongs to documentId
        )

        return parseStringify(user.documents[0]);
    } catch (error) {
        console.log(error)
    }
}

export const signIn = async ({ email, password }: signInProps) => {
    try {
        // Mutation / Database / Make a fetch
        const { account } = await createAdminClient();
        const session = await account.createEmailPasswordSession(email, password);

        (await cookies()).set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        const user = await getUserInfo({ userId: session.userId})
      
        return parseStringify(user);

    } catch (error) {
        console.error("Error", error);
    }
}

export const signUp = async ({password, ...userData}:SignUpParams) => {
    const { email, firstName, lastName } = userData; // it's a destructure syntax and password is left out intentionally
    
    let newUserAccount;

    try {
        const { account, database } = await createAdminClient();

        newUserAccount = await account.create(
            ID.unique(), 
            email, 
            password, 
            `${firstName} ${lastName}`
        );

        if(!newUserAccount) throw Error("Error creating user");

        const newUser = await database.createDocument(
            DATABASE_ID!,
            USER_COLLECTION_ID!,
            ID.unique(),
            {
                userId: newUserAccount.$id,
                ...userData
            }
        )

        const session = await account.createEmailPasswordSession(email, password);

        (await cookies()).set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });
        
        // ADDED BY CHATGPT --
        await createBankAccount({
            userId: newUserAccount.$id,
            bankId: "temp-bank-id", // If you don't have Plaid yet, use placeholder
            accountId: "temp-account-id",
            accessToken: "temp-access-token",
            sharableId: "temp-sharable-id",
            });
        // ADDED BY CHATGPT ^^

        return parseStringify(newUser); //Not the newUserAccount (temporary session), but the newUser document created in the database (permanent user data)

    } catch (error) {
        console.error("Error", error);
    }
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();

    const result = await account.get();

    const user = await getUserInfo({ userId: result.$id });

    return parseStringify(user);
  } catch (error) {
    return null;
  }

}

export const logoutAccount = async () => {
    try {
        const {account} = await createSessionClient();

        (await cookies()).delete("appwrite-session");

await account.deleteSession("current")
    } catch (error){
        return null;
    }
}

export const createLinkToken = async (user: User) => {
    try {
        const tokenParams = {
            user: {
                client_user_id: user.$id
            },
            client_name: `${user.firstName} ${user.lastName}`,
            products: [process.env.PLAID_PRODUCTS] as Products[],
            language: "fr",
            country_codes: [process.env.PLAID_COUNTRY_CODES] as CountryCode[],
        }
        //console.log("TokenParams are the following : ", tokenParams)
        const response = await plaidClient.linkTokenCreate(tokenParams);
        return parseStringify({ linkToken: response.data.link_token });
 
    } catch (error) {
        console.error("Error creating link token:", error);
        if (typeof error === "object" && error !== null && "response" in error) {
            // @ts-ignore
            console.error("Error response :", (error as any).response?.data);
        }
    }
}

export const createBankAccount = async ({
    userId,
    bankId,
    accountId,
    accessToken,
    sharableId,
}:createBankAccountProps) => {
    // we are trying to create a bank account in our Appwrite database 
    try {
        const { database } = await createAdminClient();
        const bankAccount = await database.createDocument(
            DATABASE_ID!,
            BANK_COLLECTION_ID!,
            ID.unique(),
            {
                userId,
                bankId,
                accountId,
                accessToken,
                sharableId,
            },
        )

        return parseStringify(bankAccount);
    } catch (error) {
        console.error("Error creating bank account:", error);
    }
}

export const exchangePublicToken = async ({ publicToken, user, }: exchangePublicTokenProps) => {
    try {
        // Exchange the public token for an access token and item ID
        const response = await plaidClient.itemPublicTokenExchange({
            public_token: publicToken,
        });

        const accessToken = response.data.access_token;
        const itemId = response.data.item_id;

        // Get account information from Plaid using the access token
        const accountsResponse = await plaidClient.accountsGet({
            access_token: accessToken,
        });

        const accountData = accountsResponse.data.accounts[0]; // Assuming you want the first account

        //Create a bank account using the user ID, item ID, account ID, acces token, and funding source URL, and sharable ID
        await createBankAccount({
            userId: user.$id,
            bankId: itemId,
            accountId: accountData.account_id,
            accessToken,
            sharableId: encryptId(accountData.account_id),
        });

        // Revalidate the path to reflect the changes
        revalidatePath("/");

        //Return a success message
        return parseStringify({
            publicTokenExchange: "complete",
        });

    } catch (error) {
        console.error("Error while exchanging public token:", error);
    }
}

export const getBanks = async ({ userId }: getBanksProps) => {
    try {
        const { database } = await createAdminClient();
        const banks = await database.listDocuments(
        DATABASE_ID!,
        BANK_COLLECTION_ID!,
        [Query.equal("userId", [userId])], // this is how to do a query in Appwrite
        )

        return parseStringify(banks.documents);
    } catch (error) {
        console.log(error)
    }
}

export const getBank = async ({ documentId }: getBankProps) => {

    if (!documentId || typeof documentId !== "string") {
        throw new Error("Invalid or missing documentId passed to getBank");
    }

    try {
        const { database } = await createAdminClient();

        const bank = await database.listDocuments(
            DATABASE_ID!,
            BANK_COLLECTION_ID!,
            [Query.equal("$id", [documentId])], // target the id that belongs to documentId
        );

        if (!bank.documents.length) {
            throw new Error(`Bank document with ID ${documentId} not found`);
        }

        return parseStringify(bank.documents[0]);
        
    } catch (error) {
        console.log("Error in getBank:", error)
        throw error; // Rethrow so caller knows it failed
    }
}

export const getBankByAccountId = async ({ accountId }: getBankByAccountIdProps) => {

    try {
        const { database } = await createAdminClient();

        const bank = await database.listDocuments(
            DATABASE_ID!,
            BANK_COLLECTION_ID!,
            [Query.equal("accountId", [accountId])], // target the id that belongs to documentId
        );

        if(bank.total !== 1) return null; // If no bank found, return null


        return parseStringify(bank.documents[0]);
        
    } catch (error) {
        console.log("Error in getBank:", error)
        throw error; // Rethrow so caller knows it failed
    }
}