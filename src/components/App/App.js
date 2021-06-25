import './app.sass';
import Header from '../Header/Header';
import StartPage from '../StartPage/StartPage';
import FinishPage from '../FInishPage/FinishPage';
import PlayPage from '../PlayPage/PlayPage';
import Ranking from '../Raking/Raking.jsx';
import React, { useState, useEffect } from 'react';
import FacebookLogin from 'react-facebook-login';
import database from '../../firebase.js';

const START_SCREEN = 0, PLAYING_SCREEN = 1, FINISH_SCREEN = 2;

function App() {
	const [isAuth, setAuth] = useState(false);
	const [screen, setScreen] = useState(START_SCREEN);
	const [level, setLevel] = useState(0);
	const [correct, setCorrect] = useState(0);
	const [score, setScore] = useState(0);
	const [profile, setProfile] = useState();
	const [ranking, setRanking] = useState(false);
	const [players, setPlayers] = useState([]);

	const responseFacebook = (response) => {
		if (response.id) {
			setAuth(true);

			const p = {
				name: response.name,
				email: response.email,
				fb_id: response.userID,
				avatar: response.picture.data.url
			};

			setProfile(p);

			if (screen === FINISH_SCREEN) {
				saveScore(p, score);
			}
		}
	};

	const saveScore = (p, s) => {
		const player = players.find(item => item.fb_id === p.fb_id);

		if (!player || player.score < s) {
			database.ref('players/' + p.fb_id).set({
				...p,
				score: s
			});
		}
	}

	const start = () => {
		setScreen(PLAYING_SCREEN);
	}

	const finish = (l, c, s) => {
		setLevel(l);
		setCorrect(c);
		setScore(s);
		setScreen(FINISH_SCREEN);

		saveScore(profile, s);
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

	const toggle = () => {
		setRanking(!ranking);
	};

	useEffect(() => {
		database.ref('players/').on('value', (snapshot) => {
			const data = snapshot.val();
			setPlayers(Object.values(data));
		})
	}, []);

	return (
		<div className="app">
			<Header profile={profile} toggleRanking={toggle} />
			{ ranking && <Ranking players={players} /> }
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
