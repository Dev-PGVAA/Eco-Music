'use client'

import { dataSidebar } from '@/data/data.sidebar'
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'

import cn from 'clsx'
import Link from 'next/link'
import styles from './sidebar.module.scss'

const sidebar: FC = () => {
	const pathname = usePathname()

	return (
		<aside className={styles.sidebar}>
			<div className='logo'>
				<h1>
					<span>eco</span>Music
					<span className={styles.beta}>beta</span>
				</h1>
			</div>
			<div className={styles.categories}>
				{dataSidebar.map((item, index) => (
					<div key={index}>
						<h5>{item.title}</h5>
						{item.links.map((item, index) => (
							<div key={index}>
								<Link
									href={item.link}
									className={cn({
										[styles.active]: pathname === item.link,
									})}
								>
									<item.icon />
									{/* <Icon name={item.icon} /> */}
									<p>{item.title}</p>
								</Link>
							</div>
						))}
					</div>
				))}
			</div>
		</aside>
	)
}

export default React.memo(sidebar)
