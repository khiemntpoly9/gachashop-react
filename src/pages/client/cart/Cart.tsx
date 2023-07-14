import './Cart.scss';
import React, { useEffect, useState } from 'react';
import { ProductCart } from '~/interface/product';
const Cart: React.FC = () => {
	const [cartItems, setCartItems] = useState<ProductCart[]>([]);

	useEffect(() => {
		const storedCartItems = JSON.parse(localStorage.getItem('productsInCart') || '[]') as ProductCart[];
		setCartItems(storedCartItems);
	}, [setCartItems]);
	console.log(cartItems);
	const btnRemove = (id_product: number) => {
		if (window.confirm('Bạn có chắc chắn muốn xóa không?')) {
			const updatedCartItems = cartItems.filter((item) => item.id_product !== id_product);
			setCartItems(updatedCartItems);
			localStorage.setItem('productsInCart', JSON.stringify(updatedCartItems));
		}
	};
	const calculateTotal = (): number => {
		return cartItems.reduce((total, item) => total + item.price_prod * item.quantity, 0);
	};
	return (
		<>
			<h4 className='text-center my-4'>Giỏ hàng của bạn có 3 sản phẩm</h4>
			<div className='cart my-4'>
				<table className='table table-hover'>
					<thead>
						<tr>
							<th scope='col'>
								<input type='checkbox'></input>
							</th>
							<th scope='col'>Hình ảnh</th>
							<th scope='col'>Tên sản phẩm</th>
							<th scope='col'>Giá</th>
							<th scope='col'>Số lượng</th>
							<th scope='col'>Thành tiền</th>
							<th scope='col'></th>
						</tr>
					</thead>
					<tbody>
						{cartItems.map((item) => (
							<tr key={item.id_product}>
								<th scope='row'>
									<input type='checkbox'></input>
								</th>
								<td>
									<img src={item.img_thumbnail} alt='' width={'100px'} />
								</td>
								<td>{item.name_prod}</td>
								<td>{item.price_prod} đ</td>
								<td>
									<input type='number' className='money' value={item.quantity} />
								</td>
								<td>{item.quantity * item.price_prod} đ</td>
								<td>
									<i
										className='fa-solid fa-trash'
										id={`itemDelete-${item.id_product}`}
										onClick={() => btnRemove(item.id_product)}
									></i>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div>
					<span>
						<strong>Tổng tiền: {calculateTotal()} </strong> VNĐ
					</span>
				</div>
				<div className='d-flex flex-row-reverse my-4'>
					<button className='btn btn-success mx-2'>Thanh toán</button>
					<button className='btn btn-primary'>Tiếp tục mua hàng</button>
				</div>
			</div>
		</>
	);
};

export default Cart;
