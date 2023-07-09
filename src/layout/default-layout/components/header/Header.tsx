/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react';
import AuthContext from '~/context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import logo from '@assets/images/logo3.png';
import { logout } from '~/services/user/user.service';

const Header = () => {
	const navigate = useNavigate();
	const authContext = useContext(AuthContext);
	if (!authContext) throw new Error('AuthContext null');
	const { isLogined, setIsLogined } = authContext;

	// Đăng xuất
	const handleLogout = async () => {
		await logout();
		localStorage.removeItem('isLogin');
		setIsLogined(false);
		navigate('/home');
	};
	return (
		<header className='header-p container-fluid px-0'>
			{/* Container */}
			<div className='container-lg'>
				<div className='d-flex align-items-center justify-content-between evo-header-padding'>
					{/* Menu icon */}
					<div className='d-inline-block d-lg-none col-2 col-md-2'>
						<div
							className='btn border-none menu-icon'
							data-bs-toggle='offcanvas'
							data-bs-target='#offcanvasExample'
							aria-controls='offcanvasExample'
						>
							<i className='fa-solid fa-bars'></i>
						</div>
					</div>
					{/* Logo */}
					<div className='header-logo col-4 col-md-4 mb-md-1 col-xl-2'>
						<div className='box-logo'>
							<Link to='/home'>
								<img className='img-fluid' src={logo} alt='' />
							</Link>
						</div>
					</div>
					{/* Box tìm kiếm */}
					<div className='d-none d-lg-block col-lg-4 col-xl-5 pt-lg-2 ms-lg-3 ms-xl-0'>
						<div className='header-search d-flex align-items-center p-1'>
							<input className='px-2 w-100' type='text' placeholder='Tìm sản phẩm ...' />
							<div className='me-2 btn-s w-auto'>
								<i className='fa-solid fa-magnifying-glass'></i>
							</div>
						</div>
					</div>
					{/* Account */}
					<div className='header-account gap-2 gap-md-1 gap-lg-0 d-flex col-2 col-lg-5 col-xl-4 justify-content-evenly'>
						{/* Icon tìm kiếm MD */}
						<div
							className='btn-search d-flex d-lg-none text-end w-auto'
							data-bs-toggle='offcanvas'
							data-bs-target='#offcanvasSearch'
							aria-controls='offcanvasSearch'
						>
							<i className='fa-solid fa-magnifying-glass'></i>
						</div>
						{/* Box */}
						<div className='box-account d-flex align-items-center gap-2 ms-lg-3 ms-xl-0'>
							{/* Yêu thích */}
							<div className='d-none d-lg-block justify-content-center col-3 p-0 p-lg-2 w-auto'>
								<Link className='text-black' to='/favorite'>
									<div className='box-a d-flex justify-content-center position-relative'>
										<i className='fa-regular fa-heart w-auto'></i>
										<span className='text-center'>Yêu thích</span>
										<div className='i-count-box d-block position-absolute top-0 start-100 translate-middle d-flex justify-content-center align-items-center'>
											<div className='i-count'>0</div>
										</div>
									</div>
								</Link>
							</div>
							{/* Tài khoản */}
							<div className='d-none d-lg-block col-3 p-0 p-lg-2 w-auto ms-lg-2 ms-xl-3'>
								{isLogined ? (
									<Link className='text-black pointer' to='/account'>
										<div className='box-a w-auto d-flex'>
											<i className='fa-regular fa-user w-auto'></i>
											<span>Tài khoản</span>
										</div>
									</Link>
								) : (
									<Link className='text-black pointer' to='/login'>
										<div className='box-a w-auto d-flex'>
											<i className='fa-regular fa-user w-auto'></i>
											<span>Tài khoản</span>
										</div>
									</Link>
								)}
							</div>
							{/* Giỏ hàng */}
							<div className='col-3 p-0 p-lg-2 w-auto'>
								<Link className='text-black' to='/cart'>
									<div className='box-a d-flex justify-content-center position-relative'>
										<i className='fa-solid fa-cart-shopping w-auto'></i>
										<span className='text-center d-none d-lg-block'>Giỏ hàng</span>
										<div className='i-count-box d-block position-absolute top-0 start-100 translate-middle d-flex justify-content-center align-items-center'>
											<div className='i-count'>0</div>
										</div>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Navbar */}
			<div className='navbar d-none d-lg-block p-0'>
				<div className='d-flex justify-content-center align-items-center p-0 m-0'>
					<ul className='d-flex container p-0 m-0'>
						<li>
							<Link className='text-center' to='/'>
								Trang chủ
							</Link>
						</li>
						<li>
							<Link className='text-center' to='/gioithieu'>
								Giới thiệu
							</Link>
						</li>
						<li>
							<Link className='text-center' to='/products'>
								<span className='d-flex'>
									Sản phẩm <i className='fa-solid fa-chevron-down w-auto ms-1 pt-1'></i>
								</span>
							</Link>
							<div className='mega-menu'>
								<div className='container-lg'>
									<div className='d-flex'>
										<div className='col-lg-9'>
											{/* Top */}
											<div className='d-flex'>
												<div className='col-3 p-1'>
													<div className=''>
														<h6>
															<Link to='/'>Mô hình - Figure</Link>
														</h6>
														<ul className='ul-list-item'>
															<li>
																<Link to='/'>Mô hình Onepice</Link>
															</li>
															<li>
																<Link to='/'>Mô hình Naruto</Link>
															</li>
															<li>
																<Link to='/'>Mô hình Dragon ball</Link>
															</li>
															<li>
																<Link to='/'>Mô hình Fairy Tail</Link>
															</li>
															<li>
																<Link to='/'>Mô hình Kimetsu no Yaiba</Link>
															</li>
															<li>
																<Link to='/'>Mô hình Bleach</Link>
															</li>
														</ul>
													</div>
												</div>
												<div className='col-3 p-1'>
													<div className=''>
														<h6>
															<Link to='/'>Áo - Trang phục</Link>
														</h6>
														<ul className='ul-list-item'>
															<li>
																<Link to='/'>Áo khoác</Link>
															</li>
															<li>
																<Link to='/'>Áo cosplay</Link>
															</li>
															<li>
																<Link to='/'>Mặt nạ</Link>
															</li>
															<li>
																<Link to='/'>Găng tay</Link>
															</li>
															<li>
																<Link to='/'>Nón</Link>
															</li>
														</ul>
													</div>
												</div>
												<div className='col-3 p-1'>
													<h6>
														<Link to='/'>Phụ kiện</Link>
													</h6>
													<ul className='ul-list-item'>
														<li>
															<Link to='/'>Ba lô</Link>
														</li>
														<li>
															<Link to='/'>Mắt kính</Link>
														</li>
														<li>
															<Link to='/'>Móc khóa</Link>
														</li>
														<li>
															<Link to='/'>Đồng hồ đeo tay</Link>
														</li>
														<li>
															<Link to='/'>Khẩu trang</Link>
														</li>
													</ul>
												</div>
												<div className='col-3 p-1'>
													<h6>
														<Link to='/'>Trang sức</Link>
													</h6>
													<ul className='ul-list-item'>
														<li>
															<Link to='/'>Nhẫn</Link>
														</li>
														<li>
															<Link to='/'>Dây chuyền</Link>
														</li>
														<li>
															<Link to='/'>Khuyên tai</Link>
														</li>
														<li>
															<Link to='/'>Vòng tay</Link>
														</li>
													</ul>
												</div>
												<div className='col-3 p-1'>
													<h6>
														<Link to='/'>Các sản phẩm khác</Link>
													</h6>
													<ul className='ul-list-item'>
														<li>
															<Link to='/'>Poster - Tranh treo tường</Link>
														</li>
														<li>
															<Link to='/'>Bóp - Ví tiền</Link>
														</li>
														<li>
															<Link to='/'>Giấy dán tường</Link>
														</li>
														<li>
															<Link to='/'>Gối - Thú nhồi bông</Link>
														</li>
														<li>
															<Link to='/'>Quạt</Link>
														</li>
														<li>
															<Link to='/'>Lót chuột</Link>
														</li>
													</ul>
												</div>
											</div>
											{/* Bottom */}
											{/* <div className='d-flex'>
												<div className='col-3 p-1'>
													<h6>
														<Link to='/'>Chăn, Ga, Gối & Nệm</Link>
													</h6>
												</div>
												<div className='col-3 p-1'>
													<h6>
														<Link to='/'>Đồ dùng nhà tắm</Link>
													</h6>
												</div>
											</div> */}
										</div>
										{/* <div className='col-lg-3'>
											<img className='img-fluid' src={img1} alt='' />
										</div> */}
									</div>
								</div>
							</div>
						</li>
						<li>
							<Link className='text-center' to='/'>
								Deal Hot
							</Link>
						</li>
						<li>
							<Link className='text-center' to='/'>
								Thương hiệu nổi bật
							</Link>
						</li>
						<li>
							<Link className='text-center' to='/'>
								Tin tức
							</Link>
						</li>
						<li>
							<Link className='text-center' to='/contact'>
								Liên hệ
							</Link>
						</li>
						<li>
							<Link className='text-center' to='/faq'>
								FAQ
							</Link>
						</li>
					</ul>
				</div>
			</div>
			{/* Offcanvas Menu */}
			<div
				className='offcanvas offcanvas-start'
				tabIndex={-1}
				id='offcanvasExample'
				aria-labelledby='offcanvasExampleLabel'
			>
				<div className='offcanvas-header'>
					<h5 className='offcanvas-title' id='offcanvasExampleLabel'>
						Danh mục
					</h5>
					<button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
				</div>
				<div className='offcanvas-body p-0'>
					<div className='box-ul'>
						<ul className='list-group'>
							<Link className='nav-link' to='/home'>
								<li className='list-group-item-link px-3 link-active'>Trang chủ</li>
							</Link>
							<Link className='nav-link' to='/gioi-thieu'>
								<li className='list-group-item-link px-3'>Giới thiệu</li>
							</Link>
							<Link className='nav-link' to='/products'>
								<li className='list-group-item-link px-3'>
									<div className='d-flex justify-content-between'>
										<div>Sản phẩm</div>
										<div>
											<i className='fa-regular fa-plus'></i>
										</div>
									</div>
								</li>
							</Link>
							<Link className='nav-link' to='/'>
								<li className='list-group-item-link px-3'>Deal hot</li>
							</Link>
							<Link className='nav-link' to='/'>
								<li className='list-group-item-link px-3'>Thương hiệu nổi bật</li>
							</Link>
							<Link className='nav-link' to='/'>
								<li className='list-group-item-link px-3'>Tin tức</li>
							</Link>
							<Link className='nav-link' to='/'>
								<li className='list-group-item-link px-3'>Liên hệ</li>
							</Link>
							<Link className='nav-link' to='/'>
								<li className='list-group-item-link px-3'>FAQ</li>
							</Link>
							{isLogined ? (
								<Link className='nav-link' to='/account'>
									<li className='list-group-item-link px-3'>Tài khoản</li>
								</Link>
							) : (
								<Link className='nav-link' to='/login'>
									<li className='list-group-item-link px-3'>Đăng nhập</li>
								</Link>
							)}
							{isLogined ? null : (
								<Link className='nav-link' to='/login'>
									<li className='list-group-item-link px-3'>Đăng ký</li>
								</Link>
							)}
							{isLogined ? (
								<Link className='nav-link' to='/'>
									<li className='list-group-item-link px-3'>
										Sản phẩm yêu thích
										<span className='ms-1'>(0)</span>
									</li>
								</Link>
							) : null}
							{isLogined ? (
								<Link className='nav-link' to='#' onClick={handleLogout}>
									<li className='list-group-item-link px-3'>Đăng xuất</li>
								</Link>
							) : null}
						</ul>
					</div>
				</div>
			</div>
			{/* Offcanvas search */}
			<div
				className='offcanvas offcanvas-end'
				tabIndex={-1}
				id='offcanvasSearch'
				aria-labelledby='offcanvasSearch'
			>
				<div className='offcanvas-header'>
					<h5 className='offcanvas-title' id='offcanvasSearch'>
						Tìm kiếm sản phẩm
					</h5>
					<button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
				</div>
				<div className='offcanvas-body p-0'>
					<div className='d-flex justify-content-center search-box'>
						<div className='container d-flex'>
							<input className='col-10' type='text' placeholder='Tìm sản phẩm ...' />
							<div className='btn-search col-2 d-flex justify-content-center align-items-center p-2'>
								<i className='fa-solid fa-magnifying-glass text-center'></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
