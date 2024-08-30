import { useState } from 'react'

const Header = () => {
	const [openMenu, setOpenMenu] = useState(true)

	const links = [
		{ href: '/#about', label: 'About' },
		{ href: '/#proyects', label: 'Proyects' },
		{ href: '/#stack', label: 'Stack' },
		// { href: '/blog', label: 'Blog' },
		{ href: '/#contact', label: 'Contact' },
	];

	function toggleMenu() {
		setOpenMenu(prev => !prev)
	}

	return (
		<header className="bg-white">
			<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5 inline-flex items-center">
						<span className="sr-only">Serbrylex</span>
						<img className="h-8 w-auto" src="/Logo.png" alt="" />
            			<h5 className	="text-xl ml-2 mb-0 sm:text-2xl">
							Bryan Madrid
						</h5>
					</a>
				</div>
				<div className="flex lg:hidden">
					<button onClick={toggleMenu} type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
						<span className="sr-only">Open main menu</span>
						<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
							<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{links.map(({ href, label }, idx) => (
						<a key={idx} href={href} className="text-sm font-semibold leading-6 text-gray-900">{label}</a>
					))}
				</div>
			</nav>
			
			<div className={`lg:hidden ${openMenu ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
				<div className="fixed inset-0 z-10"></div>
				<div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
						</a>
						<button onClick={toggleMenu} type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
							<span className="sr-only">Close menu</span>
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{links.map(({ href, label }, idx) => (
									<a
										key={idx}
										onClick={toggleMenu}
										href={href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										{label}
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header