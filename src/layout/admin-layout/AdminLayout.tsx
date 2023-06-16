import { useState } from 'react';
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	DesktopOutlined,
	InboxOutlined,
	AppstoreOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { MenuProps, Avatar, Badge, Space } from 'antd';
import { Layout, Menu, Button, theme } from 'antd';
const { Header, Sider, Content } = Layout;
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: 'group'
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type,
	} as MenuItem;
}

const AdminLayout: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<Layout>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className='demo-logo-vertical' />
				<Menu
					theme='dark'
					mode='inline'
					defaultSelectedKeys={['1']}
					items={[
						getItem(<Link to='/admin'>Thống kê</Link>, '0', <DesktopOutlined />),
						getItem('Sản phẩm', 'sub1', <InboxOutlined />, [
							getItem(<Link to='/admin/product'>Sản phẩm</Link>, '1'),
							getItem(<Link to='/admin/product/add'>Tạo sản phẩm</Link>, '2'),
							getItem('Option 7', '3'),
							getItem('Option 8', '4'),
						]),
						getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
							getItem('Option 9', '5'),
							getItem('Option 10', '6'),
							getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
						]),
					]}
				/>
			</Sider>
			<Layout>
				<Header style={{ padding: 0, background: colorBgContainer }}>
					<Space size={12}>
						<Button
							type='text'
							icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
							onClick={() => setCollapsed(!collapsed)}
							style={{
								fontSize: '16px',
								width: 64,
								height: 64,
							}}
						/>
						{/* Avatar */}
						<Badge count={1}>
							<Avatar shape='square' icon={<UserOutlined />} />
						</Badge>
					</Space>
				</Header>
				<Content
					style={{
						margin: '24px 16px',
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
					}}
				>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
};

export default AdminLayout;
