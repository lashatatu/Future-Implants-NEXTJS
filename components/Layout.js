import React from 'react';
import Head from 'next/head';
import NavBar from './NavBar';
import FooterComponent from './FooterComponent';

const Layout = ({title,keywords,description,children}) => {
	return (
		 <div className={'content'}>
			 <Head>

				 <title>{title}</title>
				 <meta name={'description'} content={description}/>
				 <meta name={'keywords'} content={keywords}/>

			 </Head>
			 <NavBar />
			 {children}
			 <FooterComponent />
		 </div>
	);
};

Layout.defaultProps={
	title:`ლამაზი ღიმილი წარმატებული ადამიანებისათვის`,
	description:`ლამაზი კბილები`,
	keywords:`სტომატოლოგი, სტომატოლოგია, კბილები, სილამაზე, ჯანსაღი, ცხოვრება, კვილების გალამაზება`
}

export default Layout;