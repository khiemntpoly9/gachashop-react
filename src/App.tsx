import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '~/layout/default-layout/DefaultLayout';
import AdminLayout from '~/layout/admin-layout/AdminLayout';
import PageNotFound from '~/pages/pagenotfound/PageNotFound';
import Home from '@client/home/Home';
import Product from '@client/product/Product';
import ProductDetail from '@client/product/detail/ProductDetail';
// import Login from './pages/client/auth/login/Login';
// import Register from './pages/client/auth/register/Register';
import Favorite from '@client/account/Favorite';
import Account from '@client/account/Account';
import Orders from '@client/account/Orders';
import ChangePassWord from '@client/account/ChangePassWord';
import Address from '@client/account/Address';
import CheckOut from '@client/checkout/CheckOut';
import Contact from '@client/contact/Contact';
import Faq from '@client/faq/Faq';

import DashBoard from '@admin/dashboard/DashBoard';
// import ProductAddAdmin from './pages/admin/product/ProductAddAdmin';
import ProductAddBs from '@admin/product/add-product/ProductAddBs';
import ListProduct from '@admin/product/list-product/ListProduct';
import AdLogin from '@admin/login/AdLogin';
import ListCategory from '@admin/categories/list-category/ListCategory';
import ListCategoryChild from '@admin/categories/list-category-children/ListCategoryChild';
import Users from '@admin/users/Users';
import Brand from '@admin/brand/Brand';
import Protected from '@utils/Protected';

const App = () => {
	{
		/* <Route element={<PrivateRoute role={['qtv', 'ctv']} />}>
			</Route> */
	}
	return (
		<Routes>
			<Route path='/' element={<DefaultLayout />}>
				<Route index element={<Home />} />
				<Route path='home' element={<Home />} />
				<Route path='products' element={<Product />} />
				<Route path='product' element={<ProductDetail />} />
				{/* Auth */}
				{/* <Route path='login' element={<Login />} />
				<Route path='register' element={<Register />} /> */}
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
			<Route path='/admin/login' element={<AdLogin />} />
			<Route
				path='/admin'
				element={
					<Protected role={['qtv', 'ctv']}>
						<AdminLayout />
					</Protected>
				}
			>
				<Route index element={<DashBoard />} />
				<Route path='dashboard' element={<DashBoard />} />
				<Route path='products' element={<ListProduct />} />
				<Route path='product/add' element={<ProductAddBs />} />
				<Route path='category' element={<ListCategory />} />
				<Route path='category-child' element={<ListCategoryChild />} />
				<Route path='brands' element={<Brand />} />
				<Route
					path='list-users'
					element={
						<Protected role={['qtv']}>
							<Users />
						</Protected>
					}
				/>
			</Route>
			<Route path='*' element={<PageNotFound />} />
		</Routes>
	);
};

export default App;
