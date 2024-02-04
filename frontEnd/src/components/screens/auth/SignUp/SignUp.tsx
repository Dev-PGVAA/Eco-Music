'use client'

import { FC, useRef, useState } from 'react'

import { URL } from '@/configs/url.config'
import axios from 'axios'
import style from '../auth.module.scss'

const SignUp: FC = () => {
	const [error, setError] = useState('')
	const refEmail = useRef<HTMLInputElement>(null)
	const refPassword = useRef<HTMLInputElement>(null)
	const refRepeatPassword = useRef<HTMLInputElement>(null)

	const clearError = () => {
		refRepeatPassword.current!.value = ''
		refPassword.current!.value = ''
		refEmail.current!.value = ''
		setTimeout(() => {
			setError('')
		}, 2000)
	}

	const SendAuth = () => {
		if (refPassword.current!.value === refRepeatPassword.current!.value) {
			axios
				.post('/api/auth/register', {
					email: refEmail.current!.value,
					password: refPassword.current!.value,
				})
				.then(() => {
					window.location.href = URL.discoverMusic
				})
				.catch(() => {
					setError('User with this email already exists')
					clearError()
				})
		} else {
			setError('Passwords do not match')
			clearError()
		}
	}

	return (
		<div className={style.form}>
			<p>Email</p>
			<input
				type='email'
				className={style.input}
				placeholder='Enter your email'
				ref={refEmail}
			/>
			<p>Password</p>
			<input
				type='password'
				className={style.input}
				placeholder='Enter your password'
				ref={refPassword}
			/>
			<p>Repeat password</p>
			<input
				type='password'
				id='password'
				className={style.input}
				placeholder='Repeat your password'
				ref={refRepeatPassword}
			/>

			<h5 className='text-red-600 text-sm'>{error}</h5>

			<button onClick={() => SendAuth()}>Sign Up</button>
		</div>
	)
}

export default SignUp

// artem250110@gmail.com
// dflrftftQ2
