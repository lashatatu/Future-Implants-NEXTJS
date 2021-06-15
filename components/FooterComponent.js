import React from 'react';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import en from '../languages/en';
import ka from '../languages/ka';
import { Container } from 'react-bootstrap';

const FooterComponent = () => {
	const {
		locale
	} = useRouter();
	const language = locale === 'en' ? en : ka;
	return (
		 <Container>
			 <footer className={`d-flex justify-content-center p-2`}>
				 <a
						className={'text-white font-weight-bold'}
						href="https://github.com/lashatatu"
						target="_blank"
						rel="noopener noreferrer"
				 >
					 {language.madeBy} {' '}
				 </a>
			 </footer>
		 </Container>
	);
};

export default FooterComponent;