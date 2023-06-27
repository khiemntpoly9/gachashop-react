import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './Account.scss';
import { getInfoUser, logout } from '~/services/user/user.service';
import { User } from '~/interface/user.type';
import AuthContext from '~/context/AuthContext';

const Account = () => {
	const [userData, setUserData] = useState<User | null>(null);
	const navigate = useNavigate();
	const authContext = useContext(AuthContext);
	if (!authContext) throw new Error('AuthContext null');
	const { setIsLogined } = authContext;

	useEffect(() => {
		const getUser = async () => {
			const user = await getInfoUser();
			setUserData(user);
		};
		getUser();
	}, []);

	// Đăng xuất
	const handleLogout = async () => {
		await logout();
		setIsLogined(false);
		navigate('/home');
	};
	if (userData === null) return <div>Loading....</div>;
	return (
		<div className='account container'>
			<div className='row'>
				<div className='account-nav col-3'>
					<div className='nav-side'>
						<h4>TRANG TÀI KHOẢN</h4>
						<p>Xin chào, {userData.last_name}</p>
						<ul className='list-unstyled'>
							<li>
								<a href='#' className='title-info active'>
									Thông tin tài khoản!
								</a>
							</li>
							<li>
								<a href='/account/orders' className='title-info'>
									Đơn hàng của bạn
								</a>
							</li>
							<li>
								<a href='/account/changepassword' className='title-info'>
									Đổi mật khẩu
								</a>
							</li>
							<li>
								<a href='/account/addresses' className='title-info'>
									Số địa chỉ (0)
								</a>
							</li>
							<li>
								<div className='btn btn-danger title-info mt-1' onClick={handleLogout}>
									Đăng xuất
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className='account-content col-9'>
					<h4>THÔNG TIN TÀI KHOẢN</h4>
					<p>Họ tên: {`${userData.first_name} ${userData.last_name}`}</p>
					<p>Email: {userData.email}</p>
					<p>Số điện thoại: {userData.phone}</p>
				</div>
			</div>
		</div>
	);
};

export default Account;
