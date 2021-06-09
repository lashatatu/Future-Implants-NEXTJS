import React from 'react';
import NavBar from './NavBar';
import FooterComponent from './FooterComponent';

const Layout = ({children}) => {
	return (
		 <div className={'content'}>
			 <NavBar />
			 {children}
			 <FooterComponent />
		 </div>
	);
};

export default Layout;