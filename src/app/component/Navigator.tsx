interface HeaderProps {
    activeMenu: boolean;
    setActiveMenu: (active: boolean) => void;
}

export default function Navigator({ activeMenu, setActiveMenu }: HeaderProps) {
    return (
        <nav className="absolute -left-full sm:relative sm:left-0 flex flex-col">
            네비게이션
        </nav>
    )
}
