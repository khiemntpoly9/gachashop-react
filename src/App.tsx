import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/default-layout/DefaultLayout';
import Home from './pages/client/home/Home';
import Product from './pages/client/product/Product';
import ProductDetail from './pages/client/product/detail/ProductDetail';
import Login from './pages/client/auth/login/Login';
import Register from './pages/client/auth/register/Register';
import Favorite from './pages/client/account/Favorite';
import Account from './pages/client/account/Account';
import Orders from './pages/client/account/Orders';
import ChangePassWord from './pages/client/account/ChangePassWord';
import Address from './pages/client/account/Address';
import CheckOut from './pages/client/checkout/CheckOut';
import Contact from './pages/client/contact/Contact';
import Faq from './pages/client/faq/Faq';
import PageNotFound from './pages/pagenotfound/PageNotFound';
import AdminLayout from './layout/admin-layout/AdminLayout';
import DashBoard from './pages/admin/dashboard/DashBoard';

function App() {
	return (
		<Routes>
			<Route path='/' element={<DefaultLayout />}>
				<Route path='' element={<Home />} />
				<Route path='home' element={<Home />} />
				<Route path='products' element={<Product />} />
				<Route path='product' element={<ProductDetail />} />
				{/* Auth */}
				<Route path='login' element={<Login />} />
				<Route path='register' element={<Register />} />
				<Route path='favorite' element={<Favorite />} />
				{/* Account */}
				<Route path='account' element={<Account />} />
				<Route path='account/orders' element={<Orders />} />
				<Route path='account/changepassword' element={<ChangePassWord />} />
				<Route path='account/addresses' element={<Address />} />
				<Route path='checkout' element={<CheckOut />} />
				<Route path='contact' element={<Contact />} />
				<Route path='faq' element={<Faq />} />
			</Route>
			{/* Admin */}
			<Route path='/admin' element={<AdminLayout />}>
				<Route path='' element={<DashBoard />} />
				<Route path='dashboard' element={<DashBoard />} />
			</Route>
			<Route path='*' element={<PageNotFound />} />
		</Routes>
	);
}

export default App;
