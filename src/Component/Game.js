import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import '../SCSS/main.scss'
import '../SCSS/game.scss'

import Modal from 'react-modal'
import useBearStore from '../data/store'
import Timer from '../Elemets/Timer'

/* Modal */
const customStyles = {
	content: {
		background: 'rgb(255, 119, 0)',
		background:
			'linear-gradient(176deg,rgba(255, 119, 0, 1) 0%,rgba(255, 205, 0, 1) 100%)',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		fontFamily: 'Marck Script',
	},
}
/* Modal */

const Game = () => {
	/* ------------State */
	const {
		nameStore1,
		nameStore2,
		nameStore3,
		nameStore4,
		nameStore5,
		nameStore6,
		nameStore7,
		nameStore8,
		nameStore9,
		nameStore10,
		turn,
		incrTurn,
		incrNum1,
		incrNum1P2,
		incrNum1P3,
		incrNum2,
		incrNum2P2,
		incrNum2P3,
		incrNum3,
		incrNum3P2,
		incrNum3P3,
		incrNum4,
		incrNum4P2,
		incrNum4P3,
		incrNum5,
		incrNum5P2,
		incrNum5P3,
		incrNum6,
		incrNum6P2,
		incrNum6P3,
		incrNum7,
		incrNum7P2,
		incrNum7P3,
		incrNum8,
		incrNum8P2,
		incrNum8P3,
		incrNum9,
		incrNum9P2,
		incrNum9P3,
		incrNum10,
		incrNum10P2,
		incrNum10P3,
		turnZero,
		currentName,
		changeCurrentName,
	} = useBearStore()

	const questionSimple = useBearStore(state => state.questionsSimple)
	const questionHard = useBearStore(state => state.questionsHard)
	const questionBible = useBearStore(state => state.questionsBible)
	const questionTest = useBearStore(state => state.questionsTest)
	/* ------------State */
	/* Modal-------------------------------*/
	let subtitle

	const [modalIsOpen, setIsOpen] = useState(false)
	const [modalIsOpen2, setIsOpen2] = useState(false)
	const [modalIsOpen3, setIsOpen3] = useState(false)
	const [modalIsOpen4, setIsOpen4] = useState(false)
	const [modalIsOpen5, setIsOpen5] = useState(false)
	const [changeQuestion, setchangeQuestion] = useState(false)
	const [changeQuestion2, setchangeQuestion2] = useState(false)
	const [changeQuestion3, setchangeQuestion3] = useState(false)
	/* Question1Simple------------------------------------------ */
	const [questions, setQuestions] = useState(questionSimple)

	const [element, setElement] = useState('')

	useEffect(() => {
		if (modalIsOpen === true && questions.length > 0) {
			questionRandom()
			let shifted = questions.shift()
			console.log('shifted', shifted)
		}
	}, [modalIsOpen])

	function questionRandom() {
		if (questions.length > 0) {
			setElement(
				questions.sort(() => Math.random() - Math.random()).find(() => true)
			)
		}
		console.log('questions', questions)
	}

	/* Question1Simple------------------------------------------ */

	/* Question2Hard------------------------------------------ */
	const [questions2, setQuestions2] = useState(questionHard)

	const [element2, setElement2] = useState('')

	useEffect(() => {
		if (modalIsOpen2 === true && questions2.length > 0) {
			questionRandom2()
			let shifted2 = questions3.shift()
			console.log('shifted2', shifted2)
		}
	}, [modalIsOpen2])

	function questionRandom2() {
		if (questions2.length > 0) {
			setElement2(
				questions2.sort(() => Math.random() - Math.random()).find(() => true)
			)
		}
		console.log('questions2', questions2)
	}
	/* Question2Hard------------------------------------------ */

	/* Question3Bible------------------------------------------ */
	const [questions3, setQuestions3] = useState(questionBible)
	/* 	const [questions3, setQuestions3] = useState(questionTest) */
	const [element3, setElement3] = useState('')
	useEffect(() => {
		if (modalIsOpen3 === true && questions3.length > 0) {
			questionRandom3()
			let shifted3 = questions3.shift()
			console.log('shifted3', shifted3)
		}
	}, [modalIsOpen3])
	function questionRandom3() {
		if (questions3.length > 0) {
			setElement3(
				questions3.sort(() => Math.random() - Math.random()).find(() => true)
			)
		}
		console.log('questions3', questions3)
	}

	/* 	useEffect(() => {
		if (modalIsOpen3 === true && questions3.length > 0) {
			questionRandom3()
			getNumber()
			const index3 = element3.index
			console.log('inex3', index3)
			setQuestions3(questions3.filter(item => item.index !== index3))
		}
	}, [modalIsOpen3])

	function questionRandom3() {
		if (questions3.length > 0) {
			setElement3(
				questions3.sort(() => Math.random() - Math.random()).find(() => true)
			)
		}
		console.log('questions3', questions3)
	} */
	/* Question3Bible------------------------------------------ */
	function openModal() {
		setIsOpen(true)
	}
	function openModal2() {
		setIsOpen2(true)
	}
	function openModal3() {
		setIsOpen3(true)
	}
	function openModal4() {
		setIsOpen4(true)
	}
	function openModal5() {
		setIsOpen5(true)
	}
	function afterOpenModal() {
		setchangeQuestion(true)
		setchangeQuestion2(false)
		setchangeQuestion3(false)
	}
	function afterOpenModal2() {
		setchangeQuestion(false)
		setchangeQuestion2(true)
		setchangeQuestion3(false)
	}
	function afterOpenModal3() {
		setchangeQuestion(false)
		setchangeQuestion2(false)
		setchangeQuestion3(true)
	}
	function afterOpenModal4() {}

	function afterOpenModal5() {}
	function closeModal() {
		setIsOpen(false)
	}
	function closeModal2() {
		setIsOpen2(false)
	}
	function closeModal3() {
		setIsOpen3(false)
	}
	function closeModal4() {
		setIsOpen4(false)
	}
	function closeModal5() {
		setIsOpen5(false)

		console.log('turn', turn)
		console.log('currentName', currentName)
		if (currentName === 'player') {
			turnZero()
			changeCurrentName(nameStore1)
		} else {
			incrTurn()
			if (turn === 1) {
				changeCurrentName(nameStore2)
			}
			if (turn === 2) {
				changeCurrentName(nameStore3)
			}
			if (turn === 3) {
				changeCurrentName(nameStore4)
			}
			if (turn === 4) {
				changeCurrentName(nameStore5)
			}
			if (turn === 5) {
				changeCurrentName(nameStore6)
			}
			if (turn === 6) {
				changeCurrentName(nameStore7)
			}
			if (turn === 7) {
				changeCurrentName(nameStore8)
			}
			if (turn === 8) {
				changeCurrentName(nameStore9)
			}
			if (turn === 9) {
				changeCurrentName(nameStore10)
			}
			if (turn === 10) {
				changeCurrentName(nameStore1)
				turnZero()
			}
		}
	}

	/* Modal------------------------------------------ */

	/* 	---------------------Очередь-------------------------------- */

	function plusOne() {
		if (turn === 1) {
			incrNum1()
		}
		if (turn === 2) {
			incrNum2()
		}
		if (turn === 3) {
			incrNum3()
		}
		if (turn === 4) {
			incrNum4()
		}
		if (turn === 5) {
			incrNum5()
		}
		if (turn === 6) {
			incrNum6()
		}
		if (turn === 7) {
			incrNum7()
		}
		if (turn === 8) {
			incrNum8()
		}
		if (turn === 9) {
			incrNum9()
		}
		if (turn === 10) {
			incrNum10()
		}
		closeModal5()
	}
	function plusTwo() {
		if (turn === 1) {
			incrNum1P2()
		}
		if (turn === 2) {
			incrNum2P2()
		}
		if (turn === 3) {
			incrNum3P2()
		}
		if (turn === 4) {
			incrNum4P2()
		}
		if (turn === 5) {
			incrNum5P2()
		}
		if (turn === 6) {
			incrNum6P2()
		}
		if (turn === 7) {
			incrNum7P2()
		}
		if (turn === 8) {
			incrNum8P2()
		}
		if (turn === 9) {
			incrNum9P2()
		}
		if (turn === 10) {
			incrNum10P2()
		}

		closeModal5()
	}
	function plusThree() {
		if (turn === 1) {
			incrNum1P3()
		}
		if (turn === 2) {
			incrNum2P3()
		}
		if (turn === 3) {
			incrNum3P3()
		}
		if (turn === 4) {
			incrNum4P3()
		}
		if (turn === 5) {
			incrNum5P3()
		}
		if (turn === 6) {
			incrNum6P3()
		}
		if (turn === 7) {
			incrNum7P3()
		}
		if (turn === 8) {
			incrNum8P3()
		}
		if (turn === 9) {
			incrNum9P3()
		}
		if (turn === 10) {
			incrNum10P3()
		}

		closeModal5()
	}
	function rightAnswer() {
			
		}	function wrongAnswer() {}

	/* 	---------------------Очередь-------------------------------- */
	return (
		<div>
			<section className='main__fullscreen-body'>
				<Header />
				<Modal
					isOpen={modalIsOpen}
					onAfterOpen={afterOpenModal}
					onRequestClose={closeModal}
					style={customStyles}
					ariaHideApp={false}
					contentLabel='Example Modal'
				>
					<div className='modal__content'>
						{questions.length > 0
							? element.question
							: 'Нету больше простых вопросов! Придумай сам!'}
					</div>
				</Modal>
				<Modal
					isOpen={modalIsOpen2}
					onAfterOpen={afterOpenModal2}
					onRequestClose={closeModal2}
					style={customStyles}
					ariaHideApp={false}
					contentLabel='Example Modal'
				>
					<div className='modal__content'>
						{questions2.length > 0
							? element2.question
							: 'Нету больше сложных вопросов! Придумай сам!'}
					</div>
				</Modal>
				<Modal
					isOpen={modalIsOpen3}
					onAfterOpen={afterOpenModal3}
					onRequestClose={closeModal3}
					style={customStyles}
					ariaHideApp={false}
					contentLabel='Example Modal'
				>
					<div className='modal__content'>
						{questions3.length > 0
							? element3.question
							: 'Нету больше библейских вопросов! Придумай сам!'}
					</div>
				</Modal>
				<Modal
					isOpen={modalIsOpen4}
					onAfterOpen={afterOpenModal4}
					onRequestClose={closeModal4}
					style={customStyles}
					ariaHideApp={false}
					contentLabel='Example Modal'
				>
					<div className='modal__content'>
						Так и выбери его сам! <br></br>
						<br></br> И вопрос пусть придумает!
					</div>
				</Modal>
				<Modal
					isOpen={modalIsOpen5}
					onAfterOpen={afterOpenModal5}
					onRequestClose={closeModal5}
					style={customStyles}
					ariaHideApp={false}
					contentLabel='Example Modal'
				>
					<div className='modal__content'>
						{' '}
						Игрок: {turn === 1 ? nameStore1 : currentName}
						<>
							<button className='shrink-border' onClick={closeModal5}>
								+0
							</button>
							<button className='shrink-border' onClick={plusOne}>
								+1
							</button>
							<button className='shrink-border' onClick={plusTwo}>
								+2
							</button>
							<button className='shrink-border' onClick={plusThree}>
								+3
							</button>
						</>
					</div>
				</Modal>
				<div className='main__fullscreen-wrapper'>
					<div className='main__container'>
						<div className='main__fullscreen'>
							<h1 className=' striped-text'>Игра</h1>
							<div className='game__question'>
								Ход игрока: {turn === 1 ? nameStore1 : currentName}
							</div>
							<div className='game__categories'>
								<button className='shrink-border' onClick={openModal}>
									Простой
								</button>
								<button className='shrink-border' onClick={openModal2}>
									!Сложный!
								</button>
								<button className='shrink-border' onClick={openModal3}>
									Библейский
								</button>
								<button className='shrink-border' onClick={openModal4}>
									От соперника
								</button>
							</div>
							<div className='game__question'>
								<span>
									"Назови{' '}
									{changeQuestion === true
										? element.question
										: changeQuestion2 === true
										? element2.question
										: changeQuestion3 === true
										? element3.question
										: 'три, прояви смекалку и не реви.'}
								</span>
							</div>
							<Timer />
							<button className='shrink-border' onClick={openModal5}>
								Next Round
							</button>
							<button className='shrink-border' onClick={rightAnswer}>
								Правильный ответ
							</button>{' '}
							<button className='shrink-border' onClick={wrongAnswer}>
								Неправильный ответ
							</button>
						</div>
					</div>
				</div>{' '}
			</section>{' '}
			<Footer />
		</div>
	)
}

export default Game
