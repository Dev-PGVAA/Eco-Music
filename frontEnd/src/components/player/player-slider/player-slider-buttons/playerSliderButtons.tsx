import { Play, PlayBack, PlayNext, Stop } from '@/data/data.icons'
import { musics } from '@/data/data.musics'
import { MusicContext } from '@/providers/Music.provider'
import { FC, useContext, useEffect } from 'react'

const buttons: FC = () => {
	const { id, setId, isPlaying, setIsPlaying } = useContext(MusicContext)

	useEffect(() => {
		const audio = document.querySelector('audio') as HTMLAudioElement
		audio.addEventListener('ended', () => {
			setMusic('next')

			const rangeElement = document.querySelector('#range') as HTMLInputElement
			rangeElement.value = '0'

			document.querySelector('audio')!.pause()
			setTimeout(() => {
				setIsPlaying(true)
				document.querySelector('audio')!.play()
			})
		})

		document.addEventListener('keydown', event => {
			if (event.code === 'Space') {
				setIsPlaying(!isPlaying)
			}
			if (event.code === 'KeyK') {
				setTimeout(() => {
					setMusic('back')
				}, 300)
			}
			if (event.code === 'KeyL') {
				setTimeout(() => {
					setMusic('next')
				}, 300)
			}
		})

		isPlaying ? audio.play() : audio.pause()
	})

	const setMusic = (act: string) => {
		if (act === 'back') {
			if (id == 0) {
				setId(musics.length - 1)
				localStorage.setItem('musicID', String(musics.length - 1))
			} else {
				setId(id - 1)
				localStorage.setItem('musicID', String(id - 1))
			}
		} else if (act === 'next') {
			if (id == musics.length - 1) {
				setId(0)
				localStorage.setItem('musicID', '0')
			} else {
				setId(id + 1)
				localStorage.setItem('musicID', String(id + 1))
			}
		}
		const rangeElement = document.querySelector('#range')! as HTMLInputElement
		rangeElement.value = '0'

		setTimeout(() => {
			setIsPlaying(true)
			document.querySelector('audio')!.play()
		})
	}

	const setPlaying = () => {
		if (isPlaying) {
			setIsPlaying(false)
			document.querySelector('audio')!.pause()
		} else {
			setIsPlaying(true)
			document.querySelector('audio')!.play()
		}
	}

	return (
		<>
			<button onClick={() => setMusic('back')}>
				<PlayBack />
			</button>
			{isPlaying ? (
				<button
					onClick={() => setPlaying()}
					id='button_play_player_slider_buttons'
				>
					<Stop />
				</button>
			) : (
				<button
					onClick={() => setPlaying()}
					id='button_play_player_slider_buttons'
				>
					<Play />
				</button>
			)}
			<button onClick={() => setMusic('next')}>
				<PlayNext />
			</button>
		</>
	)
}

export default buttons
