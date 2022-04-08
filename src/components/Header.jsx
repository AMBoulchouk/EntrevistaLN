import React from 'react';

import '@styles/Header.scss';

const Header = () => {

	return (
		<div className='navigation-bar'>
			<nav className='navigation-bar_base'>
				<div className='navigation-bar_base_content'>
					<div className='navigation-bar_base_content_actions-left'>
						<button className='secciones'>
							<strong>
								SECCIONES
							</strong>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M3 5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H4C3.44772 6 3 5.55228 3 5ZM3 12C3 11.4477 3.44772 11 4  11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 19C3 18.4477 3.44772 18 4 18H20C20.5523 18 21  18.4477 21 19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19Z" fill="#272727"></path></svg>
						</button>
						<button className='buscar'>
							<strong>
								BUSCAR
							</strong>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24"><path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11  2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867  4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="#272727"></path></svg>
						</button>
					</div>
					<div className='navigation-bar_base_content_brands'>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="-15077.383 26 200 19.802"> <g id="Logo_LN" data-name="Logo LN" fill="#006998" transform="translate(-15657.383 8)"> <path id="Path_1" data-name="Path 1" d="M0,18.847v-1.3H3.26V1.294H0V0H13.036V1.294H9.445V17.551h.767c4.283,0,7.7-1.111,7.7-5.4v-.812h1.612v7.5Z" transform="translate(580 18.396)"></path> <path id="Path_2" data-name="Path 2" d="M23.925,17.523,14.232,0H11.791L3.447,15.927a2.859,2.859,0,0,1-2.788,1.6H0v1.3H7.825v-1.3H6.41c-.821,0-1.534-.1-1.534-.98a1.746,1.746,0,0,1,.288-.8 L6.28,13.568h8.462l2.124,3.954H13.741v1.3H26.636v-1.3h-2.71ZM6.957,12.284l3.412-6.4h.278l3.417,6.4Z" transform="translate(600.654 18.594)"></path> <path id="Path_3" data-name="Path 3" d="M0,18.847v-1.3H.944c1.134,0,2.2-.293,2.2-1.923V3.4A2.323,2.323,0,0,0,.669,1.294H.113V0H9.53L19.913,11.135h.075V2.816c0-1.027-.882-1.521-2.5-1.521 H16.51V0h8.048V1.294h-.79c-1.666,0-2.35.767-2.35,1.438V18.847H18.729L4.628,3.67H4.554v12.1c0,1.525.811,1.784,2.848,1.784h.63v1.3Z" transform="translate(639.742 18.396)"></path> <path id="Path_4" data-name="Path 4" d="M23.929,17.523,14.25,0H11.8L3.449,15.927a2.843,2.843,0,0,1-2.787,1.6H0v1.3H7.851v-1.3H6.407c-.813,0-1.524-.1-1.524-.98a1.836,1.836,0,0,1,.283-.8 l1.123-2.171h8.474l2.106,3.954H13.745v1.3h12.89v-1.3H23.929ZM6.976,12.284l3.4-6.4h.292l3.4,6.4Z" transform="translate(663.9 18.594)"></path> <path id="Path_5" data-name="Path 5" d="M20.464.508V7.193h-1.6c-.6-2.721-2.222-5.908-6.15-5.908C7.8,1.286,6.786,5.17,6.786,9.932c0,4.573.912,8.506,5.808,8.506,3.825,0,6.408-2.452,6.408-5.8 h1.684c0,4.6-3.67,7.166-8.419,7.166C6.184,19.8,0,15.425,0,9.932,0,4.521,5.982,0,11.77,0c4.307,0,5.823,1.592,6.615,1.592S19.369,1.08,19.4.509h1.062Z" transform="translate(690.236 18)"></path> <path id="Path_6" data-name="Path 6" d="M0,18.847v-1.3H3.263V1.294H0V0H12.714V1.294H9.437V17.551h3.277v1.3Z" transform="translate(713.939 18.396)"></path> <path id="Path_7" data-name="Path 7" d="M12.073,0C6.073,0,0,4.338,0,9.9s6.073,9.9,12.073,9.9c5.967,0,12.146-4.328,12.146-9.9S18.04,0,12.073,0ZM12.1,18.521 c-4.753,0-5.375-4.257-5.375-8.618,0-4.385.643-8.618,5.375-8.618,4.769,0,5.384,4.2,5.384,8.618C17.486,14.293,16.871,18.521,12.1,18.521Z" transform="translate(729.325 18)"></path> <path id="Path_8" data-name="Path 8" d="M0,18.847v-1.3H.949c1.128,0,2.193-.293,2.193-1.923V3.4A2.33,2.33,0,0,0,.657,1.294H.1V0H9.516L19.891,11.135h.093V2.816c0-1.027-.881-1.521-2.5-1.521 H16.5V0h8.054V1.294h-.8c-1.654,0-2.358.767-2.358,1.438V18.847H18.711L4.607,3.67H4.54v12.1c0,1.525.8,1.784,2.847,1.784H8.02v1.3Z" transform="translate(755.444 18.396)"></path> </g> </svg>
					</div>
					<div className='navigation-bar_base_content_actions-right'>
						<button className='suscribite'>
							<strong>
								SUSCRIBITE
							</strong>
						</button>
						<button className='ingresar'>
							<strong>
								INGRESAR
							</strong>
						</button>
						<button className='middle-search'>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24"><path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11  2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867  4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="#272727"></path></svg>
						</button>
					</div>
				</div>
			</nav>
			<hr />
		</div>
	);
}

export default Header;
