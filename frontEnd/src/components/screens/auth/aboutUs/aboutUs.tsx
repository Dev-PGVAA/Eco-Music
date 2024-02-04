import cn from 'clsx'
import { FC } from 'react'
import style from '../auth.module.scss'

const aboutUs: FC = () => {
	return (
		<>
			<div className={cn(style.circle, style.circle1)} />
			<div className={cn(style.circle, style.circle2)} />
			<div className={cn(style.circle, style.circle3)} />
			<div className={cn(style.circle, style.circle4)} />
			<div className={style.aboutUsText}>
				<h2>About Us</h2>
				<p>
					"Welcome to <b>ECO Music</b>, your ultimate destination for
					discovering and enjoying your favorite music. We are dedicated to
					providing you with exceptional music that you can listen to on your
					phone, tablet, or computer. Whether you're a beginner or an
					experienced music enthusiast, we have something for everyone. Whether
					you're looking for new techniques, new sounds, or something in
					between, we have something for you. So what are you waiting for? Start
					exploring now!"
				</p>
			</div>
		</>
	)
}

export default aboutUs
