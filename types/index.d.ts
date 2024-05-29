/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// ========================================

declare type SignUpParams = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
};

declare type LoginUser = {
  email: string;
  password: string;
};

declare type User = {
  $id: string;
  email: string;
  userId: string;
  dwollaCustomerUrl: string;
  dwollaCustomerId: string;
  firstName: string;
  lastName: string;
  name: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
};

declare type NewUserParams = {
  userId: string;
  email: string;
  name: string;
  password: string;
};

declare type Account = {
  id: string;
  availableBalance: number;
  currentBalance: number;
  officialName: string;
  mask: string;
  institutionId: string;
  name: string;
  type: string;
  subtype: string;
  appwriteItemId: string;
  sharableId: string;
};

declare type Transaction = {
  id: string;
  $id: string;
  name: string;
  paymentChannel: string;
  type: string;
  accountId: string;
  amount: number;
  pending: boolean;
  category: string;
  date: string;
  image: string;
  type: string;
  $createdAt: string;
  channel: string;
  senderBankId: string;
  receiverBankId: string;
};

declare type Bank = {
  $id: string;
  accountId: string;
  bankId: string;
  accessToken: string;
  fundingSourceUrl: string;
  userId: string;
  sharableId: string;
};

declare type AccountTypes = "depository" | "credit" | "loan " | "investment" | "other";

declare type Category = "Food and Drink" | "Travel" | "Transfer";

declare type CategoryCount = {
  name: string;
  count: number;
  totalCount: number;
};

declare type Receiver = {
  firstName: string;
  lastName: string;
};

declare type TransferParams = {
  sourceFundingSourceUrl: string;
  destinationFundingSourceUrl: string;
  amount: string;
};

declare type AddFundingSourceParams = {
  dwollaCustomerId: string;
  processorToken: string;
  bankName: string;
};

declare type NewDwollaCustomerParams = {
  firstName: string;
  lastName: string;
  email: string;
  type: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
};

declare type BankCardProps = {
  account: Account;
  userName: string;
  showBalance?: boolean;
};

declare type BankInfoProps = {
  account: Account;
  appwriteItemId?: string;
  type: "full" | "card";
};

declare type HeaderBoxProps = {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  userName: string;
};

declare type MobileNavProps = {
  user: User;
};

declare type PageHeaderProps = {
  topTitle: string;
  bottomTitle: string;
  topDescription: string;
  bottomDescription: string;
  connectBank?: boolean;
};

declare type PaginationProps = {
  page: number;
  totalPages: number;
};

declare type PlaidLinkProps = {
  user: User;
  variant?: "primary" | "ghost";
  dwollaCustomerId?: string;
};

// declare type User = sdk.Models.Document & {
//   accountId: string;
//   email: string;
//   name: string;
//   items: string[];
//   accessToken: string;
//   image: string;
// };

declare type AuthFormProps = {
  type: "sign-in" | "sign-up";
};

declare type BankDropdownProps = {
  accounts: Account[];
  setValue?: UseFormSetValue<any>;
  otherStyles?: string;
};

declare type BankTabItemProps = {
  account: Account;
  appwriteItemId?: string;
};

declare type TotalBalanceBoxProps = {
  accounts: Account[];
  totalBanks: number;
  totalCurrentBalance: number;
};

declare type FooterProps = {
  user: User;
  type?: "desktop" | "mobile";
};

declare type RightSidebarProps = {
  user: User;
  transactions: Transaction[];
  banks: Bank[] & Account[];
};

declare type SidebarProps = {
  user: User;
};

declare type RecentTransactionsProps = {
  accounts: Account[];
  transactions: Transaction[];
  appwriteItemId: string;
  page: number;
};

declare type TransactionHistoryTableProps = {
  transactions: Transaction[];
  page: number;
};

declare type CategoryBadgeProps = {
  category: string;
};

declare type TransactionTableProps = {
  transactions: Transaction[];
};

declare type CategoryProps = {
  category: CategoryCount;
};

declare type DoughnutChartProps = {
  accounts: Account[];
};

declare type PaymentTransferFormProps = {
  accounts: Account[];
};

// Actions
declare type getAccountsProps = {
  userId: string;
};

declare type getAccountProps = {
  appwriteItemId: string;
};

declare type getInstitutionProps = {
  institutionId: string;
};

declare type getTransactionsProps = {
  accessToken: string;
};

declare type CreateFundingSourceOptions = {
  customerId: string; // Dwolla Customer ID
  fundingSourceName: string; // Dwolla Funding Source Name
  plaidToken: string; // Plaid Account Processor Token
  _links: object; // Dwolla On Demand Authorization Link
};

declare type CreateTransactionProps = {
  name: string;
  amount: string;
  senderId: string;
  senderBankId: string;
  receiverId: string;
  receiverBankId: string;
  email: string;
};

declare type GetTransactionsByBankIdProps = {
  bankId: string;
};

declare type SignInProps = {
  email: string;
  password: string;
};

declare type GetUserInfoProps = {
  userId: string;
};

declare type ExchangePublicTokenProps = {
  publicToken: string;
  user: User;
};

declare type CreateBankAccountProps = {
  accessToken: string;
  userId: string;
  accountId: string;
  bankId: string;
  fundingSourceUrl: string;
  sharableId: string;
};

declare type GetBanksProps = {
  userId: string;
};

declare type getAccountsPropsetBankProps = {
  documentId: string;
};

declare type GetBankByAccountIdProps = {
  accountId: string;
};
