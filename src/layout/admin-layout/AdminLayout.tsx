// import { useState } from 'react';
import './AdminLayout.scss';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
	return (
		<div className='main-container d-flex'>
			{/* Siderbar */}
			<div className='siderbar collapse' id='siderBar'>
				<div className='header-box px-2 pt-3'>
					<h1 className='fs-4'>
						<span className='bg-white text-dark rouded shadow px-2 me-2'>Gacha</span>
						<span className='text-white'>Shop</span>
					</h1>
				</div>
				<hr style={{ color: '#fff' }} />
				{/* <ul className='list-unstyled px-2'></ul> */}
				<ul className='p-0'>
					<li className='px-4'>
						<Link to='/admin/dashboard'>Thống kê</Link>
					</li>
					<li className='px-4'>
						<button
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#product'
							aria-expanded='false'
							aria-controls='product'
						>
							Sản phẩm
						</button>
						<div className='collapse' id='product'>
							kkk
						</div>
					</li>
				</ul>
			</div>
			{/* Content */}
			<div className='content container-fluid p-0'>
				<div className='content-h border-md shadown-sm mb-2 p-2'>
					<div className='page-header'>
						<button
							className='btn'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#siderBar'
							aria-expanded='false'
							aria-controls='siderBar'
						>
							<i className='fa-solid fa-bars-staggered'></i>
						</button>
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
