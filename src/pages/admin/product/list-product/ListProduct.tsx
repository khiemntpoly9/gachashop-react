import { ProductsAds } from '@interface/product';
import { listProductsAd } from '@services/product/product.service';
import { useEffect, useState } from 'react';
const ListProduct = () => {
	const [productData, setProducts] = useState<ProductsAds>([]);
	useEffect(() => {
		// Lấy sản phẩm
		const getProductsAd = async () => {
			const productsAd = await listProductsAd(1, 6);
			setProducts(productsAd);
		};
		getProductsAd();
	}, []);
	return (
		<div>
			<h4>Danh sách sản phẩm</h4>

			{/* table */}
			<div className='border rounded-2 p-3'>
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
							<th scope='col'>Thời gian</th>
							<th scope='col'>Công cụ</th>
						</tr>
					</thead>
					<tbody>
						{productData?.map((product) => (
							<tr key={product.id_product}>
								<th scope='row'>
									<input type='checkbox' />
								</th>
								<td>{product.id_product}</td>
								<td>{product.name_prod}</td>
								<td>{product.categories.name_categories}</td>
								<td>{product.price_prod}</td>
								<td>{product.quantity}</td>
								<td>{product.user[0].last_name}</td>
								<td>{product.createdAt}</td>
								<td></td>
								<td>
									<div className='d-flex justify-content-around'>
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
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ListProduct;
