import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/NavigationBar';

function MyApp({ Component, pageProps }) {
  return(
     <>
     <NavigationBar />
     <Component {...pageProps} />
     </>
  )

}

export default MyApp
