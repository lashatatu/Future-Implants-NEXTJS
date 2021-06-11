import React from 'react';
import SideMenuComponent from '../components/SideMenuComponent';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import en from '../languages/enFYI';
import ka from '../languages/kaFYI';

const ForYourInformation = () => {
	const {
		locale
	} = useRouter();
	const language = locale === 'en' ? en : ka;
	return (
		 <>

			 <Container>
				 <Row>
					 <SideMenuComponent />
					 <Col className={'col-xl-9 col-lg-9 p-0'}>
						 <div>
							 <h2 className={'text-center text-white font-weight-bolder h2'}>
								 {language.fyiTitle}
							 </h2>
							 <h5 className={'text-white h5'}>
								 {language.fyiTextPartOne}
								 <ul>
									 <li>{language.fyiTextBulletPointOne}</li>
									 <li>{language.fyiTextBulletPointTwo}</li>
									 <li>{language.fyiTextBulletPointThree}</li>
									 <li>{language.fyiTextBulletPointFour}</li>
									 <li>{language.fyiTextBulletPointFive}</li>
									 <li>{language.fyiTextBulletPointSix}</li>
									 <li>{language.fyiTextBulletPointSeven}</li>
									 <li>{language.fyiTextBulletPointEight}</li>
									 <li>{language.fyiTextBulletPointNine}</li>
									 <li>{language.fyiTextBulletPointTen}</li>
									 <li>{language.fyiTextBulletPointEleven}</li>
									 <li>{language.fyiTextBulletPointTwelve}</li>
									 <li>{language.fyiTextBulletPointThirteen}</li>
									 <li>{language.fyiTextBulletPointFifteen}</li>
									 <li>{language.fyiTextBulletPointSixteen}</li>
									 <li>{language.fyiTextPartTwo}</li>
								 </ul>
							 </h5>

						 </div>
					 </Col>
				 </Row>
			 </Container>

		 </>
	);
};

export default ForYourInformation;