import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../SCSS/main.scss'
import { Link } from 'react-router-dom'
import useBearStore from '../data/store'


const Score = () => {
	/* ------------Счет--------------- */
	const {
		nameStore1,
		changeName1,
		count1,
		incrNum1,
		decrNum1,
		nameStore2,
		changeName2,
		count2,
		incrNum2,
		decrNum2,
		nameStore3,
		changeName3,
		count3,
		incrNum3,
		decrNum3,
		nameStore4,
		changeName4,
		count4,
		incrNum4,
		decrNum4,
		nameStore5,
		changeName5,
		count5,
		incrNum5,
		decrNum5,
		nameStore6,
		changeName6,
		count6,
		incrNum6,
		decrNum6,
		nameStore7,
		changeName7,
		count7,
		incrNum7,
		decrNum7,
		nameStore8,
		changeName8,
		count8,
		incrNum8,
		decrNum8,
		nameStore9,
		changeName9,
		count9,
		incrNum9,
		decrNum9,
		nameStore10,
		changeName10,
		count10,
		incrNum10,
		decrNum10,
	} = useBearStore()


	const printName1 = event => {
		changeName1(event.target.value)
		event.target.value = ''
	}
	const printName2 = event => {
		changeName2(event.target.value)
		event.target.value = ''
	}
	const printName3 = event => {
		changeName3(event.target.value)
		event.target.value = ''
	}

	const printName4 = event => {
		changeName4(event.target.value)
		event.target.value = ''
	}
	const printName5 = event => {
		changeName5(event.target.value)
		event.target.value = ''
	}
	const printName6 = event => {
		changeName6(event.target.value)
		event.target.value = ''
	}
	const printName7 = event => {
		changeName7(event.target.value)
		event.target.value = ''
	}
	const printName8 = event => {
		changeName8(event.target.value)
		event.target.value = ''
	}

	const printName9 = event => {
		changeName9(event.target.value)
		event.target.value = ''
	}
	const printName10 = event => {
		changeName10(event.target.value)
		event.target.value = ''
	}

	return (
		<div>
			{' '}
			<section className='main__fullscreen-body'>
				{' '}
				<Header />
				<div className='main__container'>
					<div className='main__fullscreen-wrapper'>
						<div className='main__fullscreen'>
							<h1 className=' striped-text'>Счёт</h1>
							{/* 						<h1 className='score__title'>Счёт</h1> */}
							{/* 							-------тест-зюстанд------------ */}
							<div className='score__box'>
								<div className='score__person'>
									<input
										type='text'
										value={nameStore1 || ''}
										placeholder='name1'
										onChange={event => printName1(event)}
									/>
								</div>
								<div className='score__inpute'>
									<input
										className='score__number'
										min='1'
										name='quantity'
										value={count1}
									/>
									<input
										className='score__icon'
										type='button'
										value='-'
										onClick={decrNum1}
									/>
									<input
										className='score__icon'
										type='button'
										value='+'
										onClick={incrNum1}
									/>
								</div>
							</div>
							<div className='score__box'>
								<div className='score__person'>
									<input
										type='text'
										value={nameStore2 || ''}
										placeholder='name2'
										onChange={event => printName2(event)}
									/>
								</div>
								<div className='score__inpute'>
									<input
										className='score__number'
										min='1'
										name='quantity'
										value={count2}
									/>
									<input
										className='score__icon'
										type='button'
										value='-'
										onClick={decrNum2}
									/>
									<input
										className='score__icon'
										type='button'
										value='+'
										onClick={incrNum2}
									/>
								</div>
							</div>
							<div className='score__box'>
								<div className='score__person'>
									<input
										type='text'
										value={nameStore3 || ''}
										placeholder='name3'
										onChange={event => printName3(event)}
									/>
								</div>
								<div className='score__inpute'>
									<input
										className='score__number'
										min='1'
										name='quantity'
										value={count3}
									/>
									<input
										className='score__icon'
										type='button'
										value='-'
										onClick={decrNum3}
									/>
									<input
										className='score__icon'
										type='button'
										value='+'
										onClick={incrNum3}
									/>
								</div>
							</div>{' '}
							<div className='score__box'>
								<div className='score__person'>
									<input
										type='text'
										value={nameStore4 || ''}
										placeholder='name4'
										onChange={event => printName4(event)}
									/>
								</div>
								<div className='score__inpute'>
									<input
										className='score__number'
										min='1'
										name='quantity'
										value={count4}
									/>
									<input
										className='score__icon'
										type='button'
										value='-'
										onClick={decrNum4}
									/>
									<input
										className='score__icon'
										type='button'
										value='+'
										onClick={incrNum4}
									/>
								</div>
							</div>{' '}
							<div className='score__box'>
								<div className='score__person'>
									<input
										type='text'
										value={nameStore5 || ''}
										placeholder='name5'
										onChange={event => printName5(event)}
									/>
								</div>
								<div className='score__inpute'>
									<input
										className='score__number'
										min='1'
										name='quantity'
										value={count5}
									/>
									<input
										className='score__icon'
										type='button'
										value='-'
										onClick={decrNum5}
									/>
									<input
										className='score__icon'
										type='button'
										value='+'
										onClick={incrNum5}
									/>
								</div>
							</div>{' '}
							<div className='score__box'>
								<div className='score__person'>
									<input
										type='text'
										value={nameStore6 || ''}
										placeholder='name6'
										onChange={event => printName6(event)}
									/>
								</div>
								<div className='score__inpute'>
									<input
										className='score__number'
										min='1'
										name='quantity'
										value={count6}
									/>
									<input
										className='score__icon'
										type='button'
										value='-'
										onClick={decrNum6}
									/>
									<input
										className='score__icon'
										type='button'
										value='+'
										onClick={incrNum6}
									/>
								</div>
							</div>
							<div className='score__box'>
								<div className='score__person'>
									<input
										type='text'
										value={nameStore7 || ''}
										placeholder='name7'
										onChange={event => printName7(event)}
									/>
								</div>
								<div className='score__inpute'>
									<input
										className='score__number'
										min='1'
										name='quantity'
										value={count7}
									/>
									<input
										className='score__icon'
										type='button'
										value='-'
										onClick={decrNum7}
									/>
									<input
										className='score__icon'
										type='button'
										value='+'
										onClick={incrNum7}
									/>
								</div>
							</div>
							<div className='score__box'>
								<div className='score__person'>
									<input
										type='text'
										value={nameStore8 || ''}
										placeholder='name8'
										onChange={event => printName8(event)}
									/>
								</div>
								<div className='score__inpute'>
									<input
										className='score__number'
										min='1'
										name='quantity'
										value={count8}
									/>
									<input
										className='score__icon'
										type='button'
										value='-'
										onClick={decrNum8}
									/>
									<input
										className='score__icon'
										type='button'
										value='+'
										onClick={incrNum8}
									/>
								</div>
							</div>
							<div className='score__box'>
								<div className='score__person'>
									<input
										type='text'
										value={nameStore9 || ''}
										placeholder='name9'
										onChange={event => printName9(event)}
									/>
								</div>
								<div className='score__inpute'>
									<input
										className='score__number'
										min='1'
										name='quantity'
										value={count9}
									/>
									<input
										className='score__icon'
										type='button'
										value='-'
										onClick={decrNum9}
									/>
									<input
										className='score__icon'
										type='button'
										value='+'
										onClick={incrNum9}
									/>
								</div>
							</div>
							<div className='score__box'>
								<div className='score__person'>
									<input
										type='text'
										value={nameStore10 || ''}
										placeholder='name10'
										onChange={event => printName10(event)}
									/>
								</div>
								<div className='score__inpute'>
									<input
										className='score__number'
										min='1'
										name='quantity'
										value={count10}
									/>
									<input
										className='score__icon'
										type='button'
										value='-'
										onClick={decrNum10}
									/>
									<input
										className='score__icon'
										type='button'
										value='+'
										onClick={incrNum10}
									/>
								</div>
							</div>
							{/* 							-------тест-зюстанд------------ */}
							<Link className='score__icon' to='/start'>
								{' '}
								Start
							</Link>

							<Footer />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Score
/* 
							<div className='score__box'>
								<div className='score__person'>
									<input type='text' value={name} onChange={handleChangeName} />
								</div>
								<div className='score__inpute'>
									<input
										className='score__number'
										min='1'
										name='quantity'
										value={num}
										onChange={handleChange}
									/>
									<input
										className='score__icon'
										type='button'
										value='-'
										onClick={decNum}
									/>
									<input
										className='score__icon'
										type='button'
										value='+'
										onClick={incNum}
									/>
								</div>
							</div>
							<div className='score__box'>
								<div className='score__person'>
									<input
										type='text'
										value={name1}
										onChange={handleChangeName1}
									/>
								</div>
								<div className='score__inpute'>
									<input
										className='score__number'
										min='1'
										name='quantity'
										value={num1}
										onChange={handleChange1}
									/>
									<input
										className='score__icon'
										type='button'
										value='-'
										onClick={decNum1}
									/>
									<input
										className='score__icon'
										type='button'
										value='+'
										onClick={incNum1}
									/>
								</div>
							</div>
							<div className='score__box'>
								<div className='score__person'>
									<input
										type='text'
										value={name2}
										onChange={handleChangeName2}
									/>
								</div>
								<div className='score__inpute'>
									<input
										className='score__number'
										min='1'
										name='quantity'
										value={num2}
										onChange={handleChange2}
									/>
									<input
										className='score__icon'
										type='button'
										value='-'
										onClick={decNum2}
									/>
									<input
										className='score__icon'
										type='button'
										value='+'
										onClick={incNum2}
									/>
								</div>
							</div>
							<div className='score__box'>
								<div className='score__person'>
									<input
										type='text'
										value={name3}
										onChange={handleChangeName3}
									/>
								</div>
								<div className='score__inpute'>
									<input
										className='score__number'
										min='1'
										name='quantity'
										value={num3}
										onChange={handleChange3}
									/>
									<input
										className='score__icon'
										type='button'
										value='-'
										onClick={decNum3}
									/>
									<input
										className='score__icon'
										type='button'
										value='+'
										onClick={incNum3}
									/>
								</div>
							</div>
							<div className='score__box'>
								<div className='score__person'>
									<input
										type='text'
										value={name4}
										onChange={handleChangeName4}
									/>
								</div>
								<div className='score__inpute'>
									<input
										className='score__number'
										min='1'
										name='quantity'
										value={num4}
										onChange={handleChange4}
									/>
									<input
										className='score__icon'
										type='button'
										value='-'
										onClick={decNum4}
									/>
									<input
										className='score__icon'
										type='button'
										value='+'
										onClick={incNum4}
									/>
								</div>
							</div>
							<div className='score__box'>
								<div className='score__person'>
									<input
										type='text'
										value={name5}
										onChange={handleChangeName5}
									/>
								</div>
								<div className='score__inpute'>
									<input
										className='score__number'
										min='1'
										name='quantity'
										value={num5}
										onChange={handleChange5}
									/>
									<input
										className='score__icon'
										type='button'
										value='-'
										onClick={decNum5}
									/>
									<input
										className='score__icon'
										type='button'
										value='+'
										onClick={incNum5}
									/>
								</div>
							</div>
							<div className='score__box'>
								<div className='score__person'>
									<input
										type='text'
										value={name6}
										onChange={handleChangeName6}
									/>
								</div>
								<div className='score__inpute'>
									<input
										className='score__number'
										min='6'
										name='quantity'
										value={num6}
										onChange={handleChange6}
									/>
									<input
										className='score__icon'
										type='button'
										value='-'
										onClick={decNum6}
									/>
									<input
										className='score__icon'
										type='button'
										value='+'
										onClick={incNum6}
									/>
								</div>
							</div>
							<div className='score__box'>
								<div className='score__person'>
									<input
										type='text'
										value={name7}
										onChange={handleChangeName7}
									/>
								</div>
								<div className='score__inpute'>
									<input
										className='score__number'
										min='7'
										name='quantity'
										value={num7}
										onChange={handleChange7}
									/>
									<input
										className='score__icon'
										type='button'
										value='-'
										onClick={decNum7}
									/>
									<input
										className='score__icon'
										type='button'
										value='+'
										onClick={incNum7}
									/>
								</div>
							</div>
							<div className='score__box'>
								<div className='score__person'>
									<input
										type='text'
										value={name8}
										onChange={handleChangeName8}
									/>
								</div>
								<div className='score__inpute'>
									<input
										className='score__number'
										min='8'
										name='quantity'
										value={num8}
										onChange={handleChange8}
									/>
									<input
										className='score__icon'
										type='button'
										value='-'
										onClick={decNum8}
									/>
									<input
										className='score__icon'
										type='button'
										value='+'
										onClick={incNum8}
									/>
								</div>
							</div>
							<div className='score__box'>
								<div className='score__person'>
									<input
										type='text'
										value={name9}
										onChange={handleChangeName9}
									/>
								</div>
								<div className='score__inpute'>
									<input
										className='score__number'
										min='9'
										name='quantity'
										value={num9}
										onChange={handleChange9}
									/>
									<input
										className='score__icon'
										type='button'
										value='-'
										onClick={decNum9}
									/>
									<input
										className='score__icon'
										type='button'
										value='+'
										onClick={incNum9}
									/>
								</div>
							</div> */
/* 	let [name, setName] = useState('1')
	let [name1, setName1] = useState('2')
	let [name2, setName2] = useState('3')
	let [name3, setName3] = useState('4')
	let [name4, setName4] = useState('5')
	let [name5, setName5] = useState('6')
	let [name6, setName6] = useState('7')
	let [name7, setName7] = useState('8')
	let [name8, setName8] = useState('9')
	let [name9, setName9] = useState('10')
	let [num, setNum] = useState(0)
	let [num1, setNum1] = useState(0)
	let [num2, setNum2] = useState(0)
	let [num3, setNum3] = useState(0)
	let [num4, setNum4] = useState(0)
	let [num5, setNum5] = useState(0)
	let [num6, setNum6] = useState(0)
	let [num7, setNum7] = useState(0)
	let [num8, setNum8] = useState(0)
	let [num9, setNum9] = useState(0)

	let incNum = () => {
		setNum(Number(num) + 1)
	}
	let decNum = () => {
		if (num > 0) {
			setNum(num - 1)
		}
	}
	let incNum1 = () => {
		setNum1(Number(num1) + 1)
	}
	let decNum1 = () => {
		if (num1 > 0) {
			setNum1(num1 - 1)
		}
	}
	let incNum2 = () => {
		setNum2(Number(num2) + 1)
	}
	let decNum2 = () => {
		if (num2 > 0) {
			setNum2(num2 - 1)
		}
	}
	let incNum3 = () => {
		setNum3(Number(num3) + 1)
	}
	let decNum3 = () => {
		if (num3 > 0) {
			setNum3(num3 - 1)
		}
	}
	let incNum4 = () => {
		setNum4(Number(num4) + 1)
	}
	let decNum4 = () => {
		if (num4 > 0) {
			setNum4(num4 - 1)
		}
	}
	let incNum5 = () => {
		setNum5(Number(num5) + 1)
	}
	let decNum5 = () => {
		if (num5 > 0) {
			setNum5(num5 - 1)
		}
	}
	let incNum6 = () => {
		setNum6(Number(num6) + 1)
	}
	let decNum6 = () => {
		if (num6 > 0) {
			setNum6(num6 - 1)
		}
	}
	let incNum7 = () => {
		setNum7(Number(num7) + 1)
	}
	let decNum7 = () => {
		if (num7 > 0) {
			setNum7(num7 - 1)
		}
	}
	let incNum8 = () => {
		setNum8(Number(num8) + 1)
	}
	let decNum8 = () => {
		if (num8 > 0) {
			setNum8(num8 - 1)
		}
	}
	let incNum9 = () => {
		setNum9(Number(num9) + 1)
	}
	let decNum9 = () => {
		if (num9 > 0) {
			setNum9(num9 - 1)
		}
	}
	let handleChangeName = e => {
		setName(e.target.value)
	}
	let handleChangeName1 = e => {
		setName1(e.target.value)
	}
	let handleChangeName2 = e => {
		setName2(e.target.value)
	}
	let handleChangeName3 = e => {
		setName3(e.target.value)
	}
	let handleChangeName4 = e => {
		setName4(e.target.value)
	}
	let handleChangeName5 = e => {
		setName5(e.target.value)
	}
	let handleChangeName6 = e => {
		setName6(e.target.value)
	}
	let handleChangeName7 = e => {
		setName7(e.target.value)
	}
	let handleChangeName8 = e => {
		setName8(e.target.value)
	}
	let handleChangeName9 = e => {
		setName9(e.target.value)
	}

	let handleChange = e => {
		setNum(e.target.value)
	}

	let handleChange1 = e => {
		setNum1(e.target.value)
	}
	let handleChange2 = e => {
		setNum2(e.target.value)
	}
	let handleChange3 = e => {
		setNum3(e.target.value)
	}
	let handleChange4 = e => {
		setNum4(e.target.value)
	}
	let handleChange5 = e => {
		setNum5(e.target.value)
	}
	let handleChange6 = e => {
		setNum6(e.target.value)
	}
	let handleChange7 = e => {
		setNum7(e.target.value)
	}
	let handleChange8 = e => {
		setNum8(e.target.value)
	}
	let handleChange9 = e => {
		setNum9(e.target.value)
	}

	useEffect(() => {
		getLocalNum()
	}, [])

	useEffect(() => {
		saveLocalNum()
	}, [
		num,
		num1,
		name,
		name1,
		num2,
		name2,
		num3,
		name3,
		num4,
		name4,
		num5,
		name5,
		num6,
		name6,
		num7,
		name7,
		num8,
		name8,
		num9,
		name9,
	])
	//save to Local
	const saveLocalNum = () => {
		localStorage.setItem('num', JSON.stringify(num))
		localStorage.setItem('num1', JSON.stringify(num1))
		localStorage.setItem('num2', JSON.stringify(num2))
		localStorage.setItem('num3', JSON.stringify(num3))
		localStorage.setItem('num4', JSON.stringify(num4))
		localStorage.setItem('num5', JSON.stringify(num5))
		localStorage.setItem('num6', JSON.stringify(num6))
		localStorage.setItem('num7', JSON.stringify(num7))
		localStorage.setItem('num8', JSON.stringify(num8))
		localStorage.setItem('num9', JSON.stringify(num9))
		localStorage.setItem('name', JSON.stringify(name))
		localStorage.setItem('name1', JSON.stringify(name1))
		localStorage.setItem('name2', JSON.stringify(name2))
		localStorage.setItem('name3', JSON.stringify(name3))
		localStorage.setItem('name4', JSON.stringify(name4))
		localStorage.setItem('name5', JSON.stringify(name5))
		localStorage.setItem('name6', JSON.stringify(name6))
		localStorage.setItem('name7', JSON.stringify(name7))
		localStorage.setItem('name8', JSON.stringify(name8))
		localStorage.setItem('name9', JSON.stringify(name9))
	}
	const getLocalNum = () => {
		if (
			localStorage.getItem('num') === null ||
			localStorage.getItem('num1') === null ||
			localStorage.getItem('num2') === null ||
			localStorage.getItem('num3') === null ||
			localStorage.getItem('num4') === null ||
			localStorage.getItem('num5') === null ||
			localStorage.getItem('num6') === null ||
			localStorage.getItem('num7') === null ||
			localStorage.getItem('num8') === null ||
			localStorage.getItem('num9') === null ||
			localStorage.getItem('name') === null ||
			localStorage.getItem('name1') === null ||
			localStorage.getItem('name2') === null ||
			localStorage.getItem('name3') === null ||
			localStorage.getItem('name4') === null ||
			localStorage.getItem('name5') === null ||
			localStorage.getItem('name6') === null ||
			localStorage.getItem('name7') === null ||
			localStorage.getItem('name8') === null ||
			localStorage.getItem('name9') === null
		) {
			localStorage.setItem('name', JSON.stringify([]))
			localStorage.setItem('num', JSON.stringify([]))

			localStorage.setItem('name1', JSON.stringify([]))
			localStorage.setItem('num1', JSON.stringify([]))

			localStorage.setItem('name2', JSON.stringify([]))
			localStorage.setItem('num2', JSON.stringify([]))

			localStorage.setItem('name3', JSON.stringify([]))
			localStorage.setItem('num3', JSON.stringify([]))

			localStorage.setItem('num4', JSON.stringify([]))
			localStorage.setItem('name4', JSON.stringify([]))

			localStorage.setItem('num5', JSON.stringify([]))
			localStorage.setItem('name5', JSON.stringify([]))

			localStorage.setItem('num6', JSON.stringify([]))
			localStorage.setItem('name6', JSON.stringify([]))

			localStorage.setItem('num7', JSON.stringify([]))
			localStorage.setItem('name7', JSON.stringify([]))

			localStorage.setItem('num8', JSON.stringify([]))
			localStorage.setItem('name8', JSON.stringify([]))

			localStorage.setItem('num9', JSON.stringify([]))
			localStorage.setItem('name9', JSON.stringify([]))
		} else {
			let numLocal = JSON.parse(localStorage.getItem('num'))
			let nameLocal = JSON.parse(localStorage.getItem('name'))

			let numLocal1 = JSON.parse(localStorage.getItem('num1'))
			let nameLocal1 = JSON.parse(localStorage.getItem('name1'))

			let numLocal2 = JSON.parse(localStorage.getItem('num2'))
			let nameLocal2 = JSON.parse(localStorage.getItem('name2'))

			let numLocal3 = JSON.parse(localStorage.getItem('num3'))
			let nameLocal3 = JSON.parse(localStorage.getItem('name3'))

			let numLocal4 = JSON.parse(localStorage.getItem('num4'))
			let nameLocal4 = JSON.parse(localStorage.getItem('name4'))

			let numLocal5 = JSON.parse(localStorage.getItem('num5'))
			let nameLocal5 = JSON.parse(localStorage.getItem('name5'))

			let numLocal6 = JSON.parse(localStorage.getItem('num6'))
			let nameLocal6 = JSON.parse(localStorage.getItem('name6'))

			let numLocal7 = JSON.parse(localStorage.getItem('num7'))
			let nameLocal7 = JSON.parse(localStorage.getItem('name7'))

			let numLocal8 = JSON.parse(localStorage.getItem('num8'))
			let nameLocal8 = JSON.parse(localStorage.getItem('name8'))

			let numLocal9 = JSON.parse(localStorage.getItem('num9'))
			let nameLocal9 = JSON.parse(localStorage.getItem('name9'))

			setNum(numLocal)
			setName(nameLocal)

			setNum1(numLocal1)
			setName1(nameLocal1)

			setNum2(numLocal2)
			setName2(nameLocal2)

			setNum3(numLocal3)
			setName3(nameLocal3)

			setNum4(numLocal4)
			setName4(nameLocal4)

			setNum5(numLocal5)
			setName5(nameLocal5)

			setNum6(numLocal6)
			setName6(nameLocal6)

			setNum7(numLocal7)
			setName7(nameLocal7)

			setNum8(numLocal8)
			setName8(nameLocal8)

			setNum9(numLocal9)
			setName9(nameLocal9)
		}
	} */
