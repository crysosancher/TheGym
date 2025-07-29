import Footer from './_components/Footer';
import NavBar from './_components/NavBar';
import './globals.css';
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<NavBar />
				{children}
				{/* <Footer /> */}
			</body>
		</html>
	);
}
