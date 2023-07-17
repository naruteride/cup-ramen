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
            className="fixed -z-10 flex flex-col items-end opacity-0 top-0 right-0 bottom-0 left-0 bg-black/30 backdrop-blur-sm duration-200"
            onClick={operateNavigator}
        >
                <svg className="m-4 w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"></path>
                </svg>
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