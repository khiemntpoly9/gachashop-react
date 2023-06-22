import moment from 'moment';
import { useState, useEffect } from 'react';
import { Categories } from '~/interface/categories.type';
import {
	createCategory,
	getAllChildCategories,
	getAllParentCategories,
} from '~/services/product/category.service';
import ActionCateAd from '@admin/categories/components/ActionCateAd';
const ListCategoryChild = () => {
	const [cateChildren, setCateChildren] = useState<Categories>([]);
	const [cateParent, setCateParent] = useState<Categories>([]);
	const [count, setCount] = useState<number>(0);
	//
	const [nameCateChild, setNameCateChild] = useState<string>('');
	const [selectedCategory, setSelectedCategory] = useState<string>('');
	useEffect(() => {
		// Lấy danh mục phụ
		const fetchCategories = async () => {
			const data = await getAllChildCategories();
			setCateChildren(data);
		};
		fetchCategories();
		// Lấy danh mục chính
		const fetchCategoryParent = async () => {
			const data = await getAllParentCategories();
			setCateParent(data);
		};
		fetchCategoryParent();
	}, [count]);
	// Tạo danh mục phục
	const createCateChild = async () => {
		await createCategory(nameCateChild, selectedCategory);
		handleIncreaseNumber();
	};
	// Tăng lên 1, mỗi khi có tương tác với dữ liệu
	const handleIncreaseNumber = () => {
		setCount(count + 1);
	};
	return (
		<div>
			<h4>Danh sách danh mục phụ</h4>
			<button className='btn btn-success mb-2' data-bs-toggle='modal' data-bs-target='#addCateModal'>
				Thêm danh mục phụ
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
											onIncreaseNumber={handleIncreaseNumber}
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
									Chọn danh mục chính
								</label>
								{/* Danh sách danh mục chính */}
								<select
									className='form-select shadow-none'
									aria-label='Default select example'
									value={selectedCategory}
									onChange={(e) => {
										setSelectedCategory(e.target.value);
									}}
								>
									<option selected>Chọn danh mục</option>
									{cateParent?.map((cateParent) => (
										<option key={cateParent.id_categories} value={cateParent.id_categories}>
											{cateParent.name_categories}
										</option>
									))}
								</select>
							</div>
							<div className='mb-3'>
								<label htmlFor='exampleFormControlInput1' className='form-label'>
									Tên danh mục phụ
								</label>
								<input
									type='text'
									className='form-control shadow-none'
									onChange={(e) => {
										setNameCateChild(e.target.value);
									}}
								/>
							</div>
						</div>
						<div className='modal-footer'>
							<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
								Huỷ
							</button>
							<button type='button' className='btn btn-success' onClick={createCateChild}>
								Thêm
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListCategoryChild;
