import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link'
import ka from '../languages/ka';
import en from '../languages/en';


const CardsComponent = () => {
	const {
		locale
	} = useRouter();
	const language = locale === 'ka' ? ka : en;
	return (
		 <>
			 <Container>
				 <Row className={'d-flex justify-content-center pt-5 pb-5'}>
					 <Card
							className={'m-2'}
							style={{width: '18rem'}}>
						 <Card.Body>
							 <Card.Title className={'font-weight-bolder'}>{language.faqPage}</Card.Title>
							 <Card.Text>
								 {language.cardComponentFirstCard}
							 </Card.Text>
							 <Image
									src={'/photo1.png'}
									alt="Current website language"
									width={286}
									height={180}
							 />
							 <Link href={'/Faq'}>
								 <a className={'btn btn-secondary text-white font-weight-bold d-flex justify-content-center'}>{language.cardComponentButtonLinkText}</a>
							 </Link>
						 </Card.Body>
					 </Card>
					 <Card
							className={'m-2'}
							style={{width: '18rem'}}>
						 <Card.Body>
							 <Card.Title className={'font-weight-bolder'}>{language.FYIPage}</Card.Title>
							 <Card.Text>
								 {language.cardComponentSecondCard}
							 </Card.Text>
							 <Image
									src={'/photo2.png'}
									alt="Current website language"
									width={286}
									height={180}
							 />
							 <Link href="/ForYourInformation">
								 <a className={'btn btn-secondary text-white font-weight-bold d-flex justify-content-center'}>{language.cardComponentButtonLinkText}</a>
							 </Link>
						 </Card.Body>
					 </Card>

					 <Card
							className={'m-2'}
							style={{width: '18rem'}}>
						 <Card.Body>
							 <Card.Title className={'font-weight-bolder'}>{language.whyFuturePageL}</Card.Title>
							 <Card.Text>
								 {language.cardComponentThirdCard}
							 </Card.Text>
							 <Image
									src={'/photo3.png'}
									alt="Current website language"
									width={286}
									height={180}
							 />
							 <Link href="/WhyFuture">
								 <a className={'btn btn-secondary text-white font-weight-bold d-flex justify-content-center'}>{language.cardComponentButtonLinkText}</a>
							 </Link>
						 </Card.Body>
					 </Card>

					 <Card
							className={'m-2'}
							style={{width: '18rem'}}>
						 <Card.Body>
							 <Card.Title className={'font-weight-bolder'}>{language.trainingPage}</Card.Title>
							 <Card.Text>
								 {language.cardComponentFourthCard}
							 </Card.Text>
							 <Image
									src={'/photo4.png'}
									alt="Current website language"
									width={286}
									height={180}
							 />
							 <Link href="/Training">
								 <a className={'btn btn-secondary text-white font-weight-bold d-flex justify-content-center'}>{language.cardComponentButtonLinkText}</a>
							 </Link>
						 </Card.Body>
					 </Card>


				 </Row>
			 </Container>
		 </>
	);
};

export default CardsComponent;