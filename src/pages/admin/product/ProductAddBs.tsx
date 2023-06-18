/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { getCategories } from '../../../services/product/category.service';
import { Categories } from '../../../interface/categories.type';
import { Link } from 'react-router-dom';
import { addProduct } from '../../../services/product/product.service';

const ProductAddBs: React.FC = () => {
	const [categories, setCategories] = useState<Categories>([]);
	useEffect(() => {
		const fetchProducts = async () => {
			const category = await getCategories();
			setCategories(category);
		};
		fetchProducts();
	}, []);
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('name_prod', e.target.name_prod.value);
		formData.append('id_categories', e.target.id_categories.value);
		// formData.append('brand_prod', e.target.brand_prod.value);
		formData.append('detail_prod', e.target.detail_prod.value);
		// formData.append('description_prod', e.target.description_prod.value);
		// formData.append('specification_prod', e.target.specification_prod.value);
		formData.append('quantity', e.target.quantity.value);
		formData.append('price_prod', e.target.price_prod.value);
		// formData.append('material_prod', e.target.material_prod.value);
		formData.append('show_prod', e.target.show_prod.value);
		formData.append('img_thumbnail', e.target.img_thumbnail.files[0]);
		for (let i = 0; i < e.target.list_img.files.length; i++) {
			formData.append('list_img', e.target.list_img.files[i]);
		}
		await addProduct(formData);
	};
	return (
		<div className='content'>
			<div className='page-header'>
				<div className='page-title'>
					<h4>Thêm sản phẩm</h4>
					<h6>Tạo sản phẩm mới</h6>
				</div>
			</div>

			<form onSubmit={handleSubmit} encType='multipart/form-data'>
				<div className='card'>
					<div className='card-body'>
						<div className='mb-3'>
							<label htmlFor='exampleFormControlInput1' className='form-label'>
								Tên sản phẩm
							</label>
							<input type='text' className='form-control shadow-none' name='name_prod' />
						</div>
						<div className='row'>
							<div className='col-lg-3 col-sm-6 col-12'>
								<div className='form-group'>
									<label>Danh mục</label>
									<select className='select' name='id_categories'>
										<option>Chọn danh mục</option>
										{categories.map((item) => (
											<option key={item.id_categories} value={item.id_categories}>
												{item.name_categories}
											</option>
										))}
									</select>
								</div>
							</div>

							{/* <div className='col-lg-3 col-sm-6 col-12'>
								<div className='form-group'>
									<label>Thương hiệu</label>
									<select className='select' name='brand_prod'>
										<option>Chọn thương hiệu</option>
										{brand.map((item) => (
											<option key={item.id_brand} value={item.id_brand}>
												{item.name_brand}
											</option>
										))}
									</select>
								</div>
							</div> */}
							<div className='col-lg-3 col-sm-6 col-12'>
								<div className='form-group'>
									<label>Số lượng</label>
									<input type='text' name='quantity' />
								</div>
							</div>

							<div className='col-lg-3 col-sm-6 col-12'>
								<div className='form-group'>
									<label>Giá</label>
									<input type='number' name='price_prod' />
								</div>
							</div>

							<div className='col-lg-3 col-sm-6 col-12'>
								<div className='form-group'>
									<label> Ẩn/ Hiện sản phẩm</label>
									<select className='select' name='show_prod'>
										<option value={0}>Ẩn</option>
										<option value={1}>Hiện</option>
									</select>
								</div>
							</div>
							<div className='col-lg-12'>
								<div className='form-group'>
									<label>Chi tiết sản phẩm</label>
									<textarea className='form-control' name='detail_prod'></textarea>
								</div>
							</div>
							<div className='col-lg-12'>
								<div className='form-group'>
									<label>Ảnh thumbnail</label>

									<input type='file' className='form-control' name='img_thumbnail' />
								</div>
								{/* Lấy 4 link hình ảnh */}
								<div className='form-group'>
									<div className='mb-3'>
										<label className='form-label'>Ảnh sản phẩm</label>
										<input type='file' multiple className='form-control' name='list_img' />
									</div>
									<div className='img-show'></div>
								</div>
							</div>
							<div className='col-lg-12'>
								<button type='submit' className='btn btn-submit me-2 btn-primary'>
									Tạo sản phẩm
								</button>
								<Link className='btn btn-cancel' to='/admin/listproduct'>
									Huỷ
								</Link>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ProductAddBs;
