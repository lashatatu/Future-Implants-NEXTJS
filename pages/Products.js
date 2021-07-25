import React from 'react';
import SideMenuComponent from '../components/SideMenuComponent';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import enProducts from '../languages/enProducts';
import kaProducts from '../languages/kaProducts';
import Layout from '../components/Layout';
import FooterComponent from '../components/FooterComponent';
import Link from 'next/link';

const Products = () => {

	const {
		locale
	} = useRouter();
	const language = locale === 'en' ? enProducts : kaProducts;
	return (
		 <Layout title={`Products | პროდუქტები`}>
			 <Container>
				 <Row>
					 <SideMenuComponent/>
					 <Col>
						 <div className="col-xl-9 col-lg-9 d-xl-none d-lg-none">
							 <div className="text-center text-white h2">პროდუქტები</div>
							 <div className="btn-primary bg-white text-white" id="lineForLine1">a</div>
							 <div className="text-white h5 text-center">

									 <a href="/FUTURE-inside-pages-28-11-16.pdf" className="h2 ">გადმოწერეთ პროდუქციის კატალოგი</a>
							 </div>
							 <div className="text-white h5 text-center m-5">
								 <a href="/multi-unit.pdf" className="h2">გადმოწერეთ პროდუქტების კატალოგი</a>
							 </div>
						 </div>

						 <div className={'col-xl-12 col-lg-12  d-none d-lg-block d-xl-block'}>
							 <h2 className={'text-center text-white font-weight-bolder h2 '}>
								 {language.productsTitle}
								 <embed
										className={'mt-5'}
										src="/FUTURE-inside-pages-28-11-16.pdf"
										width="100%"
										height="800px"/>
							 </h2>
							 <h2 className={'text-center text-white font-weight-bolder h2'}>
								 <div className="text-white h5 text-center mt-5 mb-5 ">
									 {language.productsMultiUnit}
									 <embed
											className={'mt-5'}
											src="/multi-unit.pdf"
											width="100%"
											height="800px"/>
								 </div>
							 </h2>
						 </div>
					 </Col>
				 </Row>
			 </Container>
			 <FooterComponent/>
		 </Layout>
	);
};

export default Products;