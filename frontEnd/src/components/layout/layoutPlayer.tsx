'use client'
import MusicProvider from '@/providers/MusicId.provider'
import { PropsWithChildren } from 'react'
import Player from '../player/player'

export default function LayoutWithMusicProvider({
	children,
}: PropsWithChildren<unknown>) {
	return (
		<MusicProvider>
			{children}
			<Player />
		</MusicProvider>
	)
}
