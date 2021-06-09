import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import SideMenuComponent from '../components/SideMenuComponent';
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
	return (
		 <>
			 <Container>
				 <Row>
					 <SideMenuComponent />
					 <Col className={'col-xl-9 col-lg-9 p-0'}>
						 <div>
							 <h2 className={'text-center text-white font-weight-bolder h2'}>

							 </h2>
							 <h5 className={'text-white h5'}>

							 </h5>
						 </div>
					 </Col>
				 </Row>
			 </Container>
		 </>
	);
};

export default Contact;