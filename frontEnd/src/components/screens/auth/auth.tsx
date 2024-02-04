'use client'

import { URL } from '@/configs/url.config'
import { ChevronLeft } from 'lucide-react'
import React, { FC, useState } from 'react'
import SignUp from './SignUp/SignUp'
import AboutUs from './aboutUs/aboutUs'
import style from './auth.module.scss'
import Login from './logIn/logIn'

const auth: FC = () => {
	const [isHaveAnAccount, setIsHaveAnAccount] = useState(true)

	return (
		<section className={style.auth}>
			<aside>
				<button
					className='bg-[#ffffff46] rounded-full absolute top-5 left-6 hover:bg-[#ffffffc1]'
					onClick={() => (window.location.href = URL.discoverMusic)}
				>
					<ChevronLeft
						size={30}
						stroke='#fefefe'
						className='-translate-x-[2px] hover:stroke-[#000]'
					/>
				</button>
				<div className='container'>
					<div className='header'>
						<h1>
							<span>eco</span>Music
						</h1>
						<h3>
							{isHaveAnAccount ? <>Login </> : <>Sign up </>}
							to ECOMusic
						</h3>
						<span>Please enter your login details below.</span>
					</div>

					{isHaveAnAccount ? <Login /> : <SignUp />}
					<button
						onClick={() => setIsHaveAnAccount(!isHaveAnAccount)}
						className='hover:underline'
					>
						{isHaveAnAccount
							? 'Don’t have an account?'
							: 'Already have an account?'}
					</button>
				</div>
			</aside>
			<main>
				<AboutUs />
			</main>
		</section>
	)
}

export default React.memo(auth)
