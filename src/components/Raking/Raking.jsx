import React from 'react';
import { sortBy } from 'lodash';
import './ranking.sass';
import logo from '../Header/snorlax.svg';

const Ranking = ({ players = [] }) => {

	const handleImageError = (e) => {
		if (e.target) {
			e.target.onerror = null;
			e.target.src = logo;
		}
	}

	const board = () => {
		return sortBy(players, 'score').reverse().map((item, index) => (
			<div className="player" key={item.fb_id}>
				<div className="player_number">{index + 1}.</div>
				<img className="player_avatar" src={item.avatar} alt={item.name} onError={handleImageError} />
				<div className="player_name">{item.name}</div>
				<div className="player_score">({item.score})</div>
			</div>
		))
	};

	return (
		<div className="ranking_board">
			{
				players.length ? board() : (
					<div className="not_found">Not have player yet :(</div>
				)
			}
		</div>
	);
};

export default Ranking;
