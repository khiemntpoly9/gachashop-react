const ListProduct = () => {
	return (
		<div>
			<h4>Danh sách sản phẩm</h4>
			{/* table */}
			<div>
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>
								<input type='checkbox' />
							</th>
							<th scope='col'>ID</th>
							<th scope='col'>Tên sản phẩm</th>
							<th scope='col'>Danh mục</th>
							<th scope='col'>Giá</th>
							<th scope='col'>Số lượng</th>
							<th scope='col'>Người tạo</th>
							<th scope='col'>Công cụ</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope='row'>
								<input type='checkbox' />
							</th>
							<td>1</td>
							<td>Sản phẩm Hutao</td>
							<td>Figure</td>
							<td>900000</td>
							<td>58</td>
							<td>Khiêm</td>
							<td>
								<div className='d-flex'>
									<div>
										<i className='fa-solid fa-eye'></i>
									</div>
									<div>
										<i className='fa-solid fa-pen'></i>
									</div>
									<div>
										<i className='fa-solid fa-trash'></i>
									</div>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ListProduct;
