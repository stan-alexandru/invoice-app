import type { Metadata } from 'next';
import '../style/globals.css';

export const metadata: Metadata = {
	title: 'Boilerplate',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/favicon-32x32.png' sizes='any' />
			</head>
			<body>{children}</body>
		</html>
	);
}
