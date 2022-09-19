import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../SCSS/main.scss'

const About = () => {
	return (
		<div>
			{' '}
			<section className='main__fullscreen-body'>
				{' '}
				<Header />
				<div className='main__container'>
					<div className='main__fullscreen-wrapper'>
						<div className='main__fullscreen'>
							<h1 className=' striped-text'>Правила</h1>
							<div className='about__text'>
								Правила игры 10 секунд <strong>элементарны</strong> : активный
								игрок выбирает категорию вопроса (простой - 1бал, библейский -
								2бала, вопрос от соперник - 2бала, сложный - 3бала) и за 10
								секунд обязан ответить на вопрос. Вопрос обязательно должен
								состоять из фразы: "Назовите три..." Если игрок не ответил на
								вопрос в порядке очереди у других игроков есть возможность
								ответить на тот же вопрос и заработать дополнительный 1бал. (не
								повторяя варианты уже названные)
							</div>

							<Footer />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default About

