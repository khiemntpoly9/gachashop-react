// import { useState } from 'react';
import './AdminLayout.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const { Search } = Input;

const AdminLayout: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false);
	const onSearch = (value) => console.log(value);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};
	return (
		<div className='main-container d-flex'>
			{/* Siderbar */}

			<Sidebar collapsed={collapsed} onCollapse={toggleCollapsed} />

			{/* Content */}
			<div className='content container-fluid p-0'>
				<div className='content-h border-md shadown-sm mb-2 p-2'>
					<div className='page-header'>
						{collapsed ? (
							<MenuUnfoldOutlined className='trigger' onClick={toggleCollapsed} />
						) : (
							<MenuFoldOutlined className='trigger' onClick={toggleCollapsed} />
						)}
						{/* avatar */}
						<Search
							className='search-bar'
							placeholder='Nhập nội dung bạn muốn tìm'
							enterButton='Tìm kiếm'
							size='large'
							onSearch={onSearch}
							style={{ width: 500 }}
						/>
					</div>
				</div>
				<div className='p-2'>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default AdminLayout;
