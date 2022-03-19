import React from 'react';
import Header from '../components/Header';
import SubNavbar from '../components/SubNavbar';

const Layout = ({ children }) => {
	return (
		<div className="Layout">
			<Header />
			<SubNavbar />
			{children}
		</div>
	);
}

export default Layout;
