import './Account.scss';

const Orders = () => {
	return (
		<div className='account container'>
			<div className='row'>
				<div className='account-nav col-3'>
					<div className='nav-side'>
						<h4>TRANG TÀI KHOẢN</h4>
						<p>Xin chào,...</p> {/* Truyền dữ liệu từ db*/}
						<ul className='list-unstyled'>
							<li>
								<a href='/account' className='title-info'>
									Thông tin tài khoản!
								</a>
							</li>
							<li>
								<a href='/account/orders' className='title-info active'>
									Đơn hàng của bạn
								</a>
							</li>
							<li>
								<a href='/account/changepassword' className='title-info'>
									Đổi mật khẩu
								</a>
							</li>
							<li>
								<a href='/account/addresses' className='title-info'>
									Số địa chỉ (0)
								</a>
							</li>
							<li>
								<a href='' className='title-info'>
									Đăng xuất
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='account-content col-9'>
					<h4>ĐƠN HÀNG CỦA BẠN</h4>
					<table className='table table-bordered'>
						<thead>
							<tr>
								<th scope='col'>Đơn hàng</th>
								<th scope='col'>Ngày</th>
								<th scope='col'>Địa chỉ</th>
								<th scope='col'>Giá trị đơn hàng</th>
								<th scope='col'>TT thanh toán</th>
								<th scope='col'>TT vận chuyển</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope='row' colSpan={6}>
									Chưa có đơn hàng
								</th>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Orders;
