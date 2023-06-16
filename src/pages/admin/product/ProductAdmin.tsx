/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, InputNumber, Select, Space, TreeSelect, Upload } from 'antd';

const { TextArea } = Input;

const normFile = (e: any) => {
	if (Array.isArray(e)) {
		return e;
	}
	return e?.fileList;
};

const onFinish = (e: any) => {
	console.log(e);
};

const ProductAdmin: React.FC = () => {
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
				{/* Hình ảnh */}
				<Form.Item label='Upload' valuePropName='fileList' getValueFromEvent={normFile}>
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

export default ProductAdmin;
