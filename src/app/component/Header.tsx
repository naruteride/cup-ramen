"use client"
import { operateNavigator } from "./Navigator";
import Search from "./Search";

export default function Header() {

    return (
        <header className="h-16 flex items-stretch">
            <button className="w-16 sm:hidden" onClick={operateNavigator}>
                메뉴
            </button>
            <Search />
        </header>
    )
}
