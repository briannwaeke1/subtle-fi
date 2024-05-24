import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getCurrentUser } from "@/lib/actions/user.actions";

const Home = async () => {
  const currentUser = await getCurrentUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            firstName={currentUser?.name.split(" ")[0]}
            subtext="Access and manage your account and transactions effeciently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={currentUser}
        transactions={[]}
        banks={
          [
            // {
            //   currentBalance: 123.5,
            // },
            // {
            //   currentBalance: 500.25,
            // },
          ]
        }
      />
    </section>
  );
};

export default Home;
