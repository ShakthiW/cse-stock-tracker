import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown";
import { searchStocks } from "@/lib/actions/finnhub.actions";


const Header = async ({ user }: { user: User }) => {

  const initialStocks = await searchStocks();

  return (
    <header>
      <div className="sticky top-0 header">
        <div className="container header-wrapper">
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="Signalist Logo"
              width={100}
              height={100}
              className="h-8 w-auto cursor-pointer"
            ></Image>
          </Link>
          <nav className="hidden sm:block">
            <NavItems initialStocks={initialStocks} />
          </nav>
          <UserDropdown user={user} initialStocks={initialStocks} />
        </div>
      </div>
    </header>
  );
};

export default Header;
