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

		 </div>
	);
};

Layout.defaultProps={
	title:`ლამაზი ღიმილი წარმატებული ადამიანებისათვის`,
	description:`ლამაზი კბილები`,
	keywords:`იმპლანტაცია, იმპლანტი, იმპლანტები, კბილები უფროსებისთვის, იმპლანტაცია, იმპლანტის ჩასმა, იმპლანტების გაკეთება, იმპლანტოლოგია, ორთოპედი, პავლე ხუჯაძე, იმპლანტების გაკეთება, კბილის ჩასმა, კბილების ჩასმა, implantebi, kbilis chasma, implantis gaketeba, იმპლანტოლოგია, იმპლანტაცია, იმპლანტის ჩასმა, იმპლანტის გაკეთება, დენტალური იმპლანტი, დენტალური იმპლანტაცია ნიშნავს, იმპლანტი შედგება 3ძირითადი ნაწილისაგან, რისგან შედგება იმპლანტი, რას ნიშნავს იმპლანატაცია`
}

export default Layout;