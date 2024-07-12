import HeaderBox from "@/components/HeaderBox";
import PaymentTransferForm from "@/components/PaymentTransferForm";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getCurrentUser } from "@/lib/actions/user.actions";

const Transfer = async () => {
  const currentUser = await getCurrentUser();
  const accounts = await getAccounts({
    userId: currentUser.$id,
  });

  if (!accounts) return;

  return (
    <section className="payment-transfer">
      <HeaderBox
        title="Payment Transfer"
        subtext="Please provide any specific details or notes related to the payment transfer."
      />
      <section className="size-full pt-5">
        <PaymentTransferForm accounts={accounts?.data} />
      </section>
    </section>
  );
};

export default Transfer;
