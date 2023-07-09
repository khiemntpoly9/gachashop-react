import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import ProductCard from '../product-card/ProductCard';
import './Slide.scss';
import { getProducts } from '@services/product/product.service.ts';
import { Products } from 'src/interface/product.ts';

const Slide = () => {
	const [products, setProducts] = useState<Products>([]);
	useEffect(() => {
		const getproducts = async () => {
			const products = await getProducts();
			setProducts(products);
		};
		getproducts();
	}, []);
	return (
		<div>
			<Swiper
				modules={[Navigation, EffectFade, Autoplay, Pagination, Scrollbar, A11y]}
				navigation
				// effect={'fade'}
				speed={800}
				slidesPerView={4}
				// autoplay={{delay: 1000}}
				// pagination={{clickable: true}}
				spaceBetween={20}
				// pagination={{ clickable: true }}
				// scrollbar={{ draggable: true }}
				// onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slidechange')}
				// loop
				className='myswiper '
			>
				{products.map((prod) => (
					<SwiperSlide key={prod.id_product}>
						<ProductCard prod={prod} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Slide;
