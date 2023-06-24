import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';

import { Link } from 'react-router-dom';
import { UserOutlined, ShoppingOutlined, DashboardOutlined } from '@ant-design/icons';

const Sidebar = ({ collapsed, onCollapse }) => {
	return (
		<Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
			<div className={`header-box px-2 pt-3 ${collapsed ? 'collapsed' : ''}`}>
				<h1 className='fs-4 text-center'>
					<span className='bg-white text-dark rouded shadow px-2 me-2'>Gacha</span>
					<span className='text-white'>Shop</span>
				</h1>
			</div>
			<hr style={{ color: '#fff' }} />
			<div className='logo' />
			<Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
				<Menu.Item key='1' icon={<DashboardOutlined />}>
					<Link to='/admin/dashboard'>Thống kê</Link>
				</Menu.Item>
				<Menu.SubMenu key='sub1' icon={<ShoppingOutlined />} title='Sản phẩm'>
					<Menu.Item key='2'>
						<Link to='/admin/products'>Danh sách sản phẩm</Link>
					</Menu.Item>
					<Menu.Item key='3'>
						<Link to='/admin/product/add'>Thêm sản phẩm</Link>
					</Menu.Item>
					<Menu.Item key='4'>
						<Link to='/admin/category'>Danh sách danh mục</Link>
					</Menu.Item>
					<Menu.Item key='5'>
						<Link to='/admin/category-child'>Danh sách danh mục phụ</Link>
					</Menu.Item>
				</Menu.SubMenu>
				<Menu.Item key='6' icon={<UserOutlined />}>
					<Link to='/admin/list-users'>Tài khoản</Link>
				</Menu.Item>
			</Menu>
		</Sider>
	);
};

export default Sidebar;
