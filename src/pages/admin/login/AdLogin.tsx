import { useState } from 'react';
import { Link } from 'react-router-dom';
const AdLogin = () => {
	//
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// const [errors, setErrors] = useState({});

	// Lấy địa chỉ Email
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	// Lấy Password
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};
	return (
		<div className='login'>
			<h1>Welcome to GachaShop Admin</h1>
			<div className='login-container container m-auto row'>
				<div className='left col'>
					<div className='account-policy-title'>ĐĂNG NHẬP TRANG QUẢN LÍ CỦA GACHASHOP</div>
					{/* <div className='account-policy-content'>
        <p>Mua hàng khắp thế giới cực dễ dàng, nhanh chóng</p>
        <p>Theo dõi chi tiết đơn hàng, địa chỉ thanh toán dễ dàng</p>
        <p>Nhận nhiều chương trình ưu đãi hấp dẫn từ chúng tôi</p>
      </div> */}
				</div>
				<div className='right col'>
					<ul className='auth-menu-list d-flex'>
						<li className='loginform active'>
							<Link to='#'>Đăng nhập</Link>
						</li>
					</ul>
					<form method='post' id='customer-login'>
						<div className='mb-3'>
							<label htmlFor='InputEmail' className='form-label'>
								Email <span>*</span>
							</label>
							<input
								type='email'
								className='form-control'
								id='InputEmail'
								placeholder='Nhập Địa chỉ Email'
								aria-describedby='emailHelp'
								value={email}
								onChange={handleEmailChange}
							/>
							{/* {errors.username && <span>{errors.username}</span>} */}
						</div>
						<div className='mb-3'>
							<label htmlFor='InputPassword' className='form-label'>
								Mật khẩu <span>*</span>
							</label>
							<input
								type='password'
								className='form-control'
								id='InputPassword'
								placeholder='Nhập Mật khẩu'
								value={password}
								onChange={handlePasswordChange}
							/>
							{/* {errors.password && <span>{errors.password}</span>} */}
						</div>
						<p className='recover'>
							<a href='' className='btn-link-style'>
								Quên mật khẩu?
							</a>
						</p>
						<button type='submit' className='btn'>
							Đăng nhập
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AdLogin;
