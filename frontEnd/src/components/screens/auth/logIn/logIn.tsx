'use client'

import { URL } from '@/configs/url.config'
import axios from 'axios'
import { FC, useRef, useState } from 'react'
import style from '../auth.module.scss'

const logIn: FC = () => {
	const [error, setError] = useState('')
	const refEmail = useRef<HTMLInputElement>(null)
	const refPassword = useRef<HTMLInputElement>(null)

	const clearError = () => {
		refPassword.current!.value = ''
		refEmail.current!.value = ''
		setTimeout(() => {
			setError('')
		}, 2000)
	}

	const SendLogin = () => {
		axios
			.post('/api/auth/login', {
				email: refEmail.current!.value,
				password: refPassword.current!.value,
			})
			.then(() => {
				window.location.href = URL.discoverMusic
			})
			.catch(() => {
				setError('Wrong email or password')
				clearError()
			})
	}

	return (
		<div className={style.form}>
			<p>Email</p>
			<input
				type='email'
				placeholder='Enter your email'
				className={style.input}
				ref={refEmail}
			/>
			<p>Password</p>
			<input
				type='password'
				placeholder='Enter your password'
				className={style.input}
				ref={refPassword}
			/>
			<p className={style.forgotPassword}>Forgot Password?</p>
			<h5 className='text-red-600 text-sm'>{error}</h5>
			<button onClick={() => SendLogin()}>Login</button>
			<p className='line' />
		</div>
	)
}

export default logIn
