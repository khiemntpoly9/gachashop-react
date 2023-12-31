/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { getAllChildCategories, getAllParentCategories } from '@services/product/category.service';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Link } from 'react-router-dom';
// interface
import { Categories } from '@interface/categories.type';
import { BrandsType } from '@interface/brand.type';
// services
import { addProduct } from '@services/product/product.service';
import { getListBrands } from '@services/brand/brand.service';
import './ProductAdmin.scss';

const ProductAddBs: React.FC = () => {
	// Set danh mục chính lấy từ API
	const [categories, setCategories] = useState<Categories>([]);
	// Set danh mục phụ lấy từ API
	const [subCategories, setSubCategories] = useState<Categories>([]);
	// Set thương hiệu lấy từ API
	const [brands, setBrands] = useState<BrandsType>([]);
	// Sau filter, set danh mục phụ
	const [filteredSubCategories, setFilteredSubCategories] = useState<Categories>([]);
	// Product detail
	const [productDetail, setProductDetail] = useState<any>();
	// File
	const [ImageThumbnail, setImageThumbnail] = useState<File | null>(null);
	const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
	const [ImageList, setImageList] = useState<File[] | null>(null);
	const [listUrl, setListUrl] = useState<string[] | null>(null);
	//
	useEffect(() => {
		// Lấy danh mục chính
		const fetchCategories = async () => {
			const category = await getAllParentCategories();
			setCategories(category);
		};
		fetchCategories();
		// Lấy danh mục phụ, theo id của danh mục chính
		const fetchSubCategories = async () => {
			const subCategory = await getAllChildCategories();
			setSubCategories(subCategory);
		};
		fetchSubCategories();
		// Lấy brands
		const fetchBrands = async () => {
			const brand = await getListBrands();
			setBrands(brand);
		};
		fetchBrands();
	}, []);
	// Select của danh mục chính
	const handleParentChange = (event: any) => {
		const selectedParent = event.target.value;
		// Lọc dữ liệu cho danh mục phụ
		const filteredSubCategories = subCategories.filter((item) => item.parent_id === parseInt(selectedParent));
		setFilteredSubCategories(filteredSubCategories);
	};
	// Xử lý hình ảnh upload
	const handleImageThumnail = (e: any) => {
		const file = e.target.files && e.target.files[0];
		if (file) {
			setImageThumbnail(file);
			const reader = new FileReader();
			reader.onloadend = () => {
				if (reader.result) {
					setThumbnailUrl(reader.result as string);
				}
			};
			reader.readAsDataURL(file);
		}
	};
	const handleImageList = (e: any) => {
		const files = e.target.files;
		if (files) {
			const newSelectedImages: File[] = [];
			const newThumbnailUrls: string[] = [];
			for (let i = 0; i < files.length; i++) {
				const file = files[i];
				newSelectedImages.push(file);
				const reader = new FileReader();
				reader.onload = () => {
					if (reader.result) {
						newThumbnailUrls.push(reader.result.toString());
						if (newThumbnailUrls.length === files.length) {
							setImageList(newSelectedImages);
							setListUrl(newThumbnailUrls);
						}
					}
				};
				reader.readAsDataURL(file);
			}
		}
	};

	// Xử lý submit form
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('name_prod', e.target.name_prod.value);
		formData.append('id_categories', e.target.id_categories.value);
		formData.append('brand_prod', e.target.brand_prod.value);
		formData.append('detail_prod', productDetail);
		formData.append('quantity', e.target.quantity.value);
		formData.append('price_prod', e.target.price_prod.value);
		// formData.append('material_prod', e.target.material_prod.value);
		formData.append('show_prod', e.target.show_prod.value);
		formData.append('img_thumbnail', ImageThumbnail as Blob);
		for (let i = 0; i < ImageList!.length; i++) {
			formData.append('list_img', ImageList![i]);
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
							{/* Block 1 */}
							<div className='d-flex gap-3 mb-3'>
								{/* Danh mục */}
								<div className='col-lg-3 col-sm-6 col-12'>
									<div className='form-group'>
										<label>Danh mục</label>
										<select
											className='form-select shadow-none'
											aria-label='Default select example'
											onChange={handleParentChange}
										>
											<option selected>Chọn danh mục</option>
											{categories.map((item) => (
												<option key={item.id_categories} value={item.id_categories}>
													{item.name_categories}
												</option>
											))}
										</select>
									</div>
								</div>
								{/* Danh mục phụ */}
								<div className='col-lg-3 col-sm-6 col-12'>
									<div className='form-group'>
										<label>Danh mục phụ</label>
										<select
											className='form-select shadow-none'
											name='id_categories'
											aria-label='Default select example'
										>
											<option selected>Chọn danh mục phụ</option>
											{filteredSubCategories.map((item) => (
												<option key={item.id_categories} value={item.id_categories}>
													{item.name_categories}
												</option>
											))}
										</select>
									</div>
								</div>
								{/* Brand */}
								<div className='col-lg-3 col-sm-6 col-12'>
									<div className='form-group'>
										<label>Thương hiệu</label>
										<select
											className='form-select shadow-none'
											name='brand_prod'
											aria-label='Default select example'
										>
											<option selected>Chọn thương hiệu</option>
											{brands.map((item) => (
												<option key={item.id_brand} value={item.id_brand}>
													{item.name_brand}
												</option>
											))}
										</select>
									</div>
								</div>
							</div>
							{/* Block 2 */}
							<div className='d-flex gap-3 mb-3'>
								{/* Số lượng */}
								<div className='col-lg-3 col-sm-6 col-12'>
									<div className='form-group'>
										<label>Số lượng</label>
										<input className='form-control shadow-none' type='number' name='quantity' />
									</div>
								</div>
								{/* Giá */}
								<div className='col-lg-3 col-sm-6 col-12'>
									<div className='form-group'>
										<label>Giá</label>
										<input className='form-control shadow-none' type='number' name='price_prod' />
									</div>
								</div>
							</div>
							{/* Chi tiết sản phẩm */}
							<div className='col-lg-12 mb-3'>
								<div className='form-group'>
									<label>Chi tiết sản phẩm</label>
									<div className='editor_details'>
										<CKEditor
											editor={ClassicEditor}
											data=''
											onChange={(_, editor) => {
												const data = editor.getData();
												setProductDetail(data);
											}}
										></CKEditor>
									</div>
									{/* <textarea className='form-control shadow-none' name='detail_prod'></textarea> */}
								</div>
							</div>
							<div className='col-lg-12'>
								<div className='form-group mb-3'>
									<label>Ảnh thumbnail</label>
									<input
										type='file'
										className='form-control mb-2'
										name='img_thumbnail'
										onChange={handleImageThumnail}
									/>
									{thumbnailUrl && <img src={thumbnailUrl} alt='Thumbnail' width={120} height={120} />}
								</div>
								{/* Lấy 4 link hình ảnh */}
								<div className='form-group mb-3'>
									<div className=''>
										<label className='form-label'>Ảnh sản phẩm</label>
										<input
											type='file'
											multiple
											className='form-control mb-2'
											name='list_img'
											onChange={handleImageList}
										/>
										{listUrl &&
											listUrl.map((url, index) => (
												<img className='me-3' key={index} src={url} alt='images' width={120} height={120} />
											))}
									</div>
									<div className='img-show'></div>
								</div>
								<div className='form-group'>
									<label className='form-label'> Ẩn/ Hiện sản phẩm</label>
									<select
										className='form-select shadow-none'
										aria-label='Default select example'
										name='show_prod'
									>
										<option selected value='1'>
											Hiện
										</option>
										<option value='0'>Ẩn</option>
									</select>
								</div>
							</div>
							<div className='col-lg-12 mt-3'>
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
