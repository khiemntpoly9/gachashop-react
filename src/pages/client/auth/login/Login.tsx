/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext } from 'react';
import { notification } from 'antd';
import './Login.scss';
import { login } from '~/services/auth/auth.service';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '~/context/AuthContext';
const Login = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const authContext = useContext(AuthContext);
	if (!authContext) throw new Error('AuthContext null');
	const { setIsLogined } = authContext;
	const navigate = useNavigate();
	interface ErrorsType {
		username?: string;
		password?: string;
	}
	const [errors, setErrors] = useState<ErrorsType>({});

	// Lấy địa chỉ Email
	const handleEmailChange = (event: any) => {
		setEmail(event.target.value);
	};
	// Lấy mật khẩu
	const handlePassChange = (event: any) => {
		setPassword(event.target.value);
	};

	//Validate
	const validateForm = () => {
		const formErrors: { username: string; password: string } = {
			username: email,
			password: password,
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

	// Đăng nhập
	const handleSubmit = async (event: any) => {
		event.preventDefault();
		if (validateForm()) {
			try {
				const logLogin = await login(email, password);
				if (logLogin.request.status == 200) {
					notification.success({
						message: 'Đăng nhập thành công',
						description: 'Chào mừng bạn đến với GachaShop',
					});
					// Set localStorage
					localStorage.setItem('isLogin', 'true');
					setIsLogined(true);
					setTimeout(() => {
						navigate('/home');
					}, 1000);
				} else {
					notification.error({
						message: 'Đăng nhập thất bại',
						description: logLogin.data,
					});
				}
			} catch (error: any) {
				notification.error({
					message: 'Đăng nhập thất bại',
					description: error.response.data.message,
				});
			}
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
							<Link to='/login'>Đăng nhập</Link>
						</li>
						<li className='regisform'>
							<Link to='/register'>Đăng kí</Link>
						</li>
					</ul>
					<form id='customer-login' onSubmit={handleSubmit}>
						<div className='mb-3'>
							<label htmlFor='InputEmail' className='form-label'>
								Email <span>*</span>
							</label>
							<input
								type='text'
								className='form-control shadow-none'
								id='InputEmail'
								placeholder='Nhập địa chỉ email'
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
								className='form-control shadow-none'
								id='InputPassword'
								placeholder='Nhập mật khẩu'
								onChange={handlePassChange}
							/>
							{errors.password && <span>{errors.password}</span>}
						</div>
						<p className='recover'>
							<a href='' className='btn-link-style'>
								Quên mật khẩu?
							</a>
						</p>
						<button type='submit' className='btn'>
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
