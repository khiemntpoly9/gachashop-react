/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, InputNumber, Select, Space, TreeSelect, Upload } from 'antd';
import { FormDataFields, ProductAdd } from '../../../interface/product.interface';
import { addProduct } from '../../../services/product/product.service';

const { TextArea } = Input;

const normFile = (e: any) => {
	if (Array.isArray(e)) {
		return e;
	}
	return e?.fileList;
};

const onFinish = async (data: ProductAdd) => {
	const formData = new FormData() as unknown as FormDataFields;
	formData.append('name_prod', data.name_prod || '');
	formData.append('id_categories', data.id_categories.toString() || '');
	formData.append('brand_prod', data.brand_prod.toString() || '');
	formData.append('style_prod', data.style_prod.toString() || '');
	formData.append('price_prod', data.price_prod.toString() || '');
	formData.append('detail_prod', data.detail_prod || '');
	formData.append('quantity', data.quantity.toString() || '');
	formData.append('img_thumbnail', data.img_thumbnail[0].name);
	if (data && data.list_img && data.list_img.length > 0) {
		data.list_img.forEach((image) => {
			formData.append('list_img', image.name);
		});
	}
	await addProduct(formData);
};

const ProductAddAdmin: React.FC = () => {
	return (
		<>
			<Form
				onFinish={onFinish}
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 14 }}
				layout='horizontal'
				style={{ maxWidth: 800 }}
			>
				{/* Tên sản phẩm */}
				<Form.Item label='Tên sản phẩm' name='name_prod'>
					<Input />
				</Form.Item>
				{/* Danh mục */}
				<Form.Item label='Danh mục' name='id_categories'>
					<TreeSelect
						treeData={[{ title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] }]}
					/>
				</Form.Item>
				{/* Thương hiệu */}
				<Form.Item label='Thương hiệu' name='brand_prod'>
					<Select>
						<Select.Option value='demo'>Demo</Select.Option>
					</Select>
				</Form.Item>
				{/* Phong cách */}
				<Form.Item label='Phong cách' name='style_prod'>
					<Select>
						<Select.Option value='demo'>Demo</Select.Option>
					</Select>
				</Form.Item>
				{/* Giá */}
				<Form.Item label='Giá sản phẩm' name='price_prod'>
					<Input />
				</Form.Item>
				{/* Mô tả */}
				<Form.Item label='Mô tả' name='detail_prod'>
					<TextArea rows={4} />
				</Form.Item>
				{/* Số lượng */}
				<Form.Item label='Số lượng' name='quantity'>
					<InputNumber />
				</Form.Item>
				{/* Hình ảnh thumbnail */}
				<Form.Item
					label='Thumbnail'
					name='img_thumbnail'
					valuePropName='fileList'
					getValueFromEvent={normFile}
				>
					<Upload listType='picture-card'>
						<div>
							<PlusOutlined />
							<div style={{ marginTop: 8 }}>Upload</div>
						</div>
					</Upload>
				</Form.Item>
				{/* Hình ảnh sản phẩm */}
				<Form.Item label='Ảnh sản phẩm' name='list_img' valuePropName='fileList' getValueFromEvent={normFile}>
					<Upload listType='picture-card'>
						<div>
							<PlusOutlined />
							<div style={{ marginTop: 8 }}>Upload</div>
						</div>
					</Upload>
				</Form.Item>
				<Form.Item label='Hiển thị sản phẩm' name='show_prod' valuePropName='checked'>
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
