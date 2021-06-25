import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import './finishPage.sass';

const FinishPage = ({ level, correct, score, goToStart, isAuth, getProfile }) => {

	const componentClicked = () => {

	};

	const responseFacebook = (response) => {
		getProfile(response);
	};

	return (
		<div className="finish_page">
			<header>
				<h2 className="title">
					<span>F</span>
					<span>I</span>
					<span>N</span>
					<span>I</span>
					<span>S</span>
					<span>H</span>
					<span>E</span>
					<span>D</span>
				</h2>
			</header>

			<main>
				<p className="level">Level {level}, Correct : {correct}</p>
				<p className="score">Score : {score}</p>
			</main>

			{
				!isAuth ? (
					<footer>
						<p className="note">WAIT WAIT, wait a minute, login with Facebook <br /> to keep your score in ranking board.</p>
						<div className="facebook_login_btn">
							<FacebookLogin
								appId="305414106644378"
								autoLoad={true}
								fields="name,email,picture"
								callback={responseFacebook}
								onClick={componentClicked} />
						</div>
					</footer>
				) : (
					<div href="#" className="btn btn-default" onClick={goToStart}>Save and Try again</div>
				)
			}
		</div>

	);
}

export default FinishPage;
