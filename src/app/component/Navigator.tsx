import { activateMenuProps } from '../layout'

export default function Navigator({ activateMenu: activeMenu, setActiveMenu }: activateMenuProps) {
    return (
        <nav className={`absolute top-0 bottom-0 ${activeMenu ? 'left-0' : '-left-full'} flex flex-col sm:relative sm:left-0 w-80 duration-200 bg-yellow-200`}>
            네비게이션
        </nav>
    )
}
