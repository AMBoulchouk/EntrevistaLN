import React, { useState, useContext } from 'react';

import '@styles/Main.scss';

import CardFull from '@components/CardFull';
import Grid from './grid/Grid';

import AppContext from '@context/AppContext';

const Main = () => {

	return (
		<div className='main-container'>
			<CardFull></CardFull>
			<Grid></Grid>
		</div>
	);
}

export default Main;