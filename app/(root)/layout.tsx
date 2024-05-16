import MobileNav from "@/components/MobileNav";
import SiderBar from "@/components/SiderBar";
import Image from "next/image";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn: User = {
    firstName: "Brian",
    lastName: "Nwaeke",
    $id: "",
    email: "",
    userId: "",
    dwollaCustomerUrl: "",
    dwollaCustomerId: "",
    address1: "",
    city: "",
    state: "",
    postalCode: "",
    dateOfBirth: "",
    ssn: "",
  }; // replace with actual user object
  return (
    <main className="flex h-screen w-full font-inter">
      <SiderBar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
