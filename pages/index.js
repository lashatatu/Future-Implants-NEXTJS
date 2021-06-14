import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import en from '../languages/en';
import ka from '../languages/ka';
import CardsComponent from '../components/CardsComponent';
import CarouselComponent from '../components/CarouselComponent';
import Layout from '../components/Layout';

export default function Home () {
	const {
		locale,
	} = useRouter();
	const language = locale === 'ka' ? ka : en;

	return (
		 <Layout title={`Future Implants | მომავლის სტომატოლოგია`} keywords={`სტომატოლოგი, სტომატოლოგია, კბილები, სილამაზე, ჯანსაღი, ცხოვრება, კვილების გალამაზება`}>
			 <CarouselComponent/>
			 <CardsComponent />
		 </Layout>
	);
}
