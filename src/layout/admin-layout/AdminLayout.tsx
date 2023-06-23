// import { useState } from 'react';
import './AdminLayout.scss';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
	return (
		<div className='main-container d-flex'>
			{/* Siderbar */}
			{/* Bỏ class collapse */}
			<div className='siderbar' id='siderBar'>
				<div className='header-box px-2 pt-3'>
					<h1 className='fs-4 text-center'>
						<span className='bg-white text-dark rouded shadow px-2 me-2'>Gacha</span>
						<span className='text-white'>Shop</span>
					</h1>
				</div>
				<hr style={{ color: '#fff' }} />
				<ul className='p-0'>
					<li className='w-100 px-4 mb-2'>
						<Link to='/admin/dashboard' style={{ color: '#fff' }}>
							<div className='bg-primary w-100 p-2 rounded-2'>
								<i className='fa-solid fa-chart-line'></i> Thống kê
							</div>
						</Link>
					</li>
					<li className='px-4 mb-2'>
						<a
							data-bs-toggle='collapse'
							href='#product'
							role='button'
							aria-expanded='false'
							aria-controls='product'
							style={{ color: '#fff' }}
						>
							<div className='bg-primary w-100 p-2 rounded-2'>
								<i className='fa-solid fa-box'></i> Sản phẩm
							</div>
						</a>
						<div className='collapse border mt-2 rounded-2' id='product'>
							<div className='px-2'>
								<Link to='/admin/products' style={{ color: '#fff' }}>
									Danh sách sản phẩm
								</Link>
							</div>
							<div className='px-2'>
								<Link to='/admin/product/add' style={{ color: '#fff' }}>
									Thêm sản phẩm
								</Link>
							</div>
							<div className='px-2'>
								<Link to='/admin/category' style={{ color: '#fff' }}>
									Danh sách danh mục
								</Link>
							</div>
							<div className='px-2'>
								<Link to='/admin/category-child' style={{ color: '#fff' }}>
									Danh sách danh mục phụ
								</Link>
							</div>
						</div>
					</li>
					<li className='w-100 px-4 mb-2'>
						<a
							data-bs-toggle='collapse'
							href='#list-user'
							role='button'
							aria-expanded='false'
							aria-controls='list-user'
							style={{ color: '#fff' }}
						>
							<div className='bg-primary w-100 p-2 rounded-2'>
								<i className='fa-solid fa-user'></i> Tài khoản
							</div>
						</a>
						<div className='collapse border mt-2 rounded-2' id='list-user'>
							<div className='px-2'>
								<Link to='/admin/list-users' style={{ color: '#fff' }}>
									Danh sách tài khoản
								</Link>
							</div>
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
