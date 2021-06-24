import React from 'react';
import './finishPage.sass';

const FinishPage = ({ level, score, wrong }) => (
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
			<p className="level">Level 1, Wrong : 4</p>
			<p className="score">Score : 40</p>
		</main>

		<footer>
			{/* <p className="note">Hey hey, wait a minute, login with Facebook <br /> to keep your score in ranking board.</p> */}
			{/* <FacebookLogin
				appId="305414106644378"
				autoLoad={true}
				fields="name,email,picture"
				onClick={this.componentClicked}
				callback={this.responseFacebook} /> */}
		</footer>

		<a href="#" className="btn btn-default" >
			Try again
		</a>
	</div>

);

export default FinishPage;
