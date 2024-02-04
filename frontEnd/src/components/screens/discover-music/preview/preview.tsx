import Image from 'next/image'
import { FC } from 'react'
import style from '../discoverMusic.module.scss'

const preview: FC = () => {
	return (
		<div className={style.preview}>
			<Image src={'/msc.jpeg'} alt={'preview'} width={1000} height={100} />
		</div>
	)
}

export default preview
