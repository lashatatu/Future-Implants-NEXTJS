import React from 'react';
import SideMenuComponent from '../components/SideMenuComponent';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import en from '../languages/en';
import ka from '../languages/ka';
import enAboutUs from '../languages/enAboutUs';
import kaAboutUs from '../languages/kaAboutUs';
import Layout from '../components/Layout';

const About = () => {

	const {
		locale
	} = useRouter();
	const language = locale === 'en' ? enAboutUs : kaAboutUs;

	return (
		 <Layout title={'About | ჩვენს შესახებ'}>
			 <Container>
				 <video
				 	autoPlay
				 	className="container-fluid p-3 col-lg-12 col-md-12 col-sm-12 embed-responsive embed-responsive-16by9 align-items-center">
				  <source src="/futureDentists.mp4" />
				 </video>
				 <Row>
					 <SideMenuComponent/>
					 <Col className={'col-xl-9 col-lg-9 p-0'}>
						 <div>
							 <h2 className={'text-center text-white font-weight-bolder h2'}>
								 {language.firstTextTitle}
							 </h2>
							 <h5 className={'text-white h5'}>
								 {language.firstText}
							 </h5>
						 </div>
						 <div>
							 <h2 className={'text-center text-white font-weight-bolder h2'}>
								 {language.secondTextTitle}
							 </h2>
							 <h5 className={'text-white h5'}>
								 {language.secondText}
							 </h5>
						 </div>
						 <div>
							 <h2 className={'text-center text-white font-weight-bolder h2'}>
								 {language.thirdTextTitle}
							 </h2>
							 <h5 className={'text-white h5'}>
								 {language.thirdText}
							 </h5>
						 </div>
						 <div>
							 <h2 className={'text-center text-white font-weight-bolder h2'}>
								 {language.fourthTextTitle}
							 </h2>
							 <h5 className={'text-white h5'}>
								 {language.fourthText}
							 </h5>
						 </div>
						 <div>
							 <h2 className={'text-center text-white font-weight-bolder h2'}>
								 {language.fifthTextTitle}
							 </h2>
							 <h5 className={'text-white h5'}>
								 <ul>
									 <li>{language.fifthTextFirst}</li>
									 <li>{language.fifthTextSecond}</li>
									 <li>{language.fifthTextThird}</li>
									 <li>{language.fifthTextFourth}</li>
									 <li>{language.fifthTextFifth}</li>
									 <li>{language.fifthTextSixth}</li>
								 </ul>
							 </h5>
						 </div>
					 </Col>
				 </Row>
			 </Container>
		 </Layout>
	);
};

export default About;