import './app.sass';
import Header from '../Header/Header';
import StartPage from '../StartPage/StartPage';
import FinishPage from '../FInishPage/FinishPage';
import PlayPage from '../PlayPage/PlayPage';
import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

const START_SCREEN = 0, PLAYING_SCREEN = 1, FINISH_SCREEN = 2;

function App() {
	const [isAuth, setAuth] = useState(false);
	const [screen, setScreen] = useState(START_SCREEN);
	const [level, setLevel] = useState(0);
	const [correct, setCorrect] = useState(0);
	const [score, setScore] = useState(0);
	const [profile, setProfile] = useState();

	const responseFacebook = (response) => {
		if (response.id) {
			setAuth(true);
			setProfile({
				name: response.name,
				fb_id: response.id,
				avatar: response.picture.data.url
			})
		}
	};

	const start = () => {
		setScreen(PLAYING_SCREEN);
	}

	const finish = (l, c, s) => {
		setLevel(l);
		setCorrect(c);
		setScore(s);
		setScreen(FINISH_SCREEN);
	}

	const onboarding = () => {
		setScreen(START_SCREEN);
	}

	const showScreen = () => {
		if (screen === START_SCREEN) {
			return <StartPage startPlaying={start} />;
		}

		if (screen === PLAYING_SCREEN) {
			return <PlayPage setFinish={finish} />
		}

		if (screen === FINISH_SCREEN) {
			return <FinishPage goToStart={onboarding} level={level} correct={correct} score={score} getProfile={responseFacebook} isAuth={isAuth} />
		}
	}

	return (
		<div className="app">
			<Header profile={profile} />
			<div className="app_board">
				{showScreen()}
			</div>

			<div style={{ display: 'none' }}>
				<FacebookLogin
					appId="305414106644378"
					autoLoad={true}
					fields="name,email,picture"
					callback={responseFacebook} />
			</div>
		</div>
	);
}

export default App;
