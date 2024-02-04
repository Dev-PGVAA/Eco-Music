import type { Metadata, Viewport } from 'next'
import { Rubik } from 'next/font/google'
import './globals.scss'

const inter = Rubik({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
	description: 'IT-Music',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
			noarchive: true,
		},
	},
	icons: '/logo.svg',
}

export const viewport: Viewport = {
	colorScheme: 'dark',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
