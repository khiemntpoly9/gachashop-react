import { useEffect, useState } from 'react';
import { UsersType } from '~/interface/user.type';
import { getListUsers } from '~/services/user/user.service';

const Users = () => {
	const [users, setUsers] = useState<UsersType>([]);
	useEffect(() => {
		const fetchUsers = async () => {
			const data = await getListUsers();
			setUsers(data);
		};
		fetchUsers();
	}, []);
	return (
		<div>
			<h4>Danh sách tài khoản</h4>
			{/* table */}
			<div className='border rounded-2 p-3'>
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>
								<input type='checkbox' />
							</th>
							<th scope='col'>ID</th>
							<th scope='col'>Họ và tên</th>
							<th scope='col'>Email</th>
							<th scope='col'>Số điện thoại</th>
							<th scope='col'>Xác thực</th>
							<th scope='col'>Công cụ</th>
						</tr>
					</thead>
					<tbody>
						{users?.length > 0 ? (
							users?.map((user) => (
								<tr key={user.id_user}>
									<th scope='row'>
										<input type='checkbox' />
									</th>
									<td>{user.id_user}</td>
									<td>{`${user.first_name} ${user.last_name}`}</td>
									<td>{user.email}</td>
									<td>{user.phone}</td>
									<td>{user.verify == 1 ? 'Đã xác thực' : 'Chưa xác thực'}</td>
									{/* <td>{moment(user.createdAt).format('DD/MM/YYYY HH:mm:ss')}</td> */}
									{/* <td>{cateParent.action_history[0].users.last_name}</td> */}
									<td>
										<div className='d-flex'>
											<div>
												<button className='btn'>
													<i className='fa-solid fa-eye'></i>
												</button>
											</div>
											<div>
												<button className='btn'>
													<i className='fa-solid fa-pen'></i>
												</button>
											</div>
										</div>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td className='text-center' colSpan={5}>
									Không có dữ liệu.
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
			{/* end table */}
		</div>
	);
};

export default Users;
