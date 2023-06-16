/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'swiper/css';
import './Home.scss';
import { getProducts } from '../../../services/product/product.service.ts';
import SlideHome from '../components/slide-home/SlideHome';
import ProductCard from '../components/product-card/ProductCard';

const Home = () => {
	const [products, setProducts] = useState<any>([]);
	useEffect(() => {
		const fetchProducts = async () => {
			const products = await getProducts();
			setProducts(products);
		};
		fetchProducts();
	}, []);
	// Lấy dữ liệu từ API
	// const { isLoading, error, data } = useQuery({
	// 	queryKey: ['products'],
	// 	queryFn: () =>
	// 		newRequest.get('/products').then((res) => {
	// 			return res.data;
	// 		}),
	// });
	// if (isLoading) return 'Loading...';
	// if (error) return 'An error has occurred: ' + error;
	return (
		<div className='home'>
			<SlideHome />
			{/* <img className='img-fluid' src={banner} alt='' /> */}
			<div className='container-md'>
				{/* Loại sản phẩm */}
				<div className='home-section-1'>
					<div className='home-cate-head'>
						<h4>DANH MỤC SẢN PHẨM</h4>
						<p>
							Gacha shop với tiêu chí là thiên đường dành cho fan Manga Anime nên shop quy tụ hầu hết các sản
							phẩm đặc trưng của truyện tranh và hoạt hình Nhật Bản.
						</p>
					</div>
					<div className='home-cate-main'>
						<div className='row row-cols-6'>
							<div className='home-cate-card col'>
								<a href=''>
									<img
										src='https://cdn-amz.woka.io/images/I/51WbadQAaaS.jpg'
										alt=''
										className='card-img-top'
									/>
									<p className='card-text text-uppercase'>figure - mô hình</p>
								</a>
							</div>
							<div className='home-cate-card col'>
								<a href=''>
									<img
										src='https://product.hstatic.net/1000273792/product/0_dfdb51b4b5a945a98d2630a0c49555c2_grande.jpg'
										alt=''
										className='card-img-top'
									/>
									<p className='card-text text-uppercase'>Áo - trang phục</p>
								</a>
							</div>
							<div className='home-cate-card col'>
								<a href=''>
									<img
										src='https://product.hstatic.net/1000273792/product/1_grande.jpg'
										alt=''
										className='card-img-top'
									/>
									<p className='card-text text-uppercase'>Ba lô - dụng cụ học tập</p>
								</a>
							</div>
							<div className='home-cate-card col'>
								<a href=''>
									<img
										src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXEkeB2kHqMBhTc8n0OYQTOcr1G3vR83KY3w&usqp=CAU'
										alt=''
										className='card-img-top'
									/>
									<p className='card-text text-uppercase'>MÓC KHÓA - STANDEE - HUY HIỆU</p>
								</a>
							</div>
							<div className='home-cate-card col'>
								<a href=''>
									<img
										src='https://product.hstatic.net/1000273792/product/5a_1e62de7dac104984a750c5f06445b426_grande.jpg'
										alt=''
										className='card-img-top'
									/>
									<p className='card-text text-uppercase'>ĐỒNG HỒ</p>
								</a>
							</div>
							{/* <div className='home-cate-card col'>
            <a href=''>
              <img
                src='https://lzd-img-global.slatic.net/g/p/5c95e7d4235111d1350cc867332644c5.jpg_360x360q75.jpg_.webp'
                alt=''
                className='card-img-top'
              />
              <p className='card-text text-uppercase'>trang sức phụ kiện</p>
            </a>
          </div> */}
						</div>
						<div className='row row-cols-6'>
							<div className='home-cate-card col '>
								<a href=''>
									<img
										src='https://product.hstatic.net/1000273792/product/10b_9636c5f55382428b8702acba1caee543_grande.jpg'
										alt=''
										className='card-img-top'
									/>
									<p className='card-text text-uppercase'>PHỤ KIỆN ĐẦU</p>
								</a>
							</div>
							<div className='home-cate-card col'>
								<a href=''>
									<img
										src='https://product.hstatic.net/1000273792/product/0_7d0353bd938b46cd818ee0c233751e83_grande.jpg'
										alt=''
										className='card-img-top'
									/>
									<p className='card-text text-uppercase'>GỐI - THÚ NHỒI BÔNG</p>
								</a>
							</div>
							<div className='home-cate-card col'>
								<a href=''>
									<img
										src='https://lzd-img-global.slatic.net/g/p/5c95e7d4235111d1350cc867332644c5.jpg_360x360q75.jpg_.webp'
										alt=''
										className='card-img-top'
									/>
									<p className='card-text text-uppercase'>TRANG SỨC</p>
								</a>
							</div>
							<div className='home-cate-card col'>
								<a href=''>
									<img
										src='https://down-vn.img.susercontent.com/file/70d5865e1038e7d0d79e51a4d6d289c5'
										alt=''
										className='card-img-top'
									/>
									<p className='card-text text-uppercase'>SẢN PHẨM IN THEO YÊU CẦU </p>
								</a>
							</div>

							<div className='home-cate-card col'>
								<a href=''>
									<img
										src='https://product.hstatic.net/1000273792/product/87_a045ecaf47964dde9b6b27422e362d7f_grande.jpg'
										alt=''
										className='card-img-top'
									/>
									<p className='card-text text-uppercase'>PHỤ KIỆN KHÁC</p>
								</a>
							</div>
							{/* <div className='home-cate-card col'>
            <a href=''>
              <img
                src='https://bizweb.dktcdn.net/thumb/large/100/396/362/collections/2-ghe-1587981944-1.jpg?v=1596443275397'
                alt=''
                className='card-img-top'
              />
              <p className='card-text text-uppercase'>Bộ sản phẩm</p>
            </a>
          </div> */}
						</div>
					</div>
				</div>
				<div className='home-section-2'>
					<a href=''>
						<div className='img-img-banner1 w-100'>
							<div className='overlay'></div>
						</div>
					</a>
				</div>
				<div className='home-section-3'>
					<div className='home-top-product'>
						<a href='' className='h-title-toppro' title='TOP SẢN PHẨM BÁN CHẠY'>
							TOP SẢN PHẨM BÁN CHẠY
						</a>

						<div className='h-topp row row-cols-md-3 row-cols-lg-4 m-0 p-0'>
							{products.slice(0, 8).map((prod) => (
								<div key={prod.id_product} className='p-2'>
									<ProductCard prod={prod} />
								</div>
							))}
							{/* {data.map((prod) => (
            <Product_card key={cards.id} prod={prod} />
          ))} */}
						</div>
						<br />
						<Link className='btn btn-danger' to='/products'>
							Xem tất cả
						</Link>
						{/* <button className='viewmore'>Xem tất cả</button> */}
					</div>
				</div>
				<div className='home-section-4'>
					<div className='slick-track row row-cols-6'>
						<a href='' className='slick-item col ' style={{ width: '220px' }}>
							<img src='https://otakustore.vn/image/cache//manufacturer/alter-150x150w.png' alt='' />
						</a>
						<a href='' className='slick-item col' style={{ width: '220px' }}>
							<img src='https://otakustore.vn/image/cache//manufacturer/Taito-logo-150x150w.png' alt='' />
						</a>
						<a href='' className='slick-item col' style={{ width: '220px' }}>
							<img
								src='https://otakustore.vn/image/cache/catalog/manufacturer/mpalace_logo-150x150w.jpg'
								alt=''
							/>
						</a>
						<a href='' className='slick-item col' style={{ width: '220px' }}>
							<img src='https://otakustore.vn/image/cache//manufacturer/bandai-150x150.png' alt='' />
						</a>
						<a href='' className='slick-item col' style={{ width: '220px' }}>
							<img src='https://otakustore.vn/image/cache//manufacturer/banpesto-150x150w.jpg' alt='' />
						</a>
						<a href='' className='slick-item col' style={{ width: '220px' }}>
							<img
								src='https://otakustore.vn/image/cache/catalog/manufacturer/bbt-studio-150x150w.jpg'
								alt=''
							/>
						</a>
					</div>
				</div>
				<div className='home-section-5'>
					<div className='home-top-product'>
						{/* <a href='' className='h-title-toppro' title='TOP SẢN PHẨM BÁN CHẠY'>
          SẢN PHẨM NHÀ XANH
        </a>  */}
						{/* <div className='h-topp row row-cols-4 justify-content-between'> */}
						{/* Xuất Product Card */}
						{/* {status == 'loading' && <p>Đang tải dữ liệu....</p>}
          {status === 'succeeded' &&
            productData.map((prod) => <Product_card key={prod.id_product} prod={prod} />)}
          {status === 'failed' && <p>Error: {error}</p>} */}
						{/* </div> */}
						{/* <Link className='viewmore' to='/products'>
          Xem tất cả
        </Link> */}
						{/* <button >Xem tất cả</button> */}
					</div>
				</div>
				{/* <div className='home-section-6'>
      <div className='section-banner'>
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
            <a href='' className='banner'>
              <img
                src='https://bizweb.dktcdn.net/100/396/362/themes/777022/assets/feature_banner_1.jpg?1678155521674'
                alt=''
                className='banner-image'
              />
            </a>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
            <a href=''>
              <img
                src='https://bizweb.dktcdn.net/100/396/362/themes/777022/assets/feature_banner_2.jpg?1678155521674'
                alt=''
              />
            </a>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
            <a href=''>
              <img
                src='https://bizweb.dktcdn.net/100/396/362/themes/777022/assets/feature_banner_3.jpg?1678155521674'
                alt=''
              />
            </a>
          </div>
        </div>
      </div>
    </div> */}
				{/* <div className='home-section-7'>
      <div className='section-blog'>
        <a href='' className='blog-title'>
          CẨM NANG NỘI THẤT
        </a>
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-10 item-news-image'>
            <a href='' className='thumb'>
              <img
                src='https://bizweb.dktcdn.net/thumb/grande/100/396/362/articles/bloglist-1-963x600-1.jpg?v=1595229357487'
                alt=''
              />
            </a>
            <a href='' className='a-title'>
              Nhà phố hai mái giúp gia chủ không cần điều hòa
            </a>
            <div className='author'>20/07/2020</div>
            <p>
              Căn nhà trên mảnh đất 68 m2 ở quận 9 của một gia đình ba người. Để ngôi nhà thông gió và ít
              cần sử dụng điều hòa, kiế...
            </p>
          </div>
          <div className='col-lg-4 col-md-4 col-10 item-news-image'>
            <a href='' className='thumb'>
              <img
                src='https://bizweb.dktcdn.net/thumb/grande/100/396/362/articles/bloglist-1-963x600-1.jpg?v=1595229357487'
                alt=''
              />
            </a>
            <a href='' className='a-title'>
              Nhà phố hai mái giúp gia chủ không cần điều hòa
            </a>
            <div className='author'>20/07/2020</div>
            <p>
              Căn nhà trên mảnh đất 68 m2 ở quận 9 của một gia đình ba người. Để ngôi nhà thông gió và ít
              cần sử dụng điều hòa, kiế...
            </p>
          </div>
          <div className='col-lg-4 col-md-4 col-10 item-news-image'>
            <a href='' className='thumb'>
              <img
                src='https://bizweb.dktcdn.net/thumb/grande/100/396/362/articles/bloglist-1-963x600-1.jpg?v=1595229357487'
                alt=''
              />
            </a>
            <a href='' className='a-title'>
              Nhà phố hai mái giúp gia chủ không cần điều hòa
            </a>
            <div className='author'>20/07/2020</div>
            <p>
              Căn nhà trên mảnh đất 68 m2 ở quận 9 của một gia đình ba người. Để ngôi nhà thông gió và ít
              cần sử dụng điều hòa, kiế...
            </p>
          </div>
        </div>
      </div>
    </div> */}
			</div>
			<div className='home-section-8'>
				<div className='section-mail'>
					<div className='container'>
						<h3>ĐĂNG KÝ ĐỂ NHẬN TIN TỪ GACHASHOP</h3>
						<p>
							Đăng kí nhận bản tin khuyến mãi. Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn!
						</p>
						<form action='' method='post' className='form-mail-NT'>
							<input
								type='email'
								className='form-control'
								placeholder='Email của bạn'
								name='EMAIL'
								id='mail'
							/>
							<button name='subscribe' id='subcribe'>
								Đăng ký
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
