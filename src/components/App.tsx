import '@/styles/main.scss';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Content';

export const App = () => {
	return (
		<div className='App'>
			<Header />
			<Main />
			<Footer />
		</div>
	);
};
