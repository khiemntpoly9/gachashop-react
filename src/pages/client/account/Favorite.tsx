import { useEffect, useState } from 'react';
import ProductCard from '../components/product-card/ProductCard';
import newRequest from '../../../utils/newRequest';
import '../product/Product.scss';
const Favorite = () => {
	// Check data Products
	// console.log(productData);
	const [productFav, setProductFav] = useState([]);

	useEffect(() => {
		newRequest
			.get('/products') //đổi get favorite khi có api
			.then((res) => {
				setProductFav(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	return (
		<div className='container'>
			<h2>Sản phẩm yêu thích</h2>
			<div className='products-view  row row-cols-4 justify-content-between gap-1	'>
				{productFav.map((prod) => (
					<ProductCard key={prod.id_product} prod={prod} />
				))}
			</div>
		</div>
	);
};

export default Favorite;
