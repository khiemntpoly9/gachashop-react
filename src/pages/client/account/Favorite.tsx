import { useEffect, useState } from 'react';
import ProductCard from '../components/product-card/ProductCard';
import '../product/Product.scss';
import { Products } from 'src/interface/product.ts';
import { getProducts } from '@services/product/product.service.ts';
const Favorite = () => {
	// Check data Products
	// console.log(productData);
	const [productFav, setProductFav] = useState<Products>([]);

	useEffect(() => {
		const getproducts = async () => {
			const products = await getProducts();
			setProductFav(products);
		};
		getproducts();
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
