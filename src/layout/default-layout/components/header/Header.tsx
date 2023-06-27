/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

import logo from '@assets/images/logo3.png';
import store from '@assets/images/store.png';
import img1 from '@assets/images/mega-1-image.webp';

// import { Modal } from 'antd';
import Login from '@client/auth/login/Login';
import Register from '@client/auth/register/Register';
import { checkIsLogin } from '~/services/auth/auth.service';

const Header = () => {
	const [cartItems, setCartItems] = useState<never[]>([]);
	const [isLogined, setIsLogined] = useState<boolean>(false);
	const [openModalLogin, setOpenModalLogin] = useState<boolean>(false);
	const [statusLogin, setStatusLogin] = useState(true);
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		// Fix lỗi trường hợp localStorage chưa có giỏ hàng
		const storedCartItemsString: string | null = localStorage.getItem('productsInCart');
		if (storedCartItemsString !== null) {
			const storedCartItems = JSON.parse(storedCartItemsString);
			setCartItems(storedCartItems);
		} else {
			setCartItems([]);
		}
		// Kiểm tra xem đã đăng nhập chưa
		const check = async () => {
			const data = await checkIsLogin();
			setIsLogined(data.isLogin);
		};
		check();
	}, [setCartItems, count]);

	const handCount = () => {
		setCount(count + 1);
	};
	console.log(count);

	// Lấy nội dung giỏ hàng từ LocalStorage
	const storedCartItemsString: string | null = localStorage.getItem('productsInCart');
	if (storedCartItemsString !== null) {
		const btnRemove = (id_product: number) => {
			if (window.confirm('Bạn có chắc chắn muốn xóa không?')) {
				let cartItems = JSON.parse(storedCartItemsString);

				if (cartItems) {
					cartItems = cartItems.filter((value) => value.id_product !== id_product);

					localStorage.setItem('productsInCart', JSON.stringify(cartItems));

					const itemDelete = document.querySelector(`#itemDelete-${id_product}`);
					if (itemDelete) {
						itemDelete.remove();
					}
				}
				updateCart();
			}
		};
	}

	// Cập nhật giỏ hàng
	const updateCart = () => {
		// Lấy dữ liệu từ LocalStorage
		const cartItems: string | null = JSON.parse(localStorage.getItem('productsInCart'));

		// Lấy phần tử DOM của giỏ hàng trên trang home
		const cartElement: HTMLElement | null = document.querySelector('#aaa');

		// Xóa các phần tử con hiện tại của giỏ hàng
		while (cartElement.firstChild) {
			cartElement.removeChild(cartElement.firstChild);
		}

		// Kiểm tra nếu có dữ liệu trong giỏ hàng
		if (cartItems && cartItems.length > 0) {
			// Duyệt qua từng sản phẩm trong giỏ hàng
			cartItems.forEach((item) => {
				// Tạo phần tử li để hiển thị thông tin sản phẩm
				const liElement = document.createElement('li');
				liElement.textContent = item.name_product;

				// Thêm phần tử li vào giỏ hàng
				cartElement.appendChild(liElement);
			});
		} else {
			// Nếu giỏ hàng trống, hiển thị thông báo không có sản phẩm
			const emptyMessage = document.createElement('p');
			emptyMessage.textContent = 'Không có sản phẩm trong giỏ hàng';
			cartElement.appendChild(emptyMessage);
		}
	};
	return (
		<header className='header-p container-fluid px-0'>
			{/* Modal */}
			{openModalLogin ? (
				<span className='modal-login position-absolute top-0 left-0'>
					<div className='overlay'></div>
					<div className='body'>
						<div className='wrapper position-relative'>
							<span onClick={() => setOpenModalLogin(false)} className='close position-absolute'>
								x
							</span>
							{statusLogin ? (
								<Login
									setStatusLogin={setStatusLogin}
									setOpenModal={setOpenModalLogin}
									handleCount={handCount}
								/>
							) : (
								<Register setStatusLogin={setStatusLogin} />
							)}
						</div>
					</div>
				</span>
			) : null}
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
									<Link className='text-black pointer' onClick={() => setOpenModalLogin(true)} to='/'>
										<div className='box-a w-auto d-flex'>
											<i className='fa-regular fa-user w-auto'></i>
											<span>Tài khoản</span>
										</div>
									</Link>
								)}
							</div>
							{/* Giỏ hàng */}
							<div className='col-3 p-0 p-lg-2 w-auto'>
								<Link
									className='text-black'
									to='/'
									data-bs-toggle='offcanvas'
									data-bs-target='#offcanvasCart'
									aria-controls='offcanvasCart'
								>
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
															<Link to='/'>Nội thất</Link>
														</h6>
														<ul className='ul-list-item'>
															<li>
																<Link to='/'>Phòng khách</Link>
															</li>
															<li>
																<Link to='/'>Phòng ăn</Link>
															</li>
															<li>
																<Link to='/'>Phòng ngủ</Link>
															</li>
															<li>
																<Link to='/'>Phòng làm việc</Link>
															</li>
															<li>
																<Link to='/'>Phòng cho bé</Link>
															</li>
															<li>
																<Link to='/'>Nội thất thông minh</Link>
															</li>
														</ul>
													</div>
												</div>
												<div className='col-3 p-1'>
													<div className=''>
														<h6>
															<Link to='/'>Đồ trang trí</Link>
														</h6>
														<ul className='ul-list-item'>
															<li>
																<Link to='/'>Tranh & Khung ảnh</Link>
															</li>
															<li>
																<Link to='/'>Lọ & Bình trang trí</Link>
															</li>
															<li>
																<Link to='/'>Đồng hồ</Link>
															</li>
															<li>
																<Link to='/'>Nến thơm & Đèn tinh dầu</Link>
															</li>
															<li>
																<Link to='/'>Đồ dùng uống trà & Cafe</Link>
															</li>
														</ul>
													</div>
												</div>
												<div className='col-3 p-1'>
													<h6>
														<Link to='/'>Đèn</Link>
													</h6>
													<ul className='ul-list-item'>
														<li>
															<Link to='/'>Đèn bàn</Link>
														</li>
														<li>
															<Link to='/'>Đèn sàn</Link>
														</li>
														<li>
															<Link to='/'>Đèn trần</Link>
														</li>
														<li>
															<Link to='/'>Đèn treo tường</Link>
														</li>
													</ul>
												</div>
												<div className='col-3 p-1'>
													<h6>
														<Link to='/'>Ngoại thất</Link>
													</h6>
													<ul className='ul-list-item'>
														<li>
															<Link to='/'>Trang trí ngoài trời</Link>
														</li>
														<li>
															<Link to='/'>Trang trí sân vườn</Link>
														</li>
													</ul>
												</div>
											</div>
											{/* Bottom */}
											<div className='d-flex'>
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
											</div>
										</div>
										<div className='col-lg-3'>
											<img className='img-fluid' src={img1} alt='' />
										</div>
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
							<Link className='nav-link' to='/'>
								<li className='list-group-item-link px-3'>Đăng nhập</li>
							</Link>
							<Link className='nav-link' to='/'>
								<li className='list-group-item-link px-3'>Đăng ký</li>
							</Link>
							<Link className='nav-link' to='/'>
								<li className='list-group-item-link px-3'>
									Sản phẩm yêu thích
									<span className='ms-1'>(0)</span>
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
			{/* Offcanvas Cart */}
			<div
				className='offcanvas offcanvas-end'
				tabIndex={-1}
				id='offcanvasCart'
				aria-labelledby='offcanvasCart'
			>
				<div className='offcanvas-header'>
					<h5 className='offcanvas-title' id='offcanvasCart'>
						Giỏ hàng
					</h5>
					<button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
				</div>

				<div className='offcanvas-body p-0'>
					<div className='aaa'>
						{isLogined ? (
							<div>
								{cartItems.map((value) => (
									<div key={value.id_product} className='p-2 d-flex'>
										<img className='w-25' src={value.img_thumbnail} alt='' />
										<div className='ps-3'>
											<h6 className='fw-bold'>{value.name_prod}</h6>
											<span className='text-danger fw-bold'>{value.price_prod} VNĐ</span>

											<div className='d-flex space-beete'>
												<p className='fw-bold'>Số lượng</p>
												<span className='ps-3 fw-bold'>{value.quantity}</span>
												<button
													className='ms-5 btn btn-danger'
													type='button'
													id={`itemDelete-${value.id_product}`}
													onClick={() => btnRemove(value.id_product)}
												>
													Xóa
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
						) : (
							<div className='icon-store text-center'>
								<img className='w-50 opacity-50' src={store} alt='' />
								<div className='d-flex justify-content-center mt-2'>
									<div
										className='btn-cart d-flex align-items-center justify-content-center p-3'
										data-bs-dismiss='offcanvas'
										aria-label='Close'
									>
										Bạn cần đăng nhập để xem giỏ hàng
									</div>
								</div>
							</div>
						)}
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
