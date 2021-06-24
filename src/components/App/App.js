import './app.sass';
import Header from '../Header/Header';
import StartPage from '../StartPage/StartPage';
import FinishPage from '../FInishPage/FinishPage';
import PlayPage from '../PlayPage/PlayPage';
import React, { useState } from 'react';

const START_SCREEN = 0, PLAYING_SCREEN = 1, FINISH_SCREEN = 2;

function App() {
	const [screen, setScreen] = useState(START_SCREEN);

	const start = () => {
		setScreen(PLAYING_SCREEN);
	}

	const showScreen = () => {
		if (screen === START_SCREEN) {
			return <StartPage startPlaying={start} />;
		}

		if (screen === PLAYING_SCREEN) {
			return <PlayPage />
		}

		if (screen === FINISH_SCREEN) {
			return <FinishPage />
		}
	}

	return (
		<div className="app">
			<Header />
			<div className="app_board">
				{showScreen()}
			</div>
		</div>
	);
}

export default App;
