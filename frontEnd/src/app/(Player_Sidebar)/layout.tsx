import LayoutWithMusicProvider from '@/components/layout/layoutPlayer'
import Sidebar from '@/components/sidebar/sidebar'
import type { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<body>
			<Sidebar />
			<LayoutWithMusicProvider>{children}</LayoutWithMusicProvider>
		</body>
	)
}
