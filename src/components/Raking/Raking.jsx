import React, { useEffect, useState } from 'react';
import { sortBy } from 'lodash';
import database from '../../firebase.js';
import './ranking.sass';

const Ranking = ({ players = [] }) => {

	const board = () => {
		return sortBy(players, 'score').reverse().map((item, index) => (
			<div className="player" key={item.fb_id}>
				<div className="player_number">{index + 1}.</div>
				<img className="player_avatar" src={item.avatar} alt={item.name} />
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
