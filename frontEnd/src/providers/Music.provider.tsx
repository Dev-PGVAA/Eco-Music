import { TypeId, TypeIsShowPlayer, TypePlaying } from '@/types/music.type'
import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useState,
} from 'react'

type MusicContext = {
	id: TypeId
	setId: Dispatch<SetStateAction<TypeId>>
	isPlaying: TypePlaying
	setIsPlaying: Dispatch<SetStateAction<TypePlaying>>
	isShowPlayer: TypeIsShowPlayer
	setIsShowPlayer: Dispatch<SetStateAction<TypePlaying>>
}

export const MusicContext = createContext<MusicContext>({
	id: 0,
	setId: () => {},
	isPlaying: false,
	setIsPlaying: () => {},
	isShowPlayer: false,
	setIsShowPlayer: () => {},
})

const MusicProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [id, setId] = useState<TypeId>(0)
	const [isPlaying, setIsPlaying] = useState(false)
	const [isShowPlayer, setIsShowPlayer] = useState(false)

	return (
		<MusicContext.Provider
			value={{
				id,
				setId,
				isPlaying,
				setIsPlaying,
				isShowPlayer,
				setIsShowPlayer,
			}}
		>
			{children}
		</MusicContext.Provider>
	)
}

export default MusicProvider
