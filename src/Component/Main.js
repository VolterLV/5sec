import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import '../SCSS/main.scss'
import { Link } from 'react-router-dom'

export default function Main() {
	/* --------------------------------------------------- */

	// Строчка из «Бури» Шекспира. Перевод Михаила Донского.

	/* --------------------------------------------------- */

	let val = 5
	let time = 350
	const [currVal, setCurrVal] = useState(0)

	useEffect(() => {
		currVal !== val && setTimeout(setCurrVal, time, currVal + 1)
	}, [currVal])

	const cleareLocal = () => {
		localStorage.clear()
	}

	return (
		<section className='main__fullscreen-body'>
			{' '}
			<Header />
			<div className='main__fullscreen-wrapper'>
				<div className='main__fullscreen'>
					<div className=' striped-text '>
						{' '}
						<span id='app' className='main__title'>
							{currVal}
						</span>
					</div>
					<div className='striped-text'>Секунд</div>
					<Link className='shrink-border' to='/start'>
						{' '}
						Start
					</Link>{' '}
					<button className='score__cleare-local' onClick={cleareLocal}>
						Delete
					</button>
					<Footer />
				</div>
			</div>
		</section>
	)
}
