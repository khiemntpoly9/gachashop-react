import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from '~/context/AuthContext';

function DefaultLayout() {
	return (
		<div>
			<AuthProvider>
				<Header />
				<Outlet />
				<Footer />
			</AuthProvider>
		</div>
	);
}

export default DefaultLayout;
