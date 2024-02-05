import { musics } from '@/data/data.musics'
import { secToMin } from '@/utils/secToMin/secToMin'
import { Minus, Plus } from 'lucide-react'
import { FC, useContext, useState } from 'react'

import PinLimits from '@/components/ui/pinLimits'
import { MusicContext } from '@/providers/Music.provider'
import cn from 'clsx'
import style from '../discoverMusic.module.scss'

const recommendedMusic: FC = () => {
	musics.forEach(item => (item.isLike = false))

	const [likeMusics, setLikeMusics] = useState(musics)

	const { id, setId, isPlaying, setIsPlaying, setIsShowPlayer } =
		useContext(MusicContext)

	const playMusic = (index: number) => {
		if (id === index) {
			setIsPlaying(!isPlaying)
		} else {
			setId(index)
			setIsPlaying(true)
		}
		localStorage.setItem('musicID', index.toString())
		setIsShowPlayer(true)
	}

	const setLikeMusic = (item: number) => {
		likeMusics[item].isLike = !likeMusics[id].isLike
	}

	return (
		<section className={style.recommendedMusic}>
			{likeMusics.map((item, index) => (
				<div
					key={index}
					className={cn(
						{
							[style.active]: index === id,
						},
						style.card
					)}
				>
					<span onClick={() => playMusic(index)}>
						<img src={item.image} alt='' />
						<div className={style.info}>
							<div>
								<p>{item.title}</p>
								{item.isHaveLimits && (
									<span>
										<PinLimits />
									</span>
								)}
							</div>
							<p>{item.author}</p>
						</div>
					</span>
					<p className={style.time}>{secToMin(item.time)}</p>
					<button onClick={() => setLikeMusic(index)}>
						{item.isLike ? <Minus size={18} /> : <Plus size={18} />}
					</button>
				</div>
			))}
		</section>
	)
}

export default recommendedMusic
