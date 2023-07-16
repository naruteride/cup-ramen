"use client"

export default function Navigator() {
    return (
        <nav className={
            `z-20 absolute top-0 bottom-0 -left-full flex flex-col sm:relative sm:left-0 w-80 duration-200 bg-yellow-200`
        }>
            네비게이션
        </nav>
    )
}

export function NavigatorBackground() {
    return (
        <div
            id="NavigatorBackground"
            className="fixed -z-10 opacity-0 top-0 right-0 bottom-0 left-0 bg-black/30 backdrop-blur-sm duration-200"
            onClick={operateNavigator}
        >

        </div>
    )
}

export function operateNavigator() {
    const nav = document.querySelector("nav")!;
    const navBackground = document.querySelector("#NavigatorBackground")!;

    nav.classList.toggle("left-0");
    navBackground.classList.toggle("-z-10")
    navBackground.classList.toggle("opacity-0")
}