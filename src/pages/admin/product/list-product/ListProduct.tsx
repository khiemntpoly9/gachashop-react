import { ProductsAds } from '@interface/product';
import { listProductsAd } from '@services/product/product.service';
import { useEffect, useState } from 'react';
import { Table, Pagination } from 'antd';
import moment from 'moment';
import AcitonAdmin from '@admin/product/list-product/AcitonAdmin';
const ListProduct = () => {
	const [productData, setProducts] = useState<ProductsAds>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 5;
	useEffect(() => {
		// Lấy sản phẩm
		const getProductsAd = async () => {
			const productsAd = await listProductsAd(1, 6);
			setProducts(productsAd);
		};
		getProductsAd();
	}, []);
	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	//Phân trang
	const currentData = productData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

	//Chia cột
	const columns = [
		{
			title: 'ID',
			dataIndex: 'id_product',
			key: 'id_product',
		},
		{
			title: 'Tên sản phẩm',
			dataIndex: 'name_prod',
			key: 'name_prod',
		},
		{
			title: 'Danh mục',
			dataIndex: 'categories',
			key: 'categories',
			render: (categories) => categories?.name_categories,
		},
		{
			title: 'Giá',
			dataIndex: 'price_prod',
			key: 'price_prod',
		},
		{
			title: 'Số lượng',
			dataIndex: 'quantity',
			key: 'quantity',
		},
		{
			title: 'Người tạo',
			dataIndex: 'action_history',
			key: 'action_history',
			render: (actionHistory) => actionHistory[0]?.users.last_name,
		},
		{
			title: 'Thời gian',
			dataIndex: 'createdAt',
			key: 'createdAt',
			render: (createdAt) => moment(createdAt).format('DD/MM/YYYY HH:mm:ss'),
		},
		{
			title: 'Công cụ',
			key: 'actions',
			render: (text, record) => <AcitonAdmin productId={record.id_product} nameProduct={record.name_prod} />,
		},
	];
	return (
		<div>
			<h4>Danh sách sản phẩm</h4>
			{/* table */}
			<div className='border rounded-2 p-3'>
				<Table dataSource={currentData} columns={columns} pagination={false} />

				<Pagination
					className='m-2'
					current={currentPage}
					total={productData.length}
					pageSize={pageSize}
					onChange={handlePageChange}
				/>
			</div>
		</div>
	);
};

export default ListProduct;
