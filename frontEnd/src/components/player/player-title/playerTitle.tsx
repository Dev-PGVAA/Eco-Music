'use client'

import PinLimits from '@/components/ui/pinLimits'
import { musics } from '@/data/data.musics'
import { MusicContext } from '@/providers/MusicId.provider'
import { useContext } from 'react'

const title = () => {
	const { id } = useContext(MusicContext)

	return (
		<section className='title'>
			<img
				src={musics[id].image}
				id='img_player_title'
				width={60}
				height={60}
				alt=''
			/>
			<section>
				<div>
					<h3>{musics[id].title}</h3>
					{musics[id].isHaveLimits && (
						<span>
							<PinLimits />
						</span>
					)}
				</div>
				<h5>{musics[id].author}</h5>
			</section>
		</section>
	)
}

export default title
