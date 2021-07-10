import { useRouter } from 'next/router';
import en from '../languages/en';
import ka from '../languages/ka';
import CardsComponent from '../components/CardsComponent';
import CarouselComponent from '../components/CarouselComponent';
import RandomCrapComponent from './RandomCrapComponent';
import FooterComponent from '../components/FooterComponent';
import React from 'react';
import Head from 'next/head';

export default function Home () {
	const {
		locale
	} = useRouter();
	const language = locale === 'ka' ? ka : en;

	return (
		 <>
			 <CarouselComponent />
			 <CardsComponent />
			 <RandomCrapComponent />
			 <FooterComponent />
		 </>
	);
}
