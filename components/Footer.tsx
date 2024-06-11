import { signOutUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();

  const handleSignOutUser = async () => {
    await signOutUser();
    router.push("/sign-in");
  };

  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">
          {user?.firstName.charAt(0)}
        </p>
      </div>

      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 font-semibold truncate text-gray-700">
          {`${user?.firstName} ${user?.lastName}`}
        </h1>
        <p className="text-14 font-normal truncate text-gray-600">
          {user?.email}
        </p>
      </div>

      <div className="footer_image" onClick={handleSignOutUser}>
        <Image src="/icons/logout.svg" alt="logout" fill />
      </div>
    </footer>
  );
};

export default Footer;
