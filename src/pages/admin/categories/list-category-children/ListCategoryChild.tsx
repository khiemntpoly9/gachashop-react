import moment from 'moment';
import { useState, useEffect } from 'react';
import { Categories } from '~/interface/categories.type';
import { getAllChildCategories } from '~/services/product/category.service';
import ActionCateAd from '@admin/categories/components/ActionCateAd';
const ListCategoryChild = () => {
	const [cateChildren, setCateChildren] = useState<Categories>([]);
	useEffect(() => {
		const fetchCategories = async () => {
			const data = await getAllChildCategories();
			setCateChildren(data);
		};
		fetchCategories();
	}, []);
	return (
		<div>
			<h4>Danh sách danh mục phụ</h4>
			{/* table */}
			<div className='border rounded-2 p-3'>
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>
								<input type='checkbox' />
							</th>
							<th scope='col'>ID</th>
							<th scope='col'>Tên danh mục phụ</th>
							<th scope='col'>Danh mục chính</th>
							<th scope='col'>Thời gian tạo</th>
							<th scope='col'>Công cụ</th>
						</tr>
					</thead>
					<tbody>
						{cateChildren?.length > 0 ? (
							cateChildren?.map((cateChildren) => (
								<tr key={cateChildren.id_categories}>
									<th scope='row'>
										<input type='checkbox' />
									</th>
									<td>{cateChildren.id_categories}</td>
									<td>{cateChildren.name_categories}</td>
									<td>{cateChildren.parent.name_categories}</td>
									<td>{moment(cateChildren.createdAt).format('DD/MM/YYYY HH:mm:ss')}</td>
									<td>
										<ActionCateAd
											cateId={cateChildren.id_categories}
											nameCate={cateChildren.name_categories}
										/>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td className='text-center' colSpan={6}>
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

export default ListCategoryChild;
