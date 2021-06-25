import React, { useState, useEffect, useRef } from 'react'
import './playPage.sass';

const MAX_TIME = 1, SHOW_TIME = 1500, MIN_LEVEL = 1;

const getRandom = (level) => {
	return Math.random().toFixed(level + 1).replace('.', '');
}

const PlayPage = (props) => {
	let timerRef = useRef();
	let contentRef = useRef();
	let inputRef = null;

	const [level, setLevel] = useState(1);
	const [timer, setTimer] = useState(30);
	const [counter, setCounter] = useState(1);
	const [correct, setCorrect] = useState(0);
	const [score, setScore] = useState(0);
	const [encode, setEncode] = useState(false);
	const [content, setContent] = useState(getRandom(level));

	const handleChange = (e) => {
		const value = e.target.value;
		const isStartChecking = content.length === value.length;

		if (!isStartChecking) {
			return;
		}

		if (value === content) {
			setCounter(counter + 1);
			setContent(getRandom(level));
			setScore(score + timer + level);
			setCorrect(correct + 1);
			setTimer(timer + 1);
			setEncode(false);
			inputRef.value = '';

			if (counter === MAX_TIME) {
				setLevel(level + 1);
				setCounter(0);
			}
		} else {
			props.setFinish(level, correct, score);
			clearTimeout(timerRef.current);
		}
	};

	const renderContent = () => {
		if (!encode || level < MIN_LEVEL) {
			return content;
		}

		return content.split('').map(item => '*').join('');
	}

	useEffect(() => {
		const contentTimeout = setTimeout(() => {
			setEncode(true);
		}, SHOW_TIME + level * 100);

		return () => clearTimeout(contentTimeout);
	}, [content]);

	useEffect(() => {
		if (timer === 0) {
			props.setFinish(level, correct, score);
			clearTimeout(timerRef.current);
		} else {
			timerRef.current = setTimeout(() => {
				setTimer(timer - 1);
			}, 1000);

			return () => clearTimeout(timerRef.current);
		}
	}, [timer]);

	useEffect(() => {
		if (inputRef) {
			inputRef.focus();
		}
	}, []);

	return (
		<div>
			<div className="play_page">
				<header>
					<div className="title">Level {level}</div>
					<p className="score">Scores : {score}</p>
					<p className="timer">Time remaining : {timer} s</p>
				</header>

				<main>
					<h2 className="code" ref={contentRef}>{renderContent()}</h2>
				</main>

				<div className="form_control">
					<input type="text" ref={r => inputRef = r} maxLength={content.length} onChange={handleChange} />
				</div>
			</div>

		</div>
	)
}

export default PlayPage;
