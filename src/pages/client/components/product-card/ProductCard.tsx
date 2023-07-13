import { Link } from 'react-router-dom';
import './ProductCard.scss';

const ProductCard = ({ prod }) => {
	const VND = new Intl.NumberFormat('vi-VN', {
		style: 'currency',
		currency: 'VND',
	});
	return (
		<div className='h-top-pro-card g-col m-auto'>
			<Link to={`/product?id=${prod.id_product}`} className='card-img-top tab-content' id='nav-tabContent'>
				<div>
					<img src={prod.img_thumbnail} alt='' />
				</div>
			</Link>

			<Link to={`/product?id=${prod.id_product}`} className='card-text'>
				{prod.name_prod}
			</Link>
			<div className='price-box text-center'>
				<span className='price'>{VND.format(prod.price_prod)}</span>
			</div>
			<Link className='btn btn-primary' to={`/product?id=${prod.id_product}`}>
				Xem thêm
			</Link>
		</div>
	);
};

export default ProductCard;
