import React, { useState, useContext } from 'react';

import '@styles/CardFull.scss';

const Main = () => {

    return (
        <div className='card-full-screen'>
            <div className='content'>
                <div className='card-full-screen_chapita'>
                    <span>INFOGRAFIA</span>
                </div>
                <div className="card-full-screen_card-body">
                    <div className='card-full-screen_card-body_title'>
                        <h1>Lead. Title esto es un titulo de la novedad con unas cuantas lineas que ocupar</h1>
                    </div>
                    <div className='card-full-screen_card-body_author'>
                        <span>Marquee</span>  / <span>Author</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;