import React from 'react';
import SideMenuComponent from '../components/SideMenuComponent';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import en from '../languages/en';
import ka from '../languages/ka';

const About = () => {

	const {
		locale
	} = useRouter();
	const language = locale === 'en' ? en : ka;
	const lang=language.aboutUsTexts

	return (
		 <>
			 <Container>
				 <video
				 	autoPlay
				 	className="container-fluid p-3 col-lg-12 col-md-12 col-sm-12 embed-responsive embed-responsive-16by9 align-items-center">
				  <source src="/futureImplantsGe.mp4" />
				 </video>
				 <Row>
					 <SideMenuComponent/>
					 <Col className={'col-xl-9 col-lg-9 p-0'}>
						 <div>
							 <h2 className={'text-center text-white font-weight-bolder h2'}>
								 {language.aboutUsTexts.firstTextTitle}
							 </h2>
							 <h5 className={'text-white h5'}>
								 {language.aboutUsTexts.fifthText}
							 </h5>
						 </div>
						 <div>
							 <h2 className={'text-center text-white font-weight-bolder h2'}>
								 {language.aboutUsTexts.secondTextTitle}
							 </h2>
							 <h5 className={'text-white h5'}>
								 {language.aboutUsTexts.secondText}
							 </h5>
						 </div>
						 <div>
							 <h2 className={'text-center text-white font-weight-bolder h2'}>
								 {language.aboutUsTexts.thirdTextTitle}
							 </h2>
							 <h5 className={'text-white h5'}>
								 {language.aboutUsTexts.thirdText}
							 </h5>
						 </div>
						 <div>
							 <h2 className={'text-center text-white font-weight-bolder h2'}>
								 {language.aboutUsTexts.fourthTextTitle}
							 </h2>
							 <h5 className={'text-white h5'}>
								 {language.aboutUsTexts.fourthText}
							 </h5>
						 </div>
						 <div>
							 <h2 className={'text-center text-white font-weight-bolder h2'}>
								 {language.aboutUsTexts.fifthTextTitle}
							 </h2>
							 <h5 className={'text-white h5'}>
								 <ul>
									 <li>{lang.fifthTextFirst}</li>
									 <li>{lang.fifthTextSecond}</li>
									 <li>{lang.fifthTextThird}</li>
									 <li>{lang.fifthTextFourth}</li>
									 <li>{lang.fifthTextFifth}</li>
									 <li>{lang.fifthTextSixth}</li>
								 </ul>
							 </h5>
						 </div>
					 </Col>
				 </Row>
			 </Container>
		 </>
	);
};

export default About;