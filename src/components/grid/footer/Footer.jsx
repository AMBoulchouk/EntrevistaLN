import React, { useState, useContext } from 'react';

import '@styles/Footer.scss';

const Footer = () => {

	return (
		<div className='footer'>
            <div className='top-module'>
                <div className='social'>
                    <button className='facebook'>
                        Facebook_Logo
                    </button>
                    <button className='twitter'>
                        Twitter_Logo
                    </button>
                    <button className='instagram'>
                        Instagram_Logo
                    </button>
                    <button className='rss'>
                        RSS_Logo
                    </button>
                </div>
                <div className="brands">
                    <button className='logo'>
                        La Nacion Logo
                    </button>
                </div>
                <div className="buttonApps">
                    <p>Google Play button</p>
                    <p>Apple Store button</p>
                </div>
            </div>
            <hr />
            <div className="middle-module">
                <div className='links-line-one'>
                    <a href="">Últimas noticias</a>
                    <a href="">Política</a>
                    <a href="">Economía</a>
                    <a href="">El mundo</a>
                    <a href="">Sociedad</a>
                    <a href="">Opinión</a>
                    <a href="">Deportes</a>
                    <a href="">Lifestyle</a>
                    <a href="">Espectáculos</a>
                    <a href="">Edición impresa</a>
                    <a href="">LN+</a>
                    <a href="">Club LA NACION</a>
                </div>
                <div className='links-line-two'>
                    <span>Revistas</span>
                    <a href="">OHLALÁ!</a>
                    <a href="">¡HOLA!</a>
                    <a href="">ROLLING STONE</a>
                    <a href="">LIVING</a>
                    <a href="">BRANDO</a>
                    <a href="">JARDIN</a>
                    <a href="">LUGARES</a>
                </div>
                <div className='links-line-three'>
                    <span>Club del vino:</span>
                    <a href="">Bon vivir</a>
                    <span>Envíos</span>
                    <a href="">HOP</a>
                    <a href="">Colecciones</a>
                    <a href="">Máster en periodismo</a>
                    <a href="">Fundación LA NACION</a>
                    <a href="">Avisos solidarios</a>
                </div>
            </div>
            <hr />
            <div className="bottom-module">
                <div className="fila-uno">
                    <div className="groupLink-one">
                        <a href="">Mapa del sitio</a>
                        <a href="">Ayuda</a>
                        <a href="">Términos y condiciones</a>
                        <a href="">¿Cómo anunciar?</a>
                        <a href="">Suscribirse al diario</a>
                    </div>
                    <div className="groupLink-two">
                        <span>Protegido por re CAPTCHA:</span>
                        <a href="">Condiciones</a>
                        <a href="">Privacidad</a>
                    </div>

                    <div className="groupLink-two"></div>
                </div>
                <div className="fila-dos">
                    <div className="groupLink-three">
                        <span>Copyright 2019 LA NACION | Todos los derechos reservados</span>
                    </div>
                    <div className="groupLink-four">
                        <span>Brand_Logo</span>
                        <span>Miembro de GDA. Grupo de Diarios América</span>
                        <span>data_Fiscal</span>
                    </div>
                </div>
            </div>
		</div>
	);
}

export default Footer;