import Auth from '@/components/screens/auth/auth'
import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Auth | IT-Music',
	...NO_INDEX_PAGE,
}

export default function Page() {
	return <Auth />
}
