'use client'

import React, { FC } from 'react'

import PlayerButtons from './player-buttons/playerButtons'
import Slider from './player-slider/playerSlider'
import Title from './player-title/playerTitle'
import styles from './player.module.scss'

const player: FC = () => {
	return (
		<footer className={styles.playerGroup}>
			<Title />
			<Slider />
			<PlayerButtons />
		</footer>
	)
}

export default React.memo(player)
