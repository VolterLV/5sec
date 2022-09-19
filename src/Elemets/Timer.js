import React from 'react'
import '../SCSS/main.scss'
import '../SCSS/game.scss'
import { useTimer } from 'use-timer'
import useSound from 'use-sound'
import mySound from '../mixkit-bike-bell-ring-595.wav'

export default function Timer() {
	/* Timer------------------------------------------ */
	const { time, start, pause, reset } = useTimer({
		endTime: 0,
		initialTime: 5,
		timerType: 'DECREMENTAL',
		onTimeOver: () => {
			playSound()
		},
	})
	/* Timer------------------------------------------ */
	const [playSound] = useSound(mySound)
	return (
		<div className='game__timer timer__game'>
			<div className='game__timer-body'>
				<button onClick={start} className='shrink-border'>
					Старт
				</button>
				<button onClick={pause} className='shrink-border'>
					Пауза
				</button>
				<button onClick={reset} className='shrink-border'>
					Рестарт
				</button>
			</div>
			<p className=' timer__time'>{time}</p>
		</div>
	)
}
