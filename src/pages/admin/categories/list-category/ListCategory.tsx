import moment from 'moment';
import { useState, useEffect } from 'react';
import { Categories } from '~/interface/categories.type';
import { getAllParentCategories } from '~/services/product/category.service';
import ActionCateAd from '@admin/categories/components/ActionCateAd';
const ListCategory = () => {
	const [cateParent, setCateParent] = useState<Categories>([]);
	useEffect(() => {
		const fetchCategories = async () => {
			const data = await getAllParentCategories();
			setCateParent(data);
		};
		fetchCategories();
	}, []);
	return (
		<div>
			<h4>Danh sách danh mục</h4>

			{/* table */}
			<div className='border rounded-2 p-3'>
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>
								<input type='checkbox' />
							</th>
							<th scope='col'>ID</th>
							<th scope='col'>Tên danh mục</th>
							<th scope='col'>Thời gian tạo</th>
							<th scope='col'>Công cụ</th>
						</tr>
					</thead>
					<tbody>
						{cateParent?.length > 0 ? (
							cateParent?.map((cateParent) => (
								<tr key={cateParent.id_categories}>
									<th scope='row'>
										<input type='checkbox' />
									</th>
									<td>{cateParent.id_categories}</td>
									<td>{cateParent.name_categories}</td>
									<td>{moment(cateParent.createdAt).format('DD/MM/YYYY HH:mm:ss')}</td>
									<td>
										<ActionCateAd cateId={cateParent.id_categories} nameCate={cateParent.name_categories} />
									</td>
								</tr>
							))
						) : (
							<tr>
								<td className='text-center' colSpan={5}>
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

export default ListCategory;
