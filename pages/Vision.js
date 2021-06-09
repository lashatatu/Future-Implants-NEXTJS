import React from 'react';
import SideMenuComponent from '../components/SideMenuComponent';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import enVision from '../languages/enVision';
import kaVision from '../languages/kaVision';

const Vision = () => {
	const {
		locale
	} = useRouter();
	const language = locale === 'en' ? enVision : kaVision;
	return (
		 <>
			 <Container>
				 <Row>
					 <SideMenuComponent />
					 <Col className={'col-xl-9 col-lg-9 p-0'}>
						 <div>
							 <h2 className={'text-center text-white font-weight-bolder h2'}>
								 {language.visionFirstTitle}
							 </h2>
							 <h5 className={'text-white h5'}>
								 {language.visionFirstText}
							 </h5>
						 </div>
						 <div>
							 <h2 className={'text-center text-white font-weight-bolder h2 mt-5'}>
								 {language.visionSecondTitle}
							 </h2>
							 <h5 className={'text-white h5'}>
								 {language.visionSecondText}
							 </h5>
						 </div>
						 <div>
							 <h2 className={'text-center text-white font-weight-bolder h2 mt-5'}>
								 {language.visionThirdTitle}
							 </h2>
							 <h5 className={'text-white h5'}>
								 <ul className={'mt-2'}>
									 <li>{language.visionThirdTextFirstBulletPoint}</li>
									 <li>{language.visionThirdTextSecondBulletPoint}</li>
									 <li>{language.visionThirdTextThirdBulletPoint}</li>
									 <li>{language.visionThirdTextFourthBulletPoint}</li>
									 <li>{language.visionThirdTextFifthBulletPoint}</li>
									 <li>{language.visionThirdTextSixthBulletPoint}</li>
									 <li>{language.visionThirdTextSeventhBulletPoint}</li>
									 <li>{language.visionThirdTextEightBulletPoint}</li>
									 <li>{language.visionThirdTextNinthBulletPoint}</li>
								 </ul>
							 </h5>
						 </div>
					 </Col>
				 </Row>
			 </Container>
		 </>
	);
};

export default Vision;