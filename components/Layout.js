import React from 'react';
import NavigationBar from './NavigationBar';
import FooterComponent from './FooterComponent';

const Layout = ({children}) => {
	return (
		 <div className={'content'}>
			 <NavigationBar />
			 {children}
			 <FooterComponent />
		 </div>
	);
};

export default Layout;