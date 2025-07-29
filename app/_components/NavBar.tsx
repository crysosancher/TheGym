'use client';
import { useEffect, useState } from 'react';
import AppLogo from './AppLogo';
import { useRouter } from 'next/navigation';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdOutlineSportsGymnastics } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CiHome, CiPhone } from 'react-icons/ci';

const NavBar = () => {
	const router = useRouter();
	const [toggle, setToggle] = useState(true);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<div className="relative w-full">
				{/* Navbar */}
				<div className="flex hover:cursor-pointer border-b-2 mb-5 border-blue-500 h-[60px] w-full justify-between items-center">
					<div
						onClick={() => {
							router.push('/');
						}}
						className="flex items-center"
					>
						<MdOutlineSportsGymnastics size={40} />
						<span>FitnessHub</span>
					</div>

					<div className="flex items-center gap-2">
						{/* Show Hamburger Menu only on mobile screens */}
						<div className="block lg:hidden">
							<RxHamburgerMenu onClick={() => setMenuOpen(!menuOpen)} />
						</div>
						{/* Show menu items directly on larger screens */}
						{/* <div className="hidden lg:flex items-center gap-2">
							<span className="flex">
								<CiHome />
								Home
							</span>
							<span>Workout Routines</span>
							<span className="flex mr-2">
								<CiPhone />
								Contact Us
							</span>
						</div> */}
					</div>
				</div>

				{/* Hamburger Menu Modal */}
				{menuOpen && (
					<div className="absolute top-full left-0 w-full bg-blue-500 flex flex-col text-white">
						<span className="flex p-4 border-b border-white">
							<CiHome className="mr-2" />
							Home
						</span>
						<span className="p-4 border-b border-white">Workout Routines</span>
						<span className="flex p-4">
							<CiPhone className="mr-2" />
							Contact Us
						</span>
					</div>
				)}
			</div>
		</>
	);
};

export default NavBar;
