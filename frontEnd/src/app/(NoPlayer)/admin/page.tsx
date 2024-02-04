'use client'

import { setTitle } from '@/utils/setTitle/setTitle'
import { useEffect } from 'react'

export default function Page() {
	useEffect(() => {
		setTitle('Admin')
	}, [])
	return <>Admin panel</>
}
