import HeaderBox from "@/components/HeaderBox";
import RecentTransactions from "@/components/RecentTransactions";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";


const Home = async ({ searchParams }: { searchParams: { id?: string, page?: string } }) => { 
  // I had to change this to await searchParams because the error was saying that searchParams.id was not available and that I should await searchParams.
  const awaitedSearchParams = await searchParams;
  const id = awaitedSearchParams.id;
  const page = awaitedSearchParams.page;

  const currentPage = Number(page as string ) || 1; // Default to page 1 if not provided
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn.$id }); 
  
  if (!accounts) return; // or redirect, or render "no accounts" UI

  const accountsData = accounts?.data;

    // Fetch ALL accounts with their transactions
  const accountsWithTransactions = await Promise.all(
    accountsData.map(async (acc: { appwriteItemId: any; }) => { //: { appwriteItemId: any; } added by copilot, look into it later
      const account = await getAccount({ appwriteItemId: acc.appwriteItemId });
      return account;
    })
  );

  // Flatten transactions from all accounts
  const allTransactions = accountsWithTransactions.flatMap(
    (acc) => acc?.transactions || []
  );

  // const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
 
  // const account = await getAccount({ appwriteItemId });

  console.log("transactions are the following : ", allTransactions);
  // Keep track of selected account (if needed for UI)
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Bienvenue"
            user={loggedIn?.firstName || "Guest"}
            subtext="Accédez à votre compte et gérez vos transactions efficacement."
          />

          <TotalBalanceBox 
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
        
        <RecentTransactions
          accounts={accountsData}
          transactions={allTransactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />

      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={allTransactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  )
}

export default Home

