import Playlist from '@/components/screens/discover-music/playlists/playlist'
import { setTitle } from '@/utils/setTitle/setTitle'
import { FC, useEffect } from 'react'

import style from './discoverMusic.module.scss'
import Header from './header/header'
import Preview from './preview/preview'
import RecommendedMusic from './recommendedMusic/recommendedMusic'

const discoverMusic: FC = () => {
	useEffect(() => {
		setTitle('Discover Musics')
	})
	return (
		<div className={style.home}>
			<Header />
			<div className={style.main}>
				<Preview />
				<RecommendedMusic />
			</div>
			<Playlist />
		</div>
	)
}

export default discoverMusic
