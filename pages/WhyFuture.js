import React from 'react';
import SideMenuComponent from '../components/SideMenuComponent';
import { useRouter } from 'next/router';
import enWhyFuture from '../languages/enWhyFuture';
import kaWhyFuture from '../languages/kaWhyFuture';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../components/Layout';
import FooterComponent from '../components/FooterComponent';

const WhyFuture = () => {

	const {
		locale
	} = useRouter();
	const language = locale === 'en' ? enWhyFuture : kaWhyFuture;
	return (
		 <Layout title={`Why Future? | რატომ Future?`}>
			 <Container>
				 <Row>
					 <SideMenuComponent />
					 <Col className={'col-xl-9 col-lg-9 p-0'}>
						 <div>
							 <h2 className={'text-center text-white font-weight-bolder h2'}>
								 {language.whyFutureFirstTextTitle}
							 </h2>
							 <h5 className={'text-white h5'}>
								 {language.whyFutureFirstTextFirstPart}
							 </h5>
						 </div>
						 <div>
							 <h2 className={'text-center text-white font-weight-bolder h2 mt-5'}>
								 {language.whyFutureSecondTextTitle}
							 </h2>
							 <h5 className={'text-white h5'}>
								 <ul>
									 <li>{language.whyFutureSecondTextFirstBulletPoint}</li>
									 <li>{language.whyFutureSecondTextSecondBulletPoint}</li>
									 <li>{language.whyFutureSecondTextThirdBulletPoint}</li>
									 <li>{language.whyFutureSecondTextFourthBulletPoint}</li>
									 <li>{language.whyFutureSecondTextFifthBulletPoint}</li>
									 <li>{language.whyFutureSecondTextSixthBulletPoint}</li>
								 </ul>
							 </h5>
						 </div>
						 <div>
							 <h2 className={'text-center text-white font-weight-bolder h2 mt-5'}>
								 {language.whyFutureThirdTextTitle}
							 </h2>
							 <h5 className={'text-white h5'}>
								 {language.whyFutureFirstTextFirstPart}
							 </h5>
							 <h5 className={'text-white h5'}>
								 {language.whyFutureThirdTextSecondPart}
							 </h5>
							 <h5 className={'text-white h5'}>
								 {language.whyFutureThirdTextThirdPart}
							 </h5>
							 <h5 className={'text-white h5'}>
								 {language.whyFutureThirdTextSixthPart}
							 </h5>
							 <h5 className={'text-white h5'}>
								 {language.whyFutureThirdTextSeventhPart}
							 </h5>
						 </div>
					 </Col>
				 </Row>
			 </Container>
			 <FooterComponent />
		 </Layout>
	);
};

export default WhyFuture;