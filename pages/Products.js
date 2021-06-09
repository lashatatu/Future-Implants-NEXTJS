import React from 'react';
import SideMenuComponent from '../components/SideMenuComponent';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import enProducts from '../languages/enProducts';
import kaProducts from '../languages/kaProducts';

const Products = () => {

	const {
		locale
	} = useRouter();
	const language = locale === 'en' ? enProducts : kaProducts;
	return (
		 <>
			 <Container>
				 <Row>
					 <SideMenuComponent />
					 <Col className={'col-xl-9 col-lg-9 p-0'}>
						 <div>
							 <h2 className={'text-center text-white font-weight-bolder h2 '}>
								 {language.productsTitle}
								 <div className="text-white h5 text-center mt-5">
									 {language.productsCatalog}
									 <embed
											className={'mt-5'}
											src="/FUTURE-inside-pages-28-11-16.pdf"
											width="100%"
											height="1100px" />
								 </div>
							 </h2>
							 <h2 className={'text-center text-white font-weight-bolder h2'}>
								 <div className="text-white h5 text-center mt-5 mb-5 ">
									 {language.productsMultiUnit}

											 <embed
													className={'mt-5'}
													src="/multi-unit.pdf"
													width="100%"
													height="800px" />
								 </div>
							 </h2>
						 </div>
					 </Col>
				 </Row>
			 </Container>
		 </>
);
};

export default Products;