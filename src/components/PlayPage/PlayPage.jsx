import React, { useState, useEffect, useRef } from 'react'
import FacebookLogin from 'react-facebook-login';
import './playPage.sass';

const PlayPage = ({  }) => {
	let timeInterval;
	let inputRef = null;

	const [input, setInput] = useState(12345);
	const [level, setLevel] = useState(1);
	const [timer, setTimer] = useState(0);
	const [counter, setCounter] = useState(3);
	const [score, setScore] = useState(0);
	const [endcode, setEndcode] = useState(false);
	const [timeEndcode, setTimeEndcode] = useState(0);
	const [content, setContent] = useState(12345);
	const [finish, setFinish] = useState(false);

	useEffect(() => {
		if (inputRef) {
			inputRef.focus();
		}
	}, []);

	return (
		<div>
			<div className="play_page">
				<header>
					<div className="title">Level 1</div>
					<p className="score">Scores : 10</p>
					<p className="timer">Time remaining : 2 s</p>
				</header>

				<main>
					<h2 className="code">12345</h2>
				</main>

				<div className="form_control">
					<input type="text" ref={r => inputRef = r} />
				</div>
			</div>

		</div>
	)
}

export default PlayPage;
