import React, { useState, useContext } from 'react';

import '@styles/Grid.scss';

import Footer from './footer/Footer';
import PrimeraLinea from './body/PrimeraLinea';

const Grid = () => {

	return (
		<div className='grid'>
            <PrimeraLinea />
		</div>
	);
}

export default Grid;