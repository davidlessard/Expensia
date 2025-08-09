import HeaderBox from "@/components/HeaderBox";
import RecentTransactions from "@/components/RecentTransactions";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";


//const Home = async ({ searchParams: { id, page } }:SearchParamProps ) => { // COMPLAINS THAT """"Error: Route "/" used searchParams.id. searchParams should be awaited...""""

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
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
 
  const account = await getAccount({ appwriteItemId });

  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>

        <RecentTransactions
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />

      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={account?.transactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  )
}

export default Home

