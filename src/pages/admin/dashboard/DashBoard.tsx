import './DashBoard.scss';

import { Row, Col, Card } from 'antd';

const DashBoard = () => {
	return (
		<div className='main-dashboard'>
			{/* Thống kê */}
			<div className='content-0'>
				<Row gutter={[16, 16]}>
					<Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>
						<Card style={{ backgroundColor: 'pink', color: 'blue' }} title='Tài khoản'>
							Số liệu
						</Card>
					</Col>
					<Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>
						<Card style={{ backgroundColor: 'lightblue', color: 'blue' }} title='Đơn hàng'>
							Số liệu{' '}
						</Card>
					</Col>
					<Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>
						<Card style={{ backgroundColor: 'lightgreen', color: 'blue' }} title='Tổng tiền'>
							Số liệu{' '}
						</Card>
					</Col>
					<Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={3}>
						<Card title='...'>Số liệu </Card>
					</Col>
				</Row>
			</div>

			<div className='content-1'></div>

			{/* Bảng đơn hàng mới và xác nhận đơn hàng */}
			<div className='content-2'>
				<h2>Đơn hàng mới</h2>
				<div className='table-responsive'>
					<table className='table'>
						<thead>
							<tr>
								<th scope='col'>ID</th>
								<th scope='col'>Name</th>
								<th scope='col'>Email</th>
								<th scope='col'>Role</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope='row'>1</th>
								<td>John Doe</td>
								<td>john.doe@example.com</td>
								<td>Admin</td>
							</tr>
							<tr>
								<th scope='row'>2</th>
								<td>Jane Smith</td>
								<td>jane.smith@example.com</td>
								<td>User</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default DashBoard;
// Doanh thu trong tuần
// Số lượng đơn hàng trong tuần
// Sản phẩm được mua nhiều nhất trong tuần
