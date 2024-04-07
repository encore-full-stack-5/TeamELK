import { Popover } from '@headlessui/react'

export default function IntroduceNavbar() {

    return (
        <>
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-2" aria-label="Global">
            <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                    <img className="h-8 w-auto" src="../../welon.png" alt="" />
                </a>
            </div>
            <Popover.Group className="flex lg:flex lg:gap-x-12">
                <a href="#" className="text-sm font-semibold leading-10 text-gray-900 ">
                    About
                </a>
                <a href="#" className="text-sm font-semibold leading-10 text-gray-900">
                    ER 다이어그램
                </a>
                <a href="#" className="text-sm font-semibold leading-10 text-gray-900">
                    마치며
                </a>
                <button className="flex lg:flex lg:flex-1 lg:justify-end mg-4 bg-stone-900 text-green-500">
                    <a href="/login" className="text-sm font-semibold leading-6">
                        Log in
                    </a>
                </button>
            </Popover.Group>
            </nav>
        
            <hr className="home-hr" />
        </>
    )
}
