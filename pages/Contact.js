import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import SideMenuComponent from '../components/SideMenuComponent';
import { Container } from 'react-bootstrap';

const Contact = () => {
	return (
		 <>
			<Container>
			 <SideMenuComponent/>
			 <h1 className={styles.title}>
				 Contact page
			 </h1>
			</Container>
		 </>
	);
};

export default Contact;