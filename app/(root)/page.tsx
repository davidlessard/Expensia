import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";


const Home = () => {
  const loggedIn = {firstName:"David", lastName:"Lessard", email: "dlessard@btracker.com"};
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
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTION
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{},{}]}
      />
    </section>
  )
}

export default Home


/*SI ¨CA NE MARCHE PAS, ESSAYER ¨CA??
export default function Home() {
  return (
<h1 className="text-3xl font-bold underline decoration-red-500 underline-offset-4">
  Red underline is good!
</h1>
  )
}*/

