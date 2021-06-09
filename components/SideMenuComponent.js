import React from 'react';
import { Accordion, Card, Col } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import en from '../languages/en';
import ka from '../languages/ka';

const SideMenuComponent = () => {
	const {
		locale
	} = useRouter();
	const language = locale === 'en' ? en : ka;
	return (
		 <>
			 <Col className={'col-xl-3 col-lg-3 col-md-12 col-12'}>
				 <Accordion>
					 <Card className={'border-0 bg-primary'}>
						 <Link href={'/Vision'}>
							 <a className={'btn btn-primary text-white font-weight-bold text-decoration-none'}>
								 {language.visionPage}
							 </a>
						 </Link>
						 <Link href={'/About'}>
							 <a className={'btn btn-primary text-white font-weight-bold text-decoration-none'}>
								 {language.aboutPage}
							 </a>
						 </Link>
						 <Link href={'/WhyFuture'}>
							 <a className={'btn btn-primary text-white font-weight-bold text-decoration-none'}>
								 {language.whyFuturePageL}
							 </a>
						 </Link>
						 <Link href={'/Faq'}>
							 <a className={'btn btn-primary text-white font-weight-bold text-decoration-none'}>
								 {language.faqPage}
							 </a>
						 </Link>
						 <Link href={'/Products'}>
							 <a className={'btn btn-primary text-white font-weight-bold text-decoration-none'}>
								 {language.productsPage}
							 </a>
						 </Link>
						 <Link href={'/Contact'}>
							 <a className={'btn btn-primary text-white font-weight-bold text-decoration-none'}>
								 {language.contactPage}
							 </a>
						 </Link>


					 </Card>
				 </Accordion>
			 </Col>
		 </>
	);
};

export default SideMenuComponent;