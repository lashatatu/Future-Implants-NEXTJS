import React from 'react';
import SideMenuComponent from '../components/SideMenuComponent';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import en from '../languages/enTraining';
import ka from '../languages/kaTraining';
import Layout from '../components/Layout';
import FooterComponent from '../components/FooterComponent';

const Training = () => {
	const {
		locale
	} = useRouter();
	const language = locale === 'en' ? en : ka;
	return (
		 <Layout title={`Training | სწავლება`}>

			 <Container>
				 <Row>
					 <SideMenuComponent />
					 <Col className={'col-xl-9 col-lg-9 p-0'}>
						 <div>
							 <h2 className={'text-center text-white font-weight-bolder h2'}>
								 {language.trainingTitle}
							 </h2>
							 <h5 className={'text-white h5'}>
								 {language.trainingTitleText}
							 </h5>
							 <h2 className={'text-center text-white font-weight-bolder h2'}>
								 {language.trainingTitlePartOne}
							 </h2>
							 <h5 className={'text-white h5'}>
								 <ul>
									 <li>{language.trainingTitlePartOneBulletPointOne}</li>
									 <li>{language.trainingTitlePartOneBulletPointTwo}</li>
									 <li>{language.trainingTitlePartOneBulletPointThree}</li>
								 </ul>
								 {language.trainingTitlePartOneText}
							 </h5>
							 <h2 className={'text-center text-white font-weight-bolder h2'}>
								 {language.trainingTitlePartTwo}
							 </h2>
							 <h5 className={'text-white h5'}>
								 {language.trainingTitlePartTwoText}
							 </h5>
							 <h2 className={'text-center text-white font-weight-bolder h2'}>
								 {language.trainingTitlePartThree}
							 </h2>
							 <h5 className={'text-white h5'}>
								 {language.trainingTitlePartThreeText}
							 </h5>
						 </div>
					 </Col>
				 </Row>
			 </Container>
			 <FooterComponent />
		 </Layout>
	);
};

export default Training;