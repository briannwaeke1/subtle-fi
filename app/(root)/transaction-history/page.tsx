import HeaderBox from "@/components/HeaderBox";
import TransactionsTable from "@/components/TransactionsTable";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { formatAmount } from "@/lib/utils";

const TransactionHistory = async ({
  searchParams: { id, page },
}: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const currentUser = await getCurrentUser();
  const accounts = await getAccounts({
    userId: currentUser.$id,
  });

  if (!accounts) return;

  const appwriteItemId = (id as string) || accounts?.data[0]?.appwriteItemId;
  const account = await getAccount({
    appwriteItemId,
  });

  const { currentBalance, name, officialName, mask } = account?.data;

  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox
          title="Transaction History"
          subtext="See your bank details and transactions."
        />
      </div>
      <div className="space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h2 className="text-18 font-bold text-white">{name}</h2>
            <p className="text-14 text-blue-25">{officialName}</p>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● {mask}
            </p>
          </div>

          <div className="transactions-account-balance">
            <p className="text-14">Current Balance</p>
            <p className="text-24 text-center font-bold">
              {formatAmount(currentBalance)}
            </p>
          </div>
        </div>

        <section className="flex w-full flex-col gap-6">
          <TransactionsTable transactions={account?.transactions} />
        </section>
      </div>
    </div>
  );
};

export default TransactionHistory;
