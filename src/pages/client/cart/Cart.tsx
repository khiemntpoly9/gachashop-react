import './Cart.scss';

const Cart: React.FC = () => {
	return (
		<>
			<h4 className='text-center my-4'>Giỏ hàng của bạn có 3 sản phẩm</h4>
			<div className='cart my-4'>
				<table className='table table-hover'>
					<thead>
						<tr>
							<th scope='col'>
								<input type='checkbox'></input>
							</th>
							<th scope='col'>Hình ảnh</th>
							<th scope='col'>Tên sản phẩm</th>
							<th scope='col'>Giá</th>
							<th scope='col'>Số lượng</th>
							<th scope='col'>Thành tiền</th>
							<th scope='col'></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope='row'>
								<input type='checkbox'></input>
							</th>
							<td>
								<img
									src='https://mohinhfigure.com/wp-content/uploads/2023/02/mo-hinh-combo-ca-ae-luffy-zoro-sanji-ace-sabo-luc-nho-sieu-dep-cao-15cm-no-box-1.jpg'
									alt=''
									width={'100px'}
								/>
							</td>
							<td>Mô hình Onepiece</td>
							<td>500.000 đ</td>
							<td>
								<input type='number' className='money'></input>
							</td>
							<td>500.000 đ</td>
							<td>
								<i className='fa-solid fa-trash'></i>
							</td>
						</tr>
						<tr>
							<th scope='row'>
								<input type='checkbox'></input>
							</th>
							<td>
								<img
									src='https://mohinhfigure.com/wp-content/uploads/2023/02/mo-hinh-doi-hinh-akatsuki-chibi-hang-sieu-cap-cao-8cm-bao-gom-11-nhan-vat-co-box-mau-1.jpg'
									alt=''
									width={'100px'}
								/>
							</td>
							<td>Mô hình naruto</td>
							<td>500.000 đ</td>
							<td>
								<input type='number' className='money'></input>
							</td>
							<td>500.000 đ</td>
							<td>
								<i className='fa-solid fa-trash'></i>
							</td>
						</tr>
						<tr>
							<th scope='row'>
								<input type='checkbox'></input>
							</th>
							<td>
								<img
									src='https://mohinhfigure.com/wp-content/uploads/2023/02/mo-hinh-majin-buu-chien-dau-sieu-ngau-co-led-cao-21cm-nang-800gram-co-hop-mau-1.jpg'
									alt=''
									width={'100px'}
								/>
							</td>
							<td>Mô hình Mabu</td>
							<td>300.000 đ</td>
							<td>
								<input type='number' className='money'></input>
							</td>
							<td>300.000 đ</td>
							<td>
								<i className='fa-solid fa-trash'></i>
							</td>
						</tr>
					</tbody>
				</table>
				<span>
					<strong>Tổng tiền:</strong> 1.300.0000 đ
				</span>
				<div className='d-flex flex-row-reverse my-4'>
					<button className='btn btn-success mx-2'>Thanh toán</button>
					<button className='btn btn-primary'>Tiếp tục mua hàng</button>
				</div>
			</div>
		</>
	);
};

export default Cart;
