import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
	title: '404 | IT-Music',
}

const NotFoundPage: FC = () => {
	return (
		<main>
			<h1 className='text-center text-gray-300 w-full text-[3.5vw] mt-[10%] ml-[10%] font-bold'>
				<span className='text-[#ff0095]'>404</span>
				<span className='text-gray-700'>-</span> Page not found!
			</h1>
		</main>
	)
}

export default NotFoundPage
