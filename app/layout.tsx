import Providers from '@/providers/Providers';
import '@/styles/common/normalize.css';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	style: ['italic', 'normal'],
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='es' className={poppins.className}>
			<head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</head>
			<body>
				<Providers>
					<div id='root'>{children}</div>
				</Providers>
			</body>
		</html>
	);
}
