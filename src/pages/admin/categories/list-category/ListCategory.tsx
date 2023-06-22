import moment from 'moment';
import { useState, useEffect } from 'react';
import { Categories } from '~/interface/categories.type';
import { createCategory, getAllParentCategories } from '~/services/product/category.service';
import ActionCateAd from '@admin/categories/components/ActionCateAd';
const ListCategory = () => {
	const [cateParent, setCateParent] = useState<Categories>([]);
	const [nameCate, setNameCate] = useState<string>('');
	const [count, setCount] = useState<number>(0);
	useEffect(() => {
		const fetchCategories = async () => {
			const data = await getAllParentCategories();
			setCateParent(data);
		};
		fetchCategories();
	}, [count]);
	// Tạo danh mục parent
	const createCategoriesParent = async () => {
		await createCategory(nameCate, null);
		handleIncreaseNumber();
	};
	// Tăng lên 1, mỗi khi có tương tác với dữ liệu
	const handleIncreaseNumber = () => {
		setCount(count + 1);
	};
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
									<td>{cateParent.action_history[0].users.last_name}</td>
									<td>
										<ActionCateAd
											cateId={cateParent.id_categories}
											nameCate={cateParent.name_categories}
											onIncreaseNumber={handleIncreaseNumber}
										/>
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
							<div className='mb-3'>
								<label htmlFor='exampleFormControlInput1' className='form-label'>
									Tên danh mục
								</label>
								<input
									type='text'
									className='form-control shadow-none'
									onChange={(e) => {
										setNameCate(e.target.value);
									}}
								/>
							</div>
						</div>
						<div className='modal-footer'>
							<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
								Huỷ
							</button>
							<button type='button' className='btn btn-success' onClick={createCategoriesParent}>
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
