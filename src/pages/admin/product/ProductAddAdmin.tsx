/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, InputNumber, Select, Space, TreeSelect, Upload, message } from 'antd';
import { FormDataFields, ProductAdd } from '../../../interface/product';
import { addProduct } from '../../../services/product/product.service';
import { getCategories } from '../../../services/product/category.service';
import { Categories, Category, CategoryA } from '../../../interface/categories.type';

const { TextArea } = Input;

const normFile = (e: any) => {
	if (Array.isArray(e)) {
		return e;
	}
	return e?.fileList;
};

// Lấy data trong form
const handleFormSubmit = async (data: ProductAdd) => {
	const formData = new FormData() as unknown as FormDataFields;
	formData.append('name_prod', data.name_prod || '');
	formData.append('id_categories', data.id_categories.toString() || '');
	// formData.append('brand_prod', data.brand_prod.toString() || '');
	formData.append('brand_prod', '2');
	formData.append('style_prod', '1');
	// formData.append('price_prod', data.price_prod.toString() || '');
	formData.append('price_prod', '90000');
	formData.append('detail_prod', data.detail_prod || '');
	formData.append('quantity', data.quantity.toString() || '');
	// ẩn / hiện
	formData.append('show_prod', data.show_prod ? '1' : '0');
	await addProduct(formData);
};

// Updload hình ảnh
const uploadProp = {
	name: 'img_thumbnail',
	action: 'http://localhost:8080/api/product',
	onchange(info: any) {
		if (info.file.status !== 'uploading') {
			console.log(info.file, info.fileList);
		}
		if (info.file.status === 'done') {
			message.success(`${info.file.name} file uploaded successfully`);
		} else if (info.file.status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
};
const uploadListProp = {
	name: 'list_img',
	action: 'http://localhost:8080/api/product',
	onchange(info: any) {
		if (info.file.status !== 'uploading') {
			console.log(info.file, info.fileList);
		}
		if (info.file.status === 'done') {
			message.success(`${info.file.name} file uploaded successfully`);
		} else if (info.file.status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
};

const ProductAddAdmin: React.FC = () => {
	const [categories, setCategories] = useState<Categories>([]);
	useEffect(() => {
		const fetchProducts = async () => {
			const category = await getCategories();
			setCategories(category);
		};
		fetchProducts();
	}, []);
	// Lấy dữ liệu từ api categories
	const categoriesData: CategoryA[] = [];
	if (categories && categories.length > 0) {
		// Lặp các phần tử trong mảng
		categories.forEach((item: Category) => {
			// Tạo ra một đối tượng mới
			const newCategory: CategoryA = {
				title: item.name_categories,
				value: item.id_categories,
				children: [] as CategoryA[],
			};
			// Nếu trong children có phần tử thì lặp tiếp
			if (item.children && item.children.length > 0) {
				item.children.forEach((child: Category) => {
					const newChild: CategoryA = {
						title: child.name_categories,
						value: child.id_categories,
						children: [],
					};
					newCategory.children.push(newChild);
				});
			}
			// Bài toán nếu trong childern lại có thêm children?
			categoriesData.push(newCategory);
		});
	}
	return (
		<>
			<Form
				encType='multipart/form-data'
				onFinish={handleFormSubmit}
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 14 }}
				layout='horizontal'
				style={{ maxWidth: 800 }}
			>
				{/* Tên sản phẩm */}
				<Form.Item label='Tên sản phẩm' name={'name_prod'}>
					<Input />
				</Form.Item>
				{/* Danh mục */}
				<Form.Item label='Danh mục' name={'id_categories'}>
					<TreeSelect treeData={categoriesData} />
				</Form.Item>
				{/* Thương hiệu */}
				<Form.Item label='Thương hiệu' name={'brand_prod'}>
					<Select>
						<Select.Option value='demo'>Demo</Select.Option>
					</Select>
				</Form.Item>
				{/* Phong cách */}
				<Form.Item label='Phong cách' name={'style_prod'}>
					<Select>
						<Select.Option value='demo'>Demo</Select.Option>
					</Select>
				</Form.Item>
				{/* Giá */}
				<Form.Item label='Giá sản phẩm' name={'price_prod'}>
					<Input />
				</Form.Item>
				{/* Mô tả */}
				<Form.Item label='Mô tả' name={'detail_prod'}>
					<TextArea rows={4} />
				</Form.Item>
				{/* Số lượng */}
				<Form.Item label='Số lượng' name={'quantity'}>
					<InputNumber />
				</Form.Item>
				{/* Hình ảnh thumbnail */}
				<Form.Item
					label='Thumbnail'
					name={'img_thumbnail'}
					valuePropName='fileList'
					getValueFromEvent={normFile}
				>
					<Upload {...uploadProp} listType='picture-card'>
						<div>
							<PlusOutlined />
							<div style={{ marginTop: 8 }}>Upload</div>
						</div>
					</Upload>
				</Form.Item>
				{/* Hình ảnh sản phẩm */}
				<Form.Item
					label='Ảnh sản phẩm'
					name={'list_img'}
					valuePropName='fileList'
					getValueFromEvent={normFile}
				>
					<Upload {...uploadListProp} listType='picture-card' multiple={true}>
						<div>
							<PlusOutlined />
							<div style={{ marginTop: 8 }}>Upload</div>
						</div>
					</Upload>
				</Form.Item>
				<Form.Item label='Hiển thị sản phẩm' name={'show_prod'} valuePropName='checked'>
					<Checkbox>Ẩn / Hiện</Checkbox>
				</Form.Item>
				<Form.Item>
					<Space>
						<Button type='primary' htmlType='submit'>
							Thêm sản phẩm
						</Button>
						<Button
							type='dashed'
							htmlType='reset'
							style={{
								border: '1px solid red',
								color: 'red',
							}}
						>
							Đặt lại
						</Button>
					</Space>
				</Form.Item>
			</Form>
		</>
	);
};

export default ProductAddAdmin;
