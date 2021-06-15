import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/style.css';
import NavBar from '../components/NavBar';
import FooterComponent from '../components/FooterComponent';
import Layout from '../components/Layout';

function MyApp ({
	Component,
	pageProps
}) {
	return (
		 <Layout  title={`Future Implants | მომავლის სტომატოლოგია`} keywords={`სტომატოლოგი, სტომატოლოგია, კბილები, სილამაზე, ჯანსაღი, ცხოვრება, კვილების გალამაზება`}>
			 <Component {...pageProps} />
		 </Layout>
	);

}

export default MyApp;
