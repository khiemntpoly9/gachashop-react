import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../login/Login.scss';

import newRequest from '../../../../utils/newRequest';

const Register = ({ setStatusLogin }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [first_name, setFirstname] = useState('');
	const [last_name, setLastname] = useState('');
	const [phone, setSDT] = useState('');
	const [errors, setErrors] = useState({});

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleFirstnameChange = (event) => {
		setFirstname(event.target.value);
	};

	const handleLastnameChange = (event) => {
		setLastname(event.target.value);
	};

	const handleSDTChange = (event) => {
		setSDT(event.target.value);
	};

	//Validate
	const validateForm = () => {
		let formErrors = {};
		let isValid = true;

		//Validate username
		if (!email) {
			formErrors.email = 'Email is required';
			isValid = false;
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			formErrors.email = 'Email is invalid';
			isValid = false;
		}

		//Validate password
		if (!password) {
			formErrors.password = 'Password is required';
			isValid = false;
		} else if (password.length < 8) {
			formErrors.password = 'Mật khẩu phải có 8 kí tự';
			isValid = false;
		}

		if (!first_name) {
			formErrors.firstname = 'Không được để trống';
			isValid = false;
		}

		if (!last_name) {
			formErrors.lastname = 'Không được để trống';
			isValid = false;
		}

		if (!phone) {
			formErrors.lastname = 'Không được để trống';
			isValid = false;
		}

		setErrors(formErrors);

		return isValid;
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (validateForm()) {
			const userData = { email, password, first_name, last_name, phone };
			const json = JSON.stringify(userData);

			newRequest
				.post('/auth/register', json, {
					headers: {
						'Content-Type': 'application/json',
					},
				})
				// eslint-disable-next-line no-unused-vars
				.then((response) => {
					window.location.href = '/login';
				})
				.catch((error) => alert(error.response.data.message));

			console.log(typeof userData);
		} else {
			alert('Đăng kí thất bại');
		}
	};
	return (
		<div className='login bg-white p-5'>
			<div className='login-container container m-auto row'>
				<div className='left col'>
					<div className='account-policy-title'>QUYỀN LỢI THÀNH VIÊN</div>
					<div className='account-policy-content'>
						<p>Mua hàng khắp thế giới cực dễ dàng, nhanh chóng</p>
						<p>Theo dõi chi tiết đơn hàng, địa chỉ thanh toán dễ dàng</p>
						<p>Nhận nhiều chương trình ưu đãi hấp dẫn từ chúng tôi</p>
					</div>
				</div>
				<div className='right col'>
					<ul className='auth-menu-list d-flex'>
						<li className='loginform '>
							<span onClick={() => setStatusLogin(true)}>Đăng nhập</span>
						</li>
						<li className='regisform active'>
							<span onClick={() => setStatusLogin(false)}>Đăng kí</span>
						</li>
					</ul>
					<form method='post' id='customer-name' onSubmit={handleSubmit}>
						<div className='mb-3'>
							<label htmlFor='InputFName' className='form-label'>
								HỌ <span>*</span>
							</label>
							<input
								type='text'
								className='form-control'
								id='InputFName'
								placeholder='Nhập họ'
								value={first_name}
								onChange={handleFirstnameChange}
							/>
							{errors.firstname && <span>{errors.firstname}</span>}
						</div>
						<div className='mb-3'>
							<label htmlFor='InputName' className='form-label'>
								TÊN <span>*</span>
							</label>
							<input
								type='text'
								className='form-control'
								id='InputName'
								placeholder='Nhập tên'
								value={last_name}
								onChange={handleLastnameChange}
							/>
							{errors.lastname && <span>{errors.lastname}</span>}
						</div>
						<div className='mb-3'>
							<label htmlFor='phone' className='form-label'>
								SỐ ĐIỆN THOẠI <span>*</span>
							</label>
							<input
								type='tel'
								className='form-control'
								id='phone'
								placeholder='Nhập số điện thoại'
								value={phone}
								onChange={handleSDTChange}
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='InputEmail' className='form-label'>
								Email <span>*</span>
							</label>
							<input
								type='email'
								className='form-control'
								id='InputEmail'
								placeholder='Nhập địa chỉ Email'
								required
								aria-describedby='emailHelp'
								pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$'
								value={email}
								onChange={handleEmailChange}
							/>
							{errors.username && <span>{errors.username}</span>}
						</div>
						<div className='mb-3'>
							<label htmlFor='InputPassword' className='form-label'>
								Mật khẩu <span>*</span>
							</label>
							<input
								type='password'
								className='form-control'
								id='InputPassword'
								placeholder='Nhập mật khẩu'
								required
								value={password}
								onChange={handlePasswordChange}
							/>
							{errors.password && <span>{errors.password}</span>}
						</div>

						<button type='submit' className='btn'>
							Tạo tài khoản
						</button>
					</form>
					<div className='line-break'>
						<span>hoặc đăng nhập qua</span>
					</div>

					<div className='social-login row row-cols-2 my-4'>
						<a href='' className='fb-login col'>
							<img
								width='192px'
								height='38px'
								src='https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg'
								alt='fb-login-button'
							/>
						</a>
						<a href='' className='gg-login col '>
							<img
								width='192px'
								height='38px'
								src='https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg'
								alt='google-login-button	'
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
