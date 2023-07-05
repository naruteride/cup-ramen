interface HeaderProps {
    activeMenu: boolean;
    setActiveMenu: (active: boolean) => void;
}

export default function Header({ activeMenu, setActiveMenu }: HeaderProps) {
    return (
        <header className="h-16 flex items-stretch">
            <button className="w-16 sm:hidden" onClick={() => setActiveMenu(!activeMenu)}>
                메뉴
            </button>
            <search className="flex-1">
                서치
            </search>
        </header>
    )
}
