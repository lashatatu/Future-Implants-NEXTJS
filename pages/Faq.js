import React from 'react';
import SideMenuComponent from '../components/SideMenuComponent';
import { useRouter } from 'next/router';
import en from '../languages/en';
import ka from '../languages/ka';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';
import enFAQ from '../languages/enFAQ';
import kaFAQ from '../languages/kaFAQ';
import Layout from '../components/Layout';

const faq = () => {
	const {
		locale
	} = useRouter();
	const language = locale === 'en' ? enFAQ : kaFAQ;

	return (
		 <Layout title={`FAQ`}>
			 <Container>
				 <Row>
					 <SideMenuComponent/>
					 <Col className={'col-xl-9 col-lg-9 p-0'}>
						 <div>
							 <h2 className={'text-center text-white font-weight-bolder h2'}>
								 {language.faqTitle}
							 </h2>
						 </div>
						 <Accordion defaultActiveKey="0">
							 <Card className={'bg-primary border-white'}>
								 <Accordion.Toggle as={Card.Header} eventKey="0" className={'text-white font-weight-bold'}>
									 {language.faqFirstElement}
								 </Accordion.Toggle>
								 <Accordion.Collapse eventKey="0" className={'bg-dark'}>
									 <Card.Body className={'text-white font-weight-bold'}>{language.faqFirstElementText}</Card.Body>
								 </Accordion.Collapse>
							 </Card>

							 <Card className={'bg-primary border-white'}>
								 <Accordion.Toggle as={Card.Header} eventKey="1" className={'text-white font-weight-bold'}>
									 {language.faqSecondElement}
								 </Accordion.Toggle>
								 <Accordion.Collapse eventKey="1" className={'bg-dark'}>
									 <Card.Body className={'text-white font-weight-bold'}>{language.faqSecondElement}</Card.Body>
								 </Accordion.Collapse>
							 </Card>

							 <Card className={'bg-primary border-white'}>
								 <Accordion.Toggle as={Card.Header} eventKey="2" className={'text-white font-weight-bold'}>
									 {language.faqThirdElement}
								 </Accordion.Toggle>
								 <Accordion.Collapse eventKey="2" className={'bg-dark'}>
									 <Card.Body className={'text-white font-weight-bold'}>{language.faqThirdElementText}</Card.Body>
								 </Accordion.Collapse>
							 </Card>

							 <Card className={'bg-primary border-white'}>
								 <Accordion.Toggle as={Card.Header} eventKey="3" className={'text-white font-weight-bold'}>
									 {language.faqFourthElement}
								 </Accordion.Toggle>
								 <Accordion.Collapse eventKey="3" className={'bg-dark'}>
									 <Card.Body className={'text-white font-weight-bold'}>{language.faqFourthElementText}</Card.Body>
								 </Accordion.Collapse>
							 </Card>

							 <Card className={'bg-primary border-white'}>
								 <Accordion.Toggle as={Card.Header} eventKey="4" className={'text-white font-weight-bold'}>
									 {language.faqFifthElement}
								 </Accordion.Toggle>
								 <Accordion.Collapse eventKey="4" className={'bg-dark'}>
									 <Card.Body className={'text-white font-weight-bold'}>{language.faqFifthElementText}</Card.Body>
								 </Accordion.Collapse>
							 </Card>
						 </Accordion>
					 </Col>
				 </Row>
			 </Container>
		 </Layout>
	);
};

export default faq;