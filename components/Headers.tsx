// const Header = () => {
//     return (
//         <div>Header</div>
//     )
// }
//
// export default Header
//   //20:17


import Link from "next/link";
import Image from "next/image";
// import NavItems from "@/components/NavItems";
// import UserDropdown from "@/components/UserDropdown";
// import {searchStocks} from "@/lib/actions/finnhub.actions";

const Header = ( ) => {
    // const initialStocks = await searchStocks();

    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">
                    <Image src="/assets/icons/logo.svg" alt="Signalist logo" width={140} height={32} className="h-8 w-auto cursor-pointer" />
                </Link>

                <nav className="hidden sm:block">
                    {/*<NavItems initialStocks={initialStocks} />*/}
                </nav>

                {/*<UserDropdown user={user} initialStocks={initialStocks} />*/}


            </div>
        </header>
    )
}
export default Header