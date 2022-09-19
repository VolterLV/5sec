import React from 'react'
import '../SCSS/header.scss'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header className='header'>
			<div className='header__container'>
				<div className='header__body'>
					<a className='header__logo'></a>
					<div className='header__menu menu'>
						<button type='button' className='menu__icon icon-menu'>
							<span></span>
						</button>
						<nav className='menu__body'>
							<ul className='menu__list'>
								<li className='menu__item'>
									<div href='' className='menu__link'>
										<Link to='/main'>Main</Link>
									</div>
								</li>
								<li className='menu__item'>
									<div href='' className='menu__link'>
										<Link to='/about'>Rules</Link>
									</div>
								</li>
								<li className='menu__item'>
									<div href='' className='menu__link'>
										<Link to='/score'>Score</Link>
									</div>
								</li>
								<li className='menu__item'>
									<div href='' className='menu__link'>
										<Link to='/game'>Game</Link>
									</div>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	)
}
