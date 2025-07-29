import Image from 'next/image';
import AppLogo from './_components/AppLogo';
import NavBar from './_components/NavBar';
import Hero from './_components/Hero';
import Footer from './_components/Footer';

export default function Home() {
	return (
		<main className="parent-container h-0 box-border">
			<NavBar />
			<Hero />

			<Footer />
		</main>
	);
}
