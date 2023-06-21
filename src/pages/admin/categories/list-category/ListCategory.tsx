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
			<button className='btn btn-success mb-2' data-bs-toggle='modal' data-bs-target='#addCateModal'>
				Thêm danh mục
			</button>
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
							<th scope='col'>Người tạo</th>
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
									<td>{cateParent.user[0].last_name}</td>
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
			{/* end table */}
			{/* Model thêm danh mục */}
			<div
				className='modal fade'
				id='addCateModal'
				tabIndex={-1}
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h1 className='modal-title fs-5' id='exampleModalLabel'>
								Thêm danh mục
							</h1>
							<button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
						</div>
						<div className='modal-body'>
							<span>....</span>
						</div>
						<div className='modal-footer'>
							<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
								Huỷ
							</button>
							<button type='button' className='btn btn-success'>
								Thêm
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListCategory;
