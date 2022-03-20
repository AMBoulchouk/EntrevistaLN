import React, { useState, useContext } from 'react';

import '@styles/Main.scss';

import CardFull from '@components/CardFull';

import AppContext from '@context/AppContext';

const Main = () => {

	return (
		<div className='main-container'>
			<CardFull></CardFull>
		</div>
	);
}

export default Main;