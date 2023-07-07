import './Contact.scss';
const Contact = () => {
	return (
		<div className='contact'>
			<div className='contact-image'>
				<img
					style={{ width: '100%', height: '700px' }}
					src='https://cdn.donmai.us/original/10/cf/10cf1d1fcd1110580c1b50452edbd3d8.jpg'
					alt=''
				/>
				<h1 className='text-center text-uppercase'>Thông tin liên hệ</h1>
				<p>
					<strong>
						Luôn đáp ứng nguồn hàng chất lượng, minh bạch, rõ ràng, cung cấp cho khách hàng thông tin cụ thể
						nhất tạo sự tin tưởng
					</strong>
				</p>
			</div>
			<div className='container contact-page'>
				<div className='row contact-padding'>
					<div className='col-lg-6 col-md-6 col-sm-12 support mt-3'>
						<p className='p-top support1'>GACHASHOP</p>
						<div>
							<h3>Bạn cần được hỗ trợ?</h3>
							<p className='p-bottom'>
								Đối với bất kỳ những nhận xét, câu hỏi hoặc đề xuất liên quan đến tài khoản của bạn, vui lòng
								liên hệ với nhóm hỗ trợ của GACHASHOP.
							</p>
							<p>GACHASHOP@gmail.com</p>
						</div>
						<div className='mt-3'>
							<h3>Bạn có ý tưởng?</h3>
							<p className='p-bottom'>
								Đối với các câu hỏi chung, yêu cầu đối tác, cũng như thông tin liên quan đến phương tiện
								truyền thông, hãy liên hệ với GACHASHOP.
							</p>
						</div>
						<div className='mt-3'>
							<h3>Bộ phận bán hàng</h3>
							<p className='p-bottom'>
								Đối với các yêu cầu bán hàng liên hệ với nhóm bán hàng của chúng tôi.
							</p>
						</div>
						<div className='contact-box mt-3'>
							<p>
								<strong>Địa chỉ: </strong>
								{/* 70 Lu Gia, Ward 15, District 11, Ho Chi Minh City */}
								221/7/37, Đất Thánh,P.6 , Quận Tân Bình, TP.HCM
							</p>
							<p>
								<strong>Điện thoại: </strong>
								1900 6750
							</p>
							<p>
								<strong>Email: </strong>
								GACHASHOP@gmail.com
							</p>
						</div>
					</div>
					<div className='col-lg-6 col-md-6 col-sm-12 mt-3'>
						<div className='row'>
							<div className='col-sm-6 col-xs-12'>
								<fieldset className='form-group'>
									<label htmlFor=''>
										Họ và tên
										<span className='required'>*</span>
										<input
											placeholder='Nhập họ và tên'
											type='text'
											name='contact[name]'
											id='name'
											className='form-control form-control-lg'
										/>
									</label>
								</fieldset>
							</div>
							<div className='col-sm-6 col-xs-12'>
								<fieldset className='form-group'>
									<label htmlFor=''>
										Email
										<span className='required'>*</span>
										<input
											placeholder='Nhập địa chi email'
											type='email'
											name='contact[email]'
											id='email'
											className='form-control form-control-lg'
										/>
									</label>
								</fieldset>
							</div>
							<div className='col-sm-12 col-xs-12'>
								<fieldset className='form-group'>
									<label htmlFor=''>
										Điện thoại
										<span className='required'>*</span>
										<input
											placeholder='Nhập số điện thoại'
											type='tel'
											name='contact[phone]'
											id='tel'
											className='number-phone form-control form-control-lg'
										/>
									</label>
								</fieldset>
							</div>
							<div className='col-sm-12 col-xs-12'>
								<fieldset className='form-group'>
									<label htmlFor=''>
										Nội dung
										<span className='required'>*</span>
									</label>
									<textarea
										placeholder='Nội dung liên hệ'
										className='form-control form-control-lg'
										name='contact[body]'
										id='comment'
										cols={30}
										rows={5}
									></textarea>
								</fieldset>
								<fieldset className='form-group '>
									<button className='btn ' type='submit'>
										Gửi tin nhắn
									</button>
								</fieldset>
							</div>
						</div>
					</div>
				</div>
				<div className='container contact-list-store mt-4'>
					<div className='row'>
						<div className='col-lg-3 col-md-3 col-sm-6 col-8 item-contact-store'>
							<div className='item-contact-store-img'>
								<img
									style={{ height: '200px', width: '300px' }}
									src='https://top10tphcm.com/wp-content/uploads/2021/06/otaku-shop.jpg'
									alt=''
								/>
							</div>
							<div className='item-contact-store-infor mt-3'>
								<h5>GACHASHOP TÂN PHÚ</h5>
								<p>175 Lý Thường Kiệt, Phường 6, Quận Tân Phú, TP Hồ Chí Minh</p>
								<p>
									{' '}
									<a href='tel:0222456789'>0222 456 789</a>
								</p>
								<p>
									{' '}
									<a href='mailto:GACHASHOP@gmail.com'>GACHASHOP@gmail.com</a>
								</p>
							</div>
						</div>
						<div className='col-lg-3 col-md-3 col-sm-6 col-8 item-contact-store'>
							<div className='item-contact-store-img'>
								<img
									style={{ height: '200px', width: '300px' }}
									src='https://www.iheartradio.ca/image/policy:1.15572597:1625686559/https-www-instagram-com-londonderrymall.jpg?f=default&$p$f=b95f4c2'
									alt=''
								/>
							</div>
							<div className='item-contact-store-infor mt-3'>
								<h5>GACHASHOP ĐÀ NẴNG</h5>
								<p>175 Lý Thường Kiệt, Phường 6, Quận Tân Phú, TP Hồ Chí Minh</p>
								<p>
									{' '}
									<a href='tel:0222456789'>0222 456 789</a>
								</p>
								<p>
									{' '}
									<a href='mailto:GACHASHOP@gmail.com'>GACHASHOP@gmail.com</a>
								</p>
							</div>
						</div>
						<div className='col-lg-3 col-md-3 col-sm-6 col-8 item-contact-store'>
							<div className='item-contact-store-img'>
								<img
									style={{ height: '200px', width: '300px' }}
									src='https://www.hobbychan.com/modules/wtslideshow/views/img/sliderimages/bb92f72d129ab1a0340f55121f6d3bfe69a480f5_slide1.png'
									alt=''
								/>
							</div>
							<div className='item-contact-store-infor mt-3'>
								<h5>GACHASHOP NHA TRANG</h5>
								<p>175 Lý Thường Kiệt, Phường 6, Quận Tân Phú, TP Hồ Chí Minh</p>
								<p>
									{' '}
									<a href='tel:0222456789'>0222 456 789</a>
								</p>
								<p>
									{' '}
									<a href='mailto:GACHASHOP@gmail.com'>GACHASHOP@gmail.com</a>
								</p>
							</div>
						</div>
						<div className='col-lg-3 col-md-3 col-sm-6 col-8 item-contact-store'>
							<div className='item-contact-store-img'>
								<img
									style={{ height: '200px', width: '300px' }}
									src='https://www.kingzanime.com/uploads/b/05e39de0-01cb-11ea-91bc-095c31e94a1e/IMG_7486_MTUzNT.jpeg'
									alt=''
								/>
							</div>
							<div className='item-contact-store-infor mt-3'>
								<h5>GACHASHOP ĐÀ LẠT</h5>
								<p>175 Lý Thường Kiệt, Phường 6, Quận Tân Phú, TP Hồ Chí Minh</p>
								<p>
									{' '}
									<a href='tel:0222456789'>0222 456 789</a>
								</p>
								<p>
									{' '}
									<a href='mailto:GACHASHOP@gmail.com'>GACHASHOP@gmail.com</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr />
		</div>
	);
};

export default Contact;
