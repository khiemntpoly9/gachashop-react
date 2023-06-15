import { Link } from 'react-router-dom';
import './ProductCard.scss';

const ProductCard = ({ prod }) => {
	const VND = new Intl.NumberFormat('vi-VN', {
		style: 'currency',
		currency: 'VND',
	});
	return (
		<div className='h-top-pro-card g-col m-0 p-0'>
			<Link to={`/product?id=${prod.id_product}`} className='card-img-top tab-content' id='nav-tabContent'>
				<div>
					<img src={prod.img_thumbnail} alt='' />
				</div>
			</Link>
			{/* <div className='thumb-list list-group id=list-tab' role='tablist'>
    {imgArray.map((item, index) => {
      return (
        <div
          onClick={() => {
            changeImage(index);
          }}
          className={`thumb-list-item list-group-item list-group-item-action`}
          aria-current='img-card'
          key={index}
        >
          <img src={item} alt='' />
        </div>
      );
    })}
  </div> */}
			<Link to={`/product?id=${prod.id_product}`} className='card-text'>
				{prod.name_prod}
			</Link>
			<div className='price-box text-center'>
				<span className='price'>{VND.format(prod.price_prod)}</span>
			</div>
		</div>
	);
};

export default ProductCard;
