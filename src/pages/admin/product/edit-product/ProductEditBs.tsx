/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { getAllChildCategories, getAllParentCategories } from '@services/product/category.service';
import { Link, useLocation } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// interface
import { Categories } from '@interface/categories.type';
import { BrandsType } from '@interface/brand.type';
// services
import { getProductDetail, updateProduct, deleteImage } from '@services/product/product.service';
import { getListBrands } from '@services/brand/brand.service';
import './ProductAdmin.scss';
import { ProductDetail } from '~/interface/product';

const ProductEditBs: React.FC = () => {
	// Lấy ID trên url
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const id = searchParams.get('id');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	// Set danh mục chính lấy từ API
	const [categories, setCategories] = useState<Categories>([]);
	// Set danh mục phụ lấy từ API
	const [subCategories, setSubCategories] = useState<Categories>([]);
	// Set thương hiệu lấy từ API
	const [brands, setBrands] = useState<BrandsType>([]);
	// Sau filter, set danh mục phụ
	const [filteredSubCategories, setFilteredSubCategories] = useState<Categories>([]);
	// Data product detail
	const [productDetail, setProductDetail] = useState<ProductDetail | null>(null);
	// Dữ liệu form
	const [formDataProductDetail, setFormDataProductDetail] = useState<string>('');
	// File
	const [ImageThumbnail, setImageThumbnail] = useState<File | null>(null);
	const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
	const [ImageList, setImageList] = useState<File[] | null>(null);
	const [listUrl, setListUrl] = useState<string[] | null>(null);
	//
	const fetchProductDetail = async () => {
		const productDetail = await getProductDetail(Number(id));
		setProductDetail(productDetail);
		console.log(productDetail);
		// Lấy danh mục chính
		const category = await getAllParentCategories();
		setCategories(category);
		// Lấy danh mục phụ
		const subCategory = await getAllChildCategories();
		setSubCategories(subCategory);
		// Lấy brands
		const brand = await getListBrands();
		setBrands(brand);
		// subcategory filter
		setFilteredSubCategories([]);
		//chi tiết
		setFormDataProductDetail(productDetail?.detail_prod?.detail_prod || '');
		// loading
		setIsLoading(true);
	};
	useEffect(() => {
		// Lấy data chi tiết sản phẩm
		fetchProductDetail();
	}, [id]);
	// Select của danh mục chính (onChange)
	const handleParentChange = (event: any) => {
		const selectedParent = event.target.value;
		const filteredSubCategories = subCategories.filter((item) => item.parent_id === parseInt(selectedParent));
		setFilteredSubCategories(filteredSubCategories);
	};
	// Xử lý hình ảnh thumbnail
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
	// Xử lý list hình ảnh
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

	async function deleteImageHandle(item: any) {
		await deleteImage(item.public_id);
		fetchProductDetail();
	}

	// Xử lý submit form
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('name_prod', e.target.name_prod.value);
		formData.append('id_categories', e.target.id_categories.value);
		formData.append('brand_prod', e.target.brand_prod.value);
		formData.append('detail_prod', formDataProductDetail);
		formData.append('quantity', e.target.quantity.value);
		formData.append('price_prod', e.target.price_prod.value);
		// formData.append('material_prod', e.target.material_prod.value);
		formData.append('show_prod', e.target.show_prod.value);
		if (ImageThumbnail !== null) {
			formData.append('img_thumbnail', ImageThumbnail as Blob);
		}
		if (ImageList !== null) {
			for (let i = 0; i < ImageList.length; i++) {
				formData.append('list_img', ImageList![i]);
			}
		}
		// Gọi hàm update
		await updateProduct(Number(id), formData);
	};
	if (!isLoading) return <div>Loading...</div>;
	return (
		<div className='content'>
			<div className='page-header'>
				<div className='page-title'>
					<h4>Sửa sản phẩm</h4>
				</div>
			</div>

			<form onSubmit={handleSubmit} encType='multipart/form-data'>
				<div className='card'>
					<div className='card-body'>
						<div className='mb-3'>
							<label htmlFor='exampleFormControlInput1' className='form-label'>
								Tên sản phẩm
							</label>
							<input
								type='text'
								defaultValue={productDetail?.name_prod}
								className='form-control shadow-none'
								name='name_prod'
							/>
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
											defaultValue={productDetail?.categories?.parent.id_categories}
											onChange={handleParentChange}
										>
											<option>Chọn danh mục</option>
											{categories.map((item) => (
												<option key={item?.id_categories} value={item?.id_categories}>
													{item?.name_categories}
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
											defaultValue={productDetail?.categories?.id_categories}
										>
											<option>Chọn danh mục phụ</option>
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
											defaultValue={productDetail?.brands.id_brand}
										>
											<option>Chọn thương hiệu</option>
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
										<input
											defaultValue={productDetail?.quantity}
											className='form-control shadow-none'
											type='number'
											name='quantity'
										/>
									</div>
								</div>
								{/* Giá */}
								<div className='col-lg-3 col-sm-6 col-12'>
									<div className='form-group'>
										<label>Giá</label>
										<input
											defaultValue={productDetail?.price_prod}
											className='form-control shadow-none'
											type='number'
											name='price_prod'
										/>
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
											data={formDataProductDetail}
											onChange={(_, editor) => {
												const data = editor.getData();
												console.log(data);
												setFormDataProductDetail(data);
											}}
										></CKEditor>
									</div>
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

									{thumbnailUrl ? (
										<img src={thumbnailUrl} alt='Thumbnail' width={120} height={120} />
									) : (
										<img src={productDetail?.img_thumbnail} width={120} height={120} />
									)}
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
												<div className='me-3 position-relative d-inline-block' key={index}>
													<img className='' src={url} alt='images' width={120} height={120} />
													<div
														onClick={() => {
															setListUrl([]);
															setImageList([]);
														}}
														className='position-absolute top-0 end-0 p-1 bg-white'
													>
														X
													</div>
												</div>
											))}
										{productDetail?.img_prod.map((item, index) => (
											<div className='me-3 position-relative d-inline-block' key={index}>
												<img src={item.url} alt='images' width={120} height={120} />
												<div
													onClick={() => deleteImageHandle(item)}
													className='position-absolute top-0 end-0 p-1 bg-white'
												>
													X
												</div>
											</div>
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
										defaultValue={productDetail?.show_prod}
									>
										<option value='1'>Hiện</option>
										<option value='0'>Ẩn</option>
									</select>
								</div>
							</div>
							<div className='col-lg-12 mt-3'>
								<button type='submit' className='btn btn-submit me-2 btn-primary'>
									Sửa sản phẩm
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

export default ProductEditBs;
