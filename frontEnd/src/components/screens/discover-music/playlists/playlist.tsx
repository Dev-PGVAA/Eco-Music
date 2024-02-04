'use client'
import { playLists } from '@/data/data.playlists'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import style from '../discoverMusic.module.scss'

const Playlist: FC = () => {
	const [slice, setSlice] = useState(0)

	useEffect(() => {
		if (window.innerWidth >= 1980) setSlice(7)
		else if (window.innerWidth <= 1979 && window.innerWidth >= 1299) setSlice(6)
		else if (window.innerWidth <= 1299 && window.innerWidth >= 1000) setSlice(5)
		// TODO: these ⬇️ and in scss
		else if (window.innerWidth <= 1299 && window.innerWidth >= 1000) setSlice(4)
		else if (window.innerWidth <= 1299 && window.innerWidth >= 1000) setSlice(3)
		else if (window.innerWidth <= 1299 && window.innerWidth >= 1000) setSlice(2)
	})

	return (
		<div>
			<span className={style.RecommendPlaylistsHeader}>
				<h3>Recommended playlists</h3>
				<Link href='/playlists'>See all</Link>
			</span>
			<div className={style.playlists}>
				{playLists.slice(0, slice).map((item, index) => (
					<div key={index} className={style.cardPlaylist}>
						<Image height={100} width={100} src={item.image} alt='' />
						<Link href={item.link}>
							<h4>{item.title}</h4>
							<p>{item.author}</p>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default Playlist
