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
		 <Layout>
			 <Component {...pageProps} />
		 </Layout>
	);

}

export default MyApp;
