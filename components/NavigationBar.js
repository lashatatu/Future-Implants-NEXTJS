import React, { useState } from 'react';
import Link from 'next/link';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useRouter } from 'next/router';
import en from '../languages/en';
import ka from '../languages/ka';
import NavbarLangMenuItem from './NavbarLangMenuItem';

const NavigationBar = (props) => {
	const {
		locale,
		locales,
		defaultLocale
	} = useRouter();

	const [show, setShow] = useState(false);
	const showDropdown = (e) => {
		setShow( !show);
	};
	const hideDropdown = e => {
		setShow(false);
	};
// hover dropdown

	const language = locale === 'en' ? en : ka;
	return (
		 <>
			 {/*// მენიუს დასაწყისი*/}
			 <Navbar
					collapseOnSelect
					fixed={'top'}
					expand={'lg'}
					bg={'white'}
					className={'navbar navbar-expand-lg navbar-dark fixed-top'}
					variant="pills">
				 {/*// მობილური ვერსიისთვის მენიუს ჩამოწევა*/}
				 <Navbar.Toggle
						className={'bg-primary'}
						aria-controls={'responsive-navbar-nav'} />
				 <Navbar.Collapse
						className="collapse navbar-collapse"
						id="navbarTogglerDemo03">
					 <ul className={'navbar-nav mb-2 mb-md-0 my-auto'}>
						 <li className={'nav-item active btn bg-white font-weight-bold'}>
							 <Link
									href={'/'}
									passHref>
								 <Nav.Link className={'nav-link text-primary font-weight-bold'}>
									 {language.homePage}
								 </Nav.Link>
							 </Link>
						 </li>

						 {/*ჩვენ შესახებ*/}

						 <NavDropdown
								className={'btn text-primary font-weight-bold'}
								id={'collapsible-nav-dropdown'}
								title={<span className={'text-primary font-weight-bold'}>{language.aboutUsClick}</span>}
								show={show}
								onMouseEnter={showDropdown}
								onMouseLeave={hideDropdown}
						 >
							 <Link
									href={'/Vision'}
									passHref>
								 <NavDropdown.Item
										eventKey="4.1"
										className={'text-primary font-weight-bold'}>{language.visionPage}</NavDropdown.Item>
							 </Link>
							 <Link
									href={'/About'}
									passHref>
								 <NavDropdown.Item
										eventKey="4.2"
										className={'dropdown-item text-primary font-weight-bold'}>{language.aboutPage}</NavDropdown.Item>
							 </Link>
						 </NavDropdown>

						 {/*რატომ Future*/}

						 <li className={'nav-item active btn bg-white font-weight-bold'}>
							 <Link
									href={'/WhyFuture'}
									passHref>
								 <Nav.Link className={'nav-item font-weight-bold text-primary'}>{language.whyFuturePageL}</Nav.Link>
							 </Link>
						 </li>

						 {/*ხშირად დასმული კითხვები*/}

						 <li className={'nav-item active btn bg-white font-weight-bold'}>
							 <Link
									href={'/Faq'}
									passHref>
								 <Nav.Link className={'nav-item  font-weight-bold text-primary'}>{language.faqPage}</Nav.Link>
							 </Link>
						 </li>

						 {/*პროდუქტები*/}

						 <li className={'nav-item active btn bg-white font-weight-bold'}>
							 <Link
									href={'/Products'}
									passHref>
								 <Nav.Link className={'nav-item  font-weight-bold text-primary'}>{language.productsPage}</Nav.Link>
							 </Link>
						 </li>

						 {/*კონტაქტი*/}

						 <li className={'nav-item active btn bg-white font-weight-bold'}>
							 <Link
									href={'/Contact'}
									passHref>
								 <Nav.Link className={'nav-item  font-weight-bold text-primary'}>{language.contactPage}</Nav.Link>
							 </Link>
						 </li>
					 </ul>
				 </Navbar.Collapse>

				 {/*ენების მენიუ */}
				 <NavbarLangMenuItem />

			 </Navbar>
		 </>
	);
};

export const getStaticProps = ({
	locale,
	locales
}) => {
	return {
		props: {
			locale,
			locales
		}
	};
};

export default NavigationBar;