// import { useState } from 'react';
import './AdminLayout.scss';

import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const AdminLayout: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false);

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
