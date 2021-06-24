import React from 'react';
import './startPage.sass';

const StartPage = (props) => {
	const start = () => {
		props.startPlaying();
	}

	return (
		<div className="start_page">
			<header>
				<div className="title">Level 1</div>
				<p className="score">Score : 0 (score)</p>
				<p className="timer">Time remaining : 120 s (timer)</p>
			</header>

			<main>
				<h2 className="code">12345 (keynumber)</h2>
			</main>

			<p className="how_to_play">how to play: EZ, just fill the <i>keynumber</i> to INPUT BOX <br /> before <i>timer</i> count to 0, you will get more <i>score</i> !</p>
			<div className="btn btn-default" onClick={start}>Start game</div>
		</div>
	);
}

export default StartPage;