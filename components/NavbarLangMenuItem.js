import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import en from '../languages/en';
import ka from '../languages/ka';
import { useRouter } from 'next/router';

const NavbarLangMenuItem = () => {
	const {
		asPath,
		locale
	} = useRouter();

	const [show, setShow] = useState(false);
	const showDropdown = (e) => {
		setShow( !show);
	};
	const hideDropdown = e => {
		setShow(false);
	};

	const language = locale === 'en' ? en : ka;
	return (
		 <>
			 <Nav className="lang-menu">

				 <Navbar className="selected-lang text-primary font-weight-bold">
					 <Container>
						 <Image
								src={language.selectedLangImage}
								alt="Current website language"
								width={25}
								height={25}
						 />
						 <NavDropdown
								className="text-primary font-weight-bold "
								id={'collapsible-nav-dropdown'}
								title={<span className={'text-primary font-weight-bold'}>{language.selectedLang}</span>}
								show={show}
								onMouseEnter={showDropdown}
								onMouseLeave={hideDropdown}
						 >
							 <Nav className="text-primary font-weight-bold">
								 <ul className={'pl-2 m-0'}>
									 <li className={'font-weight-bold list-unstyled'}>
										 <span className={'p-2'}>
											 <Image
													src={'https://www.countryflags.io/ge/shiny/32.png'}
													alt="Current website language"
													width={20}
													height={20}
											 />
										 </span>
										 <Link
												className={'ka text-primary font-weight-bold'}
												active={locale === 'ka'}
												href={asPath}
												locale="ka">
											 {language.selectedLangNamesKA}
										 </Link>
									 </li>
									 <li className={'font-weight-bold list-unstyled'}>
										 <span className={'p-2'}>
											 <Image
													src={'https://www.countryflags.io/us/shiny/32.png'}
													alt="Current website language"
													width={20}
													height={20}
											 />
										 </span>
										 <Link
												active={locale === 'en'}
												href={asPath}
												locale="en">
											 {language.selectedLangNamesEN}
										 </Link>
									 </li>
								 </ul>
							 </Nav>
						 </NavDropdown>
					 </Container>
					 <Navbar.Brand className={'nav-item active btn bg-white font-weight-bold'}>
						 <Link href="/">FUTURE-IMPLANTS</Link>
					 </Navbar.Brand>
				 </Navbar>
			 </Nav>
		 </>
	);
};

export default NavbarLangMenuItem;