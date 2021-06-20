import React from 'react';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import en from '../languages/en';
import ka from '../languages/ka';

const GalleryComponent = () => {
	const {locale} = useRouter();
	const language = locale === 'en' ? en : ka;
	return (
		 <>
			 <h1 className={'text-white d-flex text-center p-2'}>FUTURE DENTISTRY-ს ისრაელის პრემიუმ ხარისხის იმპლანტების პრეზენტაცია</h1>
			 <h3 className={'text-white d-flex justify-content-center p-2'}>{language.randomComponentText}
			 </h3>
			 <Row className={`m-2`}>
				 <Col>
					 <section className={'p-2 d-flex justify-content-center'}>
						 <Image
								className={'p-2'}
								src={`/gallery/first.jpg`}
								alt="Picture of the author"
								height={800}
								width={800} />
						 <Image
								className={'p-2'}
								src={`/gallery/fourth.jpg`}
								alt="Picture of the author"
								height={800}
								width={800} />
					 </section>
					 <section className={'p-2 d-flex justify-content-center'}>
						 <Image

								src={`/gallery/second.jpg`}
								alt="Picture of the author"
								height={700}
								width={1064} />

					 </section>
					 <section className={'p-2 d-flex justify-content-center'}>
						 <Image
								src={`/gallery/third.jpg`}
								alt="Picture of the author"
								height={800}
								width={1064} />
					 </section>
					 <section className={'p-2 d-flex justify-content-center'}>
						 <Image
								className={'p-2'}
								src={`/gallery/sixth.jpg`}
								alt="Picture of the author"
								height={800}
								width={800} />

						 <Image
								className={'p-2'}
								src={`/gallery/eight.jpg`}
								alt="Picture of the author"
								height={800}
								width={800} />
					 </section>
					 <section className={'p-2 d-flex justify-content-center'}>
						 <Image
								src={`/gallery/seventh.jpg`}
								alt="Picture of the author"
								height={800}
								width={1064} />
					 </section>
				 </Col>
			 </Row>


		 </>
	);
};

export default GalleryComponent;