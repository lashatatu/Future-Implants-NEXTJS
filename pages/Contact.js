import React from 'react';
import SideMenuComponent from '../components/SideMenuComponent';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import kaContact from '../languages/kaContact';
import enContact from '../languages/enContact';

const Contact = () => {
	const {locale} = useRouter();
	const language = locale === 'ka' ? kaContact : enContact;
	return (
		 <>
			 <Container>
				 <Row>
					 <SideMenuComponent />
					 <Col className={'col-xl-9 col-lg-9 p-0'}>
						 <div className={'text-white font-weight-bold p-0'}>
							 <h1 className={'d-flex text-center justify-content-center'}>{language.contactMainText}</h1>
							 <Col>
								 <Row>
									 <h5 className={'col-xl-2 col-lg-2 pl-0'}>{language.contactAddress}</h5>
									 <Col>
										 <h5 className={'pl-1'}>{language.contactAddressElementOne}</h5>
										 <h5 className={'pl-1'}>{language.contactAddressElementTwo}</h5>
										 <h5 className={'pl-1'}>{language.contactAddressElementThree}</h5>
									 </Col>
								 </Row>
								 <Row>
									 <h5 className={'col-xl-2 col-lg-2 pl-0'}>{language.contactFieldsMail}:</h5>
									 <Col className={'pl-6'}>
										 <h5>medea@future-implants.com</h5>
										 <h5>info@future-implants.com</h5>
									 </Col>
								 </Row>
								 <Row className={``}>
									 <h5 className={'col-xl-2 col-lg-2 pl-0'}>{language.contactFieldsPhone}:</h5>
									 <Col>
										 <h5>+(995)557-68-18-78</h5>
									 </Col>

								 </Row>


							 </Col>
						 </div>

						 <div>
							 <Form
									className={'text-white font-weight-bold'}
									action="mailto:medeaadam11@gmail.com"
									method="POST">
								 <Form.Row>
									 <Form.Group
											as={Col}
											controlId="formGridEmail">
										 <Form.Label> <h4>{language.contactFieldsMail}</h4></Form.Label>
										 <Form.Control
												type="email"
												placeholder={language.contactFieldsMail} />
									 </Form.Group>
								 </Form.Row>

								 <Form.Group controlId="formGridAddress1">
									 <Form.Label><h4>{language.contactFieldsName}</h4></Form.Label>
									 <Form.Control placeholder="სახელი გვარი" />
								 </Form.Group>

								 <Form.Row>
									 <Form.Group
											as={Col}
											controlId="formGridZip">
										 <Form.Label><h4>{language.contactFieldsPhone}</h4></Form.Label>
										 <Form.Control />
									 </Form.Group>
								 </Form.Row>

								 <Form.Group controlId="formGridAddress2">
									 <Form.Text><h4>{language.contactAddress}</h4></Form.Text>
									 <Form.Control />
								 </Form.Group>



								 <Button
										variant="primary"
										type="submit">
									 Submit
								 </Button>
							 </Form>
						 </div>
					 </Col>
				 </Row>
			 </Container>
		 </>
	);
};

export default Contact;