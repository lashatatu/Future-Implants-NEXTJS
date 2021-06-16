import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';

const CarouselComponent = () => {
	return (
		 <>
			 <Carousel className={'mt-auto'}>
				 <Carousel.Item interval={2000}>
					 <div className={'row d-flex justify-content-center'}>
						 <Image
								className="d-block w-100"
								src="/photo1.png"
								width={800}
								height={500}
						 />
						 <div className={'col-md-4 carousel-text-styles-right my-auto text-white font-weight-bold'}>
							 <h1>"A smile is the universal welcome."</h1>
							 <h3>– Thich Nhat Hanha</h3>
						 </div>
					 </div>
				 </Carousel.Item>
				 <Carousel.Item interval={2000}>
					 <div className={'row d-flex justify-content-center'}>
						 <div className={'col-md-4 carousel-text-styles-right my-auto text-white font-weight-bold'}>
							 <h1>"Because of your smile, you make life more beautiful"</h1>
							 <h3>– Max Eastman</h3>
						 </div>
						 <Image
								className="d-block w-100"
								src="/photo2.png"
								width={800}
								height={500}
						 />
					 </div>
				 </Carousel.Item>
				 <Carousel.Item interval={2000}>
					 <div className={'row d-flex justify-content-center'}>
						 <Image
								className="d-block w-100"
								src="/photo3.png"
								width={800}
								height={500}
						 />
						 <div className={'col-md-4 carousel-text-styles-right my-auto text-white font-weight-bold'}>
							 <h1>"Peace begins with a smile"</h1>
							 <h3>– Connie Stevens</h3>
						 </div>
					 </div>
				 </Carousel.Item>
				 <Carousel.Item interval={2000}>
					 <div className={'row d-flex justify-content-center'}>
						 <Image
								className="d-block w-100"
								src="/photo4.png"
								width={800}
								height={500}
						 />
						 <div className={'col-md-4 carousel-text-styles-right my-auto text-white font-weight-bold'}>
							 <h1>"Peace begins with a smile"</h1>
							 <h3>– Mother Teresa</h3>
						 </div>
					 </div>
				 </Carousel.Item>
				 {/*<Carousel.Item interval={2000}>*/}
					{/* <div className={'row d-flex justify-content-center'}>*/}
					{/*	 <Image*/}
					{/*			className="d-block w-100"*/}
					{/*			src="/003.jpg"*/}
					{/*			width={800}*/}
					{/*			height={500}*/}
					{/*	 />*/}
					{/*	 <div className={'col-md-4 carousel-text-styles-right my-auto text-white font-weight-bold'}>*/}
					{/*		 <h1>"Peace begins with a smile"</h1>*/}
					{/*		 <h3>– Mother Teresa</h3>*/}
					{/*	 </div>*/}
					{/* </div>*/}
				 {/*</Carousel.Item>*/}
			 </Carousel>
		 </>
	);
};

export default CarouselComponent;