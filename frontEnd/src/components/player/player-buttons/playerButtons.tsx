'use client'

import { MusicContext } from '@/providers/MusicId.provider'
import { Heart, List, Repeat, Repeat1, Shuffle } from 'lucide-react'
import { FC, useContext, useEffect, useState } from 'react'

const playerButtons: FC = () => {
	const [isRepeat, setIsRepeat] = useState(false)
	const [isShuffle, setIsShuffle] = useState(false)
	const [isLike, setIsLike] = useState(false)
	const [isActiveMenu, setIsActiveMenu] = useState(false)

	const { id } = useContext(MusicContext)

	useEffect(() => {
		setIsRepeat(Boolean(localStorage.getItem('repeat')))
		if (isRepeat === true) {
			document.querySelector('audio')!.loop = true
		} else if (isRepeat === false) {
			document.querySelector('audio')!.loop = false
		}
		setIsLike(Boolean(localStorage.getItem(`isLike ${id}`)))
	})

	const Like = () => {
		if (isLike === true) {
			setIsLike(false)
			localStorage.setItem(`isLike ${id}`, setIsLike.toString())
		} else {
			setIsLike(true)
			localStorage.setItem(`isLike ${id}`, setIsLike.toString())
		}
	}
	const setRepeat = () => {
		if (isRepeat === true) {
			setIsRepeat(false)
			localStorage.setItem('repeat', setIsRepeat.toString())
		} else {
			setIsRepeat(true)
			localStorage.setItem('repeat', setIsRepeat.toString())
		}
	}
	const setShuffle = () => {
		if (isShuffle === true) {
			setIsShuffle(false)
			localStorage.setItem('shuffle', setIsShuffle.toString())
		} else {
			setIsShuffle(true)
			localStorage.setItem('shuffle', setIsShuffle.toString())
		}
	}
	const setActiveMenu = () => {
		if (isActiveMenu === true) {
			setIsActiveMenu(false)
		} else {
			setIsActiveMenu(true)
		}
	}

	return (
		<section className='buttons'>
			{isLike ? (
				<Heart
					height={26}
					width={26}
					fill='#ff0095'
					stroke='#ff0095'
					onClick={() => Like()}
				/>
			) : (
				<Heart height={26} width={26} stroke='#9088a7' onClick={() => Like()} />
			)}
			{isRepeat ? (
				<Repeat1
					height={26}
					width={26}
					stroke='#fefefe'
					onClick={() => setRepeat()}
				/>
			) : (
				<Repeat
					height={26}
					width={26}
					stroke='#9088a7'
					onClick={() => setRepeat()}
				/>
			)}
			{isShuffle ? (
				<Shuffle
					height={26}
					width={34}
					stroke='#fefefe'
					onClick={() => setShuffle()}
				/>
			) : (
				<Shuffle
					height={26}
					width={34}
					stroke='#9088a7'
					onClick={() => setShuffle()}
				/>
			)}
			{isActiveMenu ? (
				<List
					height={26}
					width={26}
					stroke='#fefefe'
					onClick={() => setActiveMenu()}
				/>
			) : (
				<List
					height={26}
					width={26}
					stroke='#9088a7'
					onClick={() => setActiveMenu()}
				/>
			)}
		</section>
	)
}

export default playerButtons
