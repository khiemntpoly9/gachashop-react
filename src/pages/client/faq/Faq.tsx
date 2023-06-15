import './Faq.scss';
const Faq = () => {
	return (
		<div className='faq'>
			<div className='faq-image'>
				<img
					src='https://cdn.donmai.us/original/b2/76/b276d518524e2110806824b368c21b64.jpg'
					alt=''
					style={{ width: '100%', height: '700px' }}
				/>
				<h1 className='text-center'>FAQ</h1>
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-3 col-md-12 d-none d-lg-block'>
						<div className='slidebar-page p-4'>
							<h3>Hỗ trợ khách hàng</h3>
							<ul>
								<li>
									<a href='/' title='Trang chủ'>
										Trang chủ
									</a>
								</li>
								<li>
									<a href='/' title='Giới thiệu'>
										Giới thiệu
									</a>
								</li>
								<li>
									<a href='/' title='Sản phẩm'>
										Sản phẩm
									</a>
								</li>
								<li>
									<a href='/' title='Deal hot'>
										Deal hot
									</a>
								</li>
								<li>
									<a href='/' title='Thương hiệu nổi bật'>
										Thương hiệu nổi bật
									</a>
								</li>
								<li>
									<a href='/' title='Tin tức'>
										Tin tức
									</a>
								</li>
								<li>
									<a href='/' title='Liên hệ'>
										Liên hệ
									</a>
								</li>
								<li>
									<a href='/' title='FAQ'>
										FAQ
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-lg-9 col-md-12'>
						<div className='content-page p-4'>
							<h3>Thanh toán và vận chuyển</h3>
							<div className='accordion' id='accordionExample'>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingOne'>
										<button
											className='accordion-button'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseOne'
											aria-expanded='true'
											aria-controls='collapseOne'
										>
											Khi nào đơn hàng của tôi được chuyển đi?
										</button>
									</h2>
									<div
										id='collapseOne'
										className='accordion-collapse collapse show'
										aria-labelledby='headingOne'
										data-bs-parent='#accordionExample'
									>
										<div className='accordion-body'>
											<p>
												Với đơn hàng của Quý khách, sau 24h kể từ khi đặt hàng (không tính ngày thứ 7, chủ
												nhật và các ngày lễ), GACHASHOP sẽ liên hệ để xác nhận và gửi sản phẩm đến Quý khách
											</p>
										</div>
									</div>
								</div>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingTwo'>
										<button
											className='accordion-button collapsed'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseTwo'
											aria-expanded='false'
											aria-controls='collapseTwo'
										>
											Tôi có phải thanh toán thêm thuế hay phí gì không?
										</button>
									</h2>
									<div
										id='collapseTwo'
										className='accordion-collapse collapse'
										aria-labelledby='headingTwo'
										data-bs-parent='#accordionExample'
									>
										<div className='accordion-body'>
											<p>
												Hiện tại mức giá của tất cả sản phẩm của GACHASHOP đều đã bao gồm thuế giá trị gia
												tăng.
												<br />
												Với những đơn hàng có giá trị trên 700,000VND, Quý khách sẽ được miễn phí vận chuyển
												<br />
												Với những đơn hàng có giá trị dưới 700,000VND,Quý khách vui lòng thanh toán thêm
												30,000VND chi phí vận chuyển
											</p>
										</div>
									</div>
								</div>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingThree'>
										<button
											className='accordion-button collapsed'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#collapseThree'
											aria-expanded='false'
											aria-controls='collapseThree'
										>
											Tôi muốn lấy hóa đơn VAT phải làm thế nào?
										</button>
									</h2>
									<div
										id='collapseThree'
										className='accordion-collapse collapse'
										aria-labelledby='headingThree'
										data-bs-parent='#accordionExample'
									>
										<div className='accordion-body'>
											Quý khách vui lòng cung cấp đầy đủ các thông tin dưới đây cho GACHASHOP khi nhận được
											điện thoại xác nhận đơn hàng của bộ phận Telesale:
											<br />
											1. Tên KH/Tên Đơn vị
											<br />
											2. Địa chỉ
											<br />
											3. Mã Số Thuế
											<br />
											3. Mã Số Thuế
											<br />
											Hóa đơn điện tử sẽ được GACHASHOP gửi tới email đăng ký của Quý khách ngay sau khi sản
											phẩm được thanh toán
										</div>
									</div>
								</div>
							</div>
							<h3 className='mt-4'>Đơn hàng và những thông tin liên quan</h3>
							<div className='accordion' id='accordionPanelsStayOpenExample'>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='panelsStayOpen-headingOne'>
										<button
											className='accordion-button'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#panelsStayOpen-collapseOne'
											aria-expanded='true'
											aria-controls='panelsStayOpen-collapseOne'
										>
											Tôi cần phải thay đổi một vài thứ liên quan đến đơn hàng, tôi phải làm thế nào?
										</button>
									</h2>
									<div
										id='panelsStayOpen-collapseOne'
										className='accordion-collapse collapse show'
										aria-labelledby='panelsStayOpen-headingOne'
									>
										<div className='accordion-body'>
											<p>
												Quý khách vui lòng liên hệ Hotline 0123 456 789 hoặc inbox fanpage GACHASHOP để được
												hỗ trợ nhanh nhất các thông tin về đơn hàng
											</p>
										</div>
									</div>
								</div>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='panelsStayOpen-headingTwo'>
										<button
											className='accordion-button collapsed'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#panelsStayOpen-collapseTwo'
											aria-expanded='false'
											aria-controls='panelsStayOpen-collapseTwo'
										>
											Tôi có thể sử dụng nhiều ưu đãi cho một đơn hàng được không?
										</button>
									</h2>
									<div
										id='panelsStayOpen-collapseTwo'
										className='accordion-collapse collapse'
										aria-labelledby='panelsStayOpen-headingTwo'
									>
										<div className='accordion-body'>
											<p>
												Quý khách vui lòng liên hệ Hotline 0123 456 789 hoặc inbox fanpage GACHASHOP để được
												hỗ trợ nhanh nhất các thông tin về đơn hàng
											</p>
										</div>
									</div>
								</div>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='panelsStayOpen-headingThree'>
										<button
											className='accordion-button collapsed'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#panelsStayOpen-collapseThree'
											aria-expanded='false'
											aria-controls='panelsStayOpen-collapseThree'
										>
											GACHASHOP có thể khắc bất kì thứ gì tôi muốn lên sản phẩm được không?
										</button>
									</h2>
									<div
										id='panelsStayOpen-collapseThree'
										className='accordion-collapse collapse'
										aria-labelledby='panelsStayOpen-headingThree'
									>
										<div className='accordion-body'>
											<p>
												Quý khách vui lòng liên hệ Hotline 0123 456 789 hoặc inbox fanpage GACHASHOP để được
												hỗ trợ nhanh nhất các thông tin về đơn hàng
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr />
		</div>
	);
};

export default Faq;
