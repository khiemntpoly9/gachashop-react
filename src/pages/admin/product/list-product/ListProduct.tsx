import { ProductsAds } from '@interface/product';
import { listProductsAd } from '@services/product/product.service';
import { useEffect, useState } from 'react';
import moment from 'moment';
import AcitonAdmin from '@admin/product/list-product/AcitonAdmin';
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
						{productData?.length > 0 ? (
							productData?.map((product) => (
								<tr key={product.id_product}>
									<th scope='row'>
										<input type='checkbox' />
									</th>
									<td>{product.id_product}</td>
									<td>{product.name_prod}</td>
									<td>{product.categories?.name_categories}</td>
									<td>{product.price_prod}</td>
									<td>{product.quantity}</td>
									<td>{product.user[0].last_name}</td>
									<td>{moment(product.createdAt).format('DD/MM/YYYY HH:mm:ss')}</td>
									<td>
										<AcitonAdmin productId={product.id_product} nameProduct={product.name_prod} />
									</td>
								</tr>
							))
						) : (
							<tr>
								<td className='text-center' colSpan={9}>
									Không có dữ liệu.
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ListProduct;
