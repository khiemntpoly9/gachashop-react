import { useState } from 'react';
import './CheckOut.scss';
const CheckOut = () => {
	const [visible, setvisible] = useState(false);
	return (
		<div className='container'>
			<div className='row'>
				<main className='main col-8'>
					<header className='main__header'>
						<div className='logo logo--center'>
							<h1 className='shop__name text-center fs-3'>
								<a href='#' className='text-reset'>
									Ant Home
								</a>
							</h1>
						</div>
					</header>
					<div className='main__content '>
						<article className='animate-floating-labels row'>
							<div className='col-6 my-4'>
								<section className='section'>
									<div className='section__header'>
										<div className='row'>
											<h2 className='section__title col-9 fs-5'> Thông tin nhận hàng</h2>
											<a href='#' className='col-3  text-reset'>
												Đăng nhập
											</a>
										</div>
									</div>
									<div className='section__content'>
										<form>
											<div className='form-group'>
												<label className='mx-1' htmlFor='exampleInputEmail1'>
													Email
												</label>
												<input
													type='email'
													className='form-control'
													id='exampleInputEmail1'
													aria-describedby='emailHelp'
													placeholder='Email'
												/>
											</div>
											<div className='form-group my-2'>
												<label className='mx-1' htmlFor='exampleInputHT1'>
													Họ và tên
												</label>
												<input
													type='text'
													className='form-control'
													id='exampleInputHT1'
													placeholder='Họ và tên'
												/>
											</div>
											<div className='form-group my-2 '>
												<label className='mx-1' htmlFor='exampleInputsdt1'>
													Số điện thoại (tùy chọn)
												</label>
												<input
													type='password'
													className='form-control w-100 '
													id='exampleInputsdt1'
													placeholder='Số điện thoại (tùy chọn)'
												/>
											</div>
											<div className='form-group my-2 '>
												<label className='mx-1' htmlFor='exampleInputdc1'>
													Địa chỉ (tùy chọn)
												</label>
												<input
													type='password'
													className='form-control'
													id='exampleInputdc1'
													placeholder='Địa chỉ (tùy chọn)'
												/>
											</div>
											<div className='form-group my-2'>
												<div className='input-group'>
													<label className='mx-1' htmlFor='exampleInputTT1'>
														Tỉnh thành
													</label>
													<select className='form-select w-100 rounded' aria-label='size 3 select example'>
														<option selected>Chọn tỉnh thành</option>
														<option value='1'>Hà Nội</option>
														<option value='2'>TP Hồ Chí Minh</option>
														<option value='3'>LA</option>
														<option value='4'>Sóc Trăng</option>
														<option value='5'>Cà Mau</option>
													</select>
												</div>
											</div>
											<div className='form-group my-2'>
												<div className='input-group'>
													<label className='mx-1' htmlFor='exampleInputqh1'>
														Quận huyện (tùy chọn)
													</label>
													<select className='form-select w-100 rounded' aria-label='size 3 select example'>
														<option selected>Chọn quận huyện</option>
														<option value='1'>Quận Ba Đình</option>
														<option value='2'>Quận Cầu Giấy</option>
														<option value='3'>Quận Hà Đông</option>
														<option value='4'>Huyện Đông Anh</option>
														<option value='5'>Thị xã Sơn Tây</option>
													</select>
												</div>
											</div>
											<div className='form-group my-2'>
												<div className='input-group'>
													<label className='mx-1' htmlFor='exampleInputqh1'>
														Phường xã(tùy chọn)
													</label>
													<select className='form-select w-100 rounded' aria-label='size 3 select example'>
														<option selected>Chọn phường xã</option>
														<option value='1'>Phường Nghĩa Đô</option>
														<option value='2'>Phường Dịch Vọng Hậu</option>
														<option value='3'>Phường Quan Hoa</option>
														<option value='4'>Phường Yên Hòa</option>
														<option value='5'>Phường Trung Hòa</option>
													</select>
												</div>
											</div>
											<div className='form-group'>
												<label htmlFor='floatingTextarea2'>Ghi chú (tùy chọn)</label>
												<textarea className='form-control' id='floatingTextarea2'></textarea>
											</div>
										</form>
									</div>
								</section>
							</div>
							<div className='col-5 my-4'>
								<section className='section'>
									<div className='section__header'>
										<h2 className='section__title col-9 fs-5'> Vận chuyển</h2>
									</div>
									<div className='content-box border   rounded'>
										<div className='form-check'>
											<input
												className='form-check-input'
												type='radio'
												name='flexRadioDefault'
												id='flexRadioDefault2'
											/>
											<div className='row'>
												<label className='form-check-label col-9' htmlFor='flexRadioDefault2'>
													Giao hàng tận nơi
												</label>
												<span className='col-3'>40.000đ</span>
											</div>
										</div>
									</div>
								</section>
								<section className='section'>
									<div className='section__header mt-4'>
										<h2 className='section__title col-9 fs-5'> Thanh toán</h2>
									</div>
									<div className='content-box border my-4  rounded'>
										<div className='form-check'>
											<input
												className='form-check-input'
												type='radio'
												name='flexRadioDefault3'
												id='flexRadioDefault3'
												onClick={() => setvisible(true)}
											/>
											<div className='row'>
												<label className='form-check-label col-10' htmlFor='flexRadioDefault3'>
													Thanh toán khi giao hàng (COD)
												</label>
												<i className='fa-solid fa-money-bill-1-wave col-2'></i>
											</div>
											{visible && (
												<div className='content-box__row__desc'>
													<p>Bạn chỉ phải thanh toán khi nhận được hàng</p>
												</div>
											)}
										</div>
									</div>
								</section>
							</div>
						</article>
					</div>
				</main>
				<aside className='sidebar col-4'>
					<div className='sidebar__header'>
						<h2 className='sidebar__title'>Đơn hàng</h2>
					</div>
					<div className='sidebar__content'>
						<div className='order-summary '>
							<div className='order-summary__sections '>
								<div className='order-summary__section order-summary__section--product-list'>
									<table className='table product-table'>
										<caption className='visually-hidden'>Chi tiết đơn hàng</caption>
										<thead className='product-table__header'>
											<tr>
												<th scope='col'>
													<span className='visually-hidden'>Ảnh sản phẩm</span>
												</th>
												<th scope='col'>
													<span className='visually-hidden'>Mô tả</span>
												</th>
												<th scope='col'>
													<span className='visually-hidden'>Số lượng</span>
												</th>
												<th scope='col'>
													<span className='visually-hidden'>Đơn giá</span>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr className='product'>
												<th className='product__image' scope='row'>
													<div className='product-thumbnail'>
														<div className='product-thumbnail__wrapper'>
															{/* style={{ position: 'relative' }} */}
															<img
																className='rounded'
																src='//bizweb.dktcdn.net/thumb/thumb/100/396/362/products/ib-1591929276-1.jpg?v=1595555482093'
																alt=''
															/>
														</div>
														{/* <span
                          className='product-thumbnail__quantity rounded-circle d-flex justify-content-center align-items-center'
                          style={{
                            background: 'black',
                            width: '1.5rem',
                            height: '1.5rem',
                            color: 'white',
                            fontSize: '0.8em',
                            position: 'absolute',
                            right: '360px',
                            top: '235px',
                          }}
                        >
                          2
                        </span> */}
													</div>
												</th>
												<td>
													<span className='product__description__name' style={{ fontSize: '0.9rem' }}>
														Bộ Bàn Ăn 4 Ghế IBIE Sarah Màu Trắng Mặt Veneer Gỗ Tự Nhiên
													</span>
												</td>
												<td className='product__quantity '>
													<em>2</em>
												</td>
												<td className='product__price'>5.000.000₫</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className='order-summary__section order-summary__section--discount-code'>
									<h3 className='visually-hidden'>Mã khuyến mãi</h3>
									<div className='edit_checkout animate-floating-labels'>
										<div className='fieldset'>
											<div className='field__input-btn-wrapper row'>
												<div className='form-group field__input-wrapper col-9'>
													<label htmlFor='mkm' className='visually-hidden'>
														Nhập mã giảm giá
													</label>
													<input
														type='text'
														className='form-control'
														id='mkm'
														aria-describedby='mkm'
														placeholder='Nhập mã giảm giá'
													/>
												</div>
												<button className='btn btn-secondary col-3 '>Áp dụng</button>
											</div>
										</div>
									</div>
								</div>
								<div className='order-summary__section order-summary__section--total-lines order-summary--collapse-element'>
									<hr />
									<div className='total-line-table__tbody mt-3'>
										<span className='total-line__name fs-6 text-muted'>Tạm tính</span>
										<span className='total-line__price text-muted'> 5.000.000₫</span>
									</div>
									<div className='total-line-table__tbody mt-3'>
										<span className='total-line__name fs-6 text-muted'>Phí vận chuyển</span>
										<span className='total-line__pricepv text-muted'>40.000₫</span>
									</div>
									<hr />
									<div className='total-line-table__tbody'>
										<span className='total-line__name fs-6 text-muted'>Tổng cộng</span>
										<span className='total-line__pricetc fs-5'> 5.040.000₫</span>
									</div>
								</div>
								<div className='order-summary__nav field__input-btn-wrapper my-3 row'>
									<div className='col-8'>
										<i className='fa-solid fa-chevron-left'></i>
										<a href='#' className='text-reset'>
											Quay về giỏ hàng
										</a>
									</div>
									<button className='btn btn-dark col-4 p-2'>Đặt hàng</button>
								</div>
							</div>
						</div>
					</div>
				</aside>
			</div>
		</div>
	);
};

export default CheckOut;
