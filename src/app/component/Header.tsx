import { activateMenuProps } from '../layout';

export default function Header({ activateMenu: activeMenu, setActiveMenu }: activateMenuProps) {
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
