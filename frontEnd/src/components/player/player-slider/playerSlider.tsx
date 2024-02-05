'use client'

import { musics } from '@/data/data.musics'
import { MusicContext } from '@/providers/Music.provider'
import {
	ChangeEvent,
	FC,
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react'

import { secToMin } from '@/utils/secToMin/secToMin'
import { setTitle } from '@/utils/setTitle/setTitle'
import Buttons from './player-slider-buttons/playerSliderButtons'

const slider: FC = () => {
	const refAudio = useRef<HTMLAudioElement>(null)
	const refInput = useRef<HTMLInputElement>(null)

	const [currentTime, setCurrentTime] = useState('0:00')
	const [remainingTime, setRemainingTime] = useState(secToMin(0))
	const [isDrag, setIsDrag] = useState(false)

	const { id, setId, isShowPlayer, setIsShowPlayer } = useContext(MusicContext)

	useEffect(() => {
		if (localStorage.getItem('musicID') !== null) {
			setIsShowPlayer(true)
		}

		if (isShowPlayer) {
			setTitle(musics[id].title)
			document.querySelector('footer')!.style.bottom = '0'
		} else document.querySelector('footer')!.style.bottom = '-90px'

		console.log()
	})
	useEffect(() => {
		setId(Number(localStorage.getItem('musicID')))
		setTimeout(() => {
			setRemainingTime(secToMin(Math.floor(refAudio.current!.duration)))
		}, 400)
	}, [])

	const time = (seconds: number, duration: number) => {
		setCurrentTime(secToMin(Math.floor(seconds)))
		setRemainingTime(secToMin(Math.floor(duration) - Math.floor(seconds)))
		refInput.current!.value = String((seconds / duration) * 100)
	}
	const timeUpdate = useCallback(
		(e: ChangeEvent<HTMLAudioElement>) => {
			if (!isDrag) {
				time(e.target.currentTime, e.target.duration)
			}
		},
		[isDrag]
	)
	const mouseDown = () => {
		setIsDrag(true)
	}
	const mouseUp = (duration: number, Value: number) => {
		setIsDrag(false)
		refAudio.current!.currentTime = (Value / 100) * duration
	}

	if (isNaN(parseFloat(remainingTime))) {
		setRemainingTime(secToMin(musics[id].time))
		refInput.current!.value = String(0)
	}

	return (
		<section className='player'>
			<audio src={musics[id].src} onTimeUpdate={timeUpdate} ref={refAudio} />

			<Buttons />
			<section className='slider'>
				<p id='currentTime'>{currentTime}</p>
				<input
					type='range'
					id='range'
					ref={refInput}
					onMouseDown={() => mouseDown()}
					onMouseUp={e => {
						mouseUp(
							refAudio.current!.duration,
							(e.target as HTMLInputElement).valueAsNumber
						)
					}}
					onInput={e => {
						time(
							(refAudio.current!.duration *
								(e.target as HTMLInputElement).valueAsNumber) /
								100,
							refAudio.current!.duration
						)
					}}
					defaultValue={0}
					step={0.0001}
				/>
				<p id='remainingTime'>{remainingTime}</p>
			</section>
		</section>
	)
}

export default slider
