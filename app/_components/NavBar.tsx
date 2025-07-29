'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdOutlineSportsGymnastics, MdClose } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CiHome, CiPhone } from 'react-icons/ci';
import { FaDumbbell } from 'react-icons/fa';

const NavBar = () => {
	const router = useRouter();
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		AOS.init();

		// Handle scroll effect
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const menuItems = [
		{ icon: CiHome, label: 'Home', path: '/' },
		{ icon: FaDumbbell, label: 'Workout Routines', path: '/workouts' },
		{ icon: CiPhone, label: 'Contact Us', path: '/contact' },
	];

	const handleNavigation = (path: any) => {
		router.push(path);
		setMenuOpen(false);
	};

	return (
		<>
			{/* Navbar */}
			<nav
				className={`
                fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
                ${
					scrolled
						? 'bg-white/90 backdrop-blur-xl shadow-xl border-b border-slate-200/20'
						: 'bg-gradient-to-r from-white/95 to-slate-50/95 backdrop-blur-lg border-b border-gradient-to-r from-blue-200/30 to-purple-200/30'
				}
            `}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16 lg:h-20">
						{/* Logo Section */}
						<div
							onClick={() => handleNavigation('/')}
							className="flex items-center gap-3 cursor-pointer group">
							<div className="relative">
								<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
								<MdOutlineSportsGymnastics
									size={40}
									className="relative text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text transform group-hover:scale-110 transition-transform duration-300"
								/>
							</div>
							<span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
								FitnessHub
							</span>
						</div>

						{/* Desktop Menu */}
						<div className="hidden lg:flex items-center space-x-1">
							{menuItems.map((item, index) => {
								const Icon = item.icon;
								return (
									<button
										key={index}
										onClick={() =>
											handleNavigation(item.path)
										}
										className="flex items-center gap-2 px-6 py-3 rounded-2xl text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group relative overflow-hidden">
										<div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300"></div>
										<Icon
											className="relative z-10 transform group-hover:scale-110 transition-transform duration-300"
											size={20}
										/>
										<span className="relative z-10 font-medium group-hover:font-semibold transition-all duration-300">
											{item.label}
										</span>
									</button>
								);
							})}
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setMenuOpen(!menuOpen)}
							className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 group">
							<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"></div>
							{menuOpen ? (
								<MdClose
									className="relative z-10 text-slate-700 transform group-hover:scale-110 transition-transform duration-300"
									size={24}
								/>
							) : (
								<RxHamburgerMenu
									className="relative z-10 text-slate-700 transform group-hover:scale-110 transition-transform duration-300"
									size={24}
								/>
							)}
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile Menu Overlay */}
			<div
				className={`
                fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out
                ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
            `}>
				{/* Backdrop */}
				<div
					className="absolute inset-0 bg-black/20 backdrop-blur-sm"
					onClick={() => setMenuOpen(false)}></div>

				{/* Menu Panel */}
				<div
					className={`
                    absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/30 overflow-hidden
                    transform transition-all duration-500 ease-out
                    ${
						menuOpen
							? 'translate-y-0 scale-100'
							: '-translate-y-4 scale-95'
					}
                `}>
					<div className="p-2">
						{menuItems.map((item, index) => {
							const Icon = item.icon;
							return (
								<button
									key={index}
									onClick={() => handleNavigation(item.path)}
									className={`
                                        w-full flex items-center gap-4 p-4 rounded-2xl text-slate-700 
                                        hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 
                                        hover:text-slate-900 transition-all duration-300 group
                                        ${
											index !== menuItems.length - 1
												? 'border-b border-slate-100'
												: ''
										}
                                    `}
									style={{
										animationDelay: `${index * 100}ms`,
									}}>
									<div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
										<Icon
											className="transform group-hover:scale-110 transition-transform duration-300"
											size={20}
										/>
									</div>
									<span className="font-medium group-hover:font-semibold transition-all duration-300">
										{item.label}
									</span>
								</button>
							);
						})}
					</div>
				</div>
			</div>

			{/* Spacer to prevent content from hiding behind fixed navbar */}
			<div className="h-16 lg:h-20"></div>
		</>
	);
};

export default NavBar;
