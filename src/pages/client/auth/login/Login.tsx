/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, notification } from 'antd';
import newRequest from '../../../../utils/newRequest';
import './Login.scss';
const Login = ({ setStatusLogin }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	interface ErrorsType {
		username?: string;
		password?: string;
	}
	const [errors, setErrors] = useState<ErrorsType>({});

	// Lấy địa chỉ Email
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePassChange = (event) => {
		setPassword(event.target.value);
	};

	//Validate
	const validateForm = () => {
		const formErrors: { username: string; password: string } = {
			username: '',
			password: '',
		};
		let isValid = true;

		//Validate username
		if (!email) {
			formErrors.username = 'Vui lòng nhập email vào';
			isValid = false;
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			formErrors.username = 'Email phải đúng định dạng ';
			isValid = false;
		}

		//Validate password
		if (!password) {
			formErrors.password = 'Vui lòng nhập mật khẩu vào';
			isValid = false;
		} else if (password.length < 8) {
			formErrors.password = 'Mật khẩu có ít nhất 8 ký tự';
			isValid = false;
		}

		setErrors(formErrors);

		return isValid;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		// true
		if (validateForm()) {
			try {
				const user = { email, password };
				await newRequest.post('/auth/login', user);

				// <Navigate to='/account' />;
			} catch (error: any) {
				notification.error({
					message: 'Đăng nhập thất bại',
					description: error.response.data.message,
				});
				// alert(error.response.data.message);
			}
		} else {
			notification.error({
				message: 'Đăng nhập thất bại',
				description: 'Đã xảy ra lỗi khi đăng nhập',
			});
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
						<li className='loginform active'>
							<span onClick={() => setStatusLogin(true)}>Đăng nhập</span>
						</li>
						<li className='regisform'>
							<span onClick={() => setStatusLogin(false)}>Đăng kí</span>
						</li>
					</ul>
					<form method='post' id='customer-login'>
						<div className='mb-3'>
							<label htmlFor='InputEmail' className='form-label'>
								Email <span>*</span>
							</label>
							<input
								// type='email'
								className='form-control'
								id='InputEmail'
								placeholder='Nhập địa chỉ email'
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
								value={password}
								onChange={handlePassChange}
							/>
							{errors.password && <span>{errors.password}</span>}
						</div>
						<p className='recover'>
							<a href='' className='btn-link-style'>
								Quên mật khẩu?
							</a>
						</p>
						<button onClick={handleSubmit} className='btn'>
							Đăng nhập
						</button>
						<p className='login-note'>
							Ant Home cam kết bảo mật và sẽ không bao giờ đăng <br /> hay chia sẻ thông tin mà chưa có được
							sự đồng ý của bạn.
						</p>
					</form>
					<div className='line-break'>
						<span>hoặc đăng nhập qua</span>
					</div>

					<div className='social-login row row-cols-2'>
						<a href='' className='fb-login col'>
							<img
								width='192px'
								height='38px'
								src='https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg'
								alt='fb-login-button'
							/>
						</a>
						<a
							href='https://walrus-app-h879i.ondigitalocean.app/api/auth/google/login'
							className='gg-login col '
						>
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

export default Login;
