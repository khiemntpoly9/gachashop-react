import { Link } from 'react-router-dom';
import './Footer.scss';
import payment1 from '../../../../assets/images/payment_1.svg';
import payment2 from '../../../../assets/images/payment_2.svg';
import payment3 from '../../../../assets/images/payment_3.svg';
import payment4 from '../../../../assets/images/payment_4.svg';
import payment5 from '../../../../assets/images/payment_5.svg';
import payment6 from '../../../../assets/images/payment_6.svg';
import logo from '../../../../assets/images/logo3.png';

function Footer() {
	return (
		<div className='container-fluid footer d-flex flex-column justify-content-center mt-4'>
			<div className='container-lg d-flex flex-wrap gap-3 gap-md-0'>
				<div className='col-12 col-md-6 col-lg-3'>
					<h4 className='title-footer mb-2'>Liên hệ với Ant Home</h4>
					<div className='footer-body'>
						<div className='mb-2'>
							<strong>Địa chỉ:</strong> 70 Lu Gia, Ward 15, District 11, Ho Chi Minh City
						</div>
						<div className='mb-2'>
							<strong>Điện thoại:</strong> 1900 6750
						</div>
						<div className='mb-2'>
							<strong>Email:</strong> suppor@anthome.vn
						</div>
						<div className='d-flex'>
							<img className='col-6 col-sm-4 col-md-6 col-lg-10 img-fluid' src={logo} alt='' />
						</div>
					</div>
				</div>
				<div className='col-12 col-md-6 col-lg-3'>
					<h4 className='title-footer'>Về chúng tôi</h4>
					<div className='list-items-link'>
						<ul>
							<li className='items-link mb-2'>
								<Link to='/'>Giới thiệu</Link>
							</li>
							<li className='items-link mb-2'>
								<Link to='/'>Chính sách bảo mật về thanh toán</Link>
							</li>
							<li className='items-link mb-2'>
								<Link to='/'>Bảo mật thông tin cá nhân</Link>
							</li>
							<li className='items-link mb-2'>
								<Link to='/'>Quy chế hoạt động</Link>
							</li>
							<li className='items-link mb-2'>
								<Link to='/'>Bán hàng cùng Ant Home</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='col-12 col-md-6 col-lg-3 mt-md-2 mt-lg-0'>
					<h4 className='title-footer'>Hỗ trợ khách hàng</h4>
					<div className='list-items-link'>
						<ul>
							<li className='items-link mb-2'>
								<Link to='/'>Hướng dẫn đặt hàng</Link>
							</li>
							<li className='items-link mb-2'>
								<Link to='/'>Quy chế giao hàng & thanh toán</Link>
							</li>
							<li className='items-link mb-2'>
								<Link to='/'>Quy trình đổi trả & bảo hành</Link>
							</li>
							<li className='items-link mb-2'>
								<Link to='/'>Chính sách giải quyết khiếu nại</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='col-12 col-md-6 col-lg-3 mt-md-2 mt-lg-0'>
					<div>
						<h4 className='title-footer'>Kết nối với chúng tôi</h4>
						<div className='icon-contact d-flex'>
							<Link className='col-1 col-md-2' to='/'>
								<i className='fa-brands fa-facebook-f'></i>
							</Link>
							<Link className='col-1 col-md-2' to='/'>
								<i className='fa-brands fa-twitter'></i>
							</Link>
							<Link className='col-1 col-md-2' to='/'>
								<i className='fa-brands fa-youtube'></i>
							</Link>
							<Link className='col-1 col-md-2' to='/'>
								<i className='fa-brands fa-instagram'></i>
							</Link>
						</div>
					</div>
					<div className='mt-2'>
						<h4 className='title-footer'>Phương thức thanh toán</h4>
						<div className='payment-block d-flex flex-wrap col-md-8 col-lg-9'>
							<img className='me-2 mb-2' src={payment1} alt='' />
							<img className='me-2 mb-2' src={payment2} alt='' />
							<img className='me-2 mb-2' src={payment3} alt='' />
							<img className='me-2 mb-2' src={payment4} alt='' />
							<img className='me-2 mb-2' src={payment5} alt='' />
							<img className='me-2 mb-2' src={payment6} alt='' />
						</div>
					</div>
				</div>
			</div>
			<div className='copyright container-fluid px-0 mt-lg-5'>
				<div className='p-1'>
					<div className='text-center'>
						<span>
							© Bản quyền thuộc về <b>ăn rồi báo</b> | Cung cấp bởi không ngại va chạm
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
