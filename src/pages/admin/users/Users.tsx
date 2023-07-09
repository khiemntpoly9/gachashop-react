import { Pagination, Table } from 'antd';
import { useEffect, useState } from 'react';
import { UsersType } from '~/interface/user.type';
import { getListUsers } from '~/services/user/user.service';

const Users = () => {
	const [users, setUsers] = useState<UsersType>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 5;
	useEffect(() => {
		const fetchUsers = async () => {
			const data = await getListUsers();
			setUsers(data);
		};
		fetchUsers();
	}, []);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	//Phân trang
	const currentData = users.slice((currentPage - 1) * pageSize, currentPage * pageSize);

	//Chia cột
	const columns = [
		{
			title: 'ID',
			dataIndex: 'id_user',
			key: 'id_user',
		},
		{
			title: 'Họ',
			dataIndex: 'first_name',
			key: 'first_name',
		},
		{
			title: 'Tên',
			dataIndex: 'last_name',
			key: 'last_name',
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
			// render: (categories) => categories?.name_categories,
		},
		{
			title: 'SĐT',
			dataIndex: 'phone',
			key: 'phone',
		},
		{
			title: 'Xác thực',
			dataIndex: 'verify',
			key: 'verify',
			render: (verify) => (verify == 1 ? 'Đã xác thực' : 'Chưa xác thực'),
		},

		// {
		// 	title: 'Thời gian',
		// 	dataIndex: 'createdAt',
		// 	key: 'createdAt',
		// 	render: (createdAt) => moment(createdAt).format('DD/MM/YYYY HH:mm:ss'),
		// },
		// {
		// 	title: 'Công cụ',
		// 	key: 'actions',
		// 	render: (text, record) => <AcitonAdmin productId={record.id_product} nameProduct={record.name_prod} />,
		// },
	];

	return (
		<div>
			<h4>Danh sách tài khoản</h4>
			{/* table */}
			<div className='border rounded-2 p-3'>
				<Table dataSource={currentData} columns={columns} pagination={false} />

				<Pagination
					className='m-2'
					current={currentPage}
					total={users.length}
					pageSize={pageSize}
					onChange={handlePageChange}
				/>
			</div>
		</div>
	);
};

export default Users;
