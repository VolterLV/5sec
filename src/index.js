import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Component/Main'
import Game from './Component/Game'
import About from './Component/About'
import Score from './Component/Score'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='main' element={<Main />} />
			<Route path='game' element={<Game />} />
			<Route path='about' element={<About />} />
			<Route path='start' element={<Game />} />
			<Route path='score' element={<Score />} />
		</Routes>
	</BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
