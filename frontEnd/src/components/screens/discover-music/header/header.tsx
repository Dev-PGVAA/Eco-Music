import { Play, Stop } from '@/data/data.icons'
import { MusicContext } from '@/providers/MusicId.provider'
import { FC, useContext } from 'react'

import style from '../discoverMusic.module.scss'

const header: FC = () => {
	const { isPlaying } = useContext(MusicContext)

	return (
		<div className={style.header}>
			<h3>Discover musics</h3>
			<div>
				<h5>New Releases</h5>
				<button>{isPlaying ? <Stop /> : <Play />}</button>
			</div>
		</div>
	)
}

export default header
