import './header.sass';
import React from 'react';
import classNames from 'classnames';
import logo from './snorlax.svg';

const Header = ({ profile = { } }) => (
	<div className="header">
		<div className="header_logo">
			<div>N</div>
			<div>u</div>
			<div>m</div>
			<div>b</div>
			<div>s</div>
		</div>

		<div className={classNames("header_icon", profile.avatar ? 'auth' : '')} style={{ backgroundImage: `url(${profile.avatar || logo})` }} />

		<div className="header_menu">
			<div className="header_menu_item">About</div>
		</div>
	</div>
);

export default Header;
