/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Slide from '@client/components/slide/Slide';
import { getProductDetail } from '~/services/product/product.service';
import './ProductDetail.scss';
const ProductDetail = () => {
	// Lấy ID trên url
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const id = searchParams.get('id');
	// useState
	const [productDetail, setProductDetail] = useState<any>(null);
	const [showMore, setShowMore] = useState<boolean>(false);
	const [value, setValue] = useState(1);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [activeImageIndex, setActiveImageIndex] = useState(0);
	// const [favorite, setFavorite] = useState<any>();
	// Format tiền VND
	const VND = new Intl.NumberFormat('vi-VN', {
		style: 'currency',
		currency: 'VND',
	});

	// Lấy data sản phẩm chi tiết
	useEffect(() => {
		const productDetail = async () => {
			const prodDetail = await getProductDetail(Number(id));
			setProductDetail(prodDetail);
			setIsLoading(true);
		};
		productDetail();
	}, [id]);

	const handleIncrement = () => {
		setValue(value + 1);
	};
	const handleDecrement = () => {
		if (value > 1) {
			setValue(value - 1);
		}
	};

	console.log(productDetail);

	const handleSubmit = (event: any) => {
		event.preventDefault(); // Ngăn chặn gửi dữ liệu và tải lại trang mặc định
	};
	//xem thêm
	const handleShowMore = () => {
		setShowMore(!showMore);
	};
	// index sản phẩm
	const handleImageClick = (index) => {
		setActiveImageIndex(index);
	};
	if (!productDetail || !productDetail.img_prod) {
		return null; // or render an error message
	}

	// cart
	const addToCart = () => {
		// Xác định kiểu dữ liệu
		type Product = {
			id_product: number;
			name_prod: string;
			img_thumbnail: string;
			price_prod: number;
			quantity: number;
		};
		// Check xem đã có sản phẩm trong giỏ hàng chưa
		const cartItems: Product[] = JSON.parse(localStorage.getItem('productsInCart') || '[]');
		// Lấy số lượng sản phẩm
		const quantityInput = document.getElementById('quantity');
		const quantityValue = (quantityInput as HTMLInputElement).value;
		const product: Product = {
			id_product: productDetail.id_product,
			name_prod: productDetail.name_prod,
			img_thumbnail: productDetail.img_thumbnail,
			price_prod: productDetail.price_prod,
			quantity: Number(quantityValue),
		};

		// Kiểm tra sản phẩm đã có trong giỏ hàng chưa
		const existingProduct = cartItems.find((item: Product) => item.id_product === product.id_product);
		if (existingProduct) {
			existingProduct.quantity += product.quantity;
			localStorage.setItem('productsInCart', JSON.stringify(cartItems));
		} else {
			// Nếu chưa có sẽ thêm sản phẩm vào giỏ hàng
			cartItems.push(product);
			localStorage.setItem('productsInCart', JSON.stringify(cartItems));
		}
		alert('Thêm thành công!');
	};
	if (!isLoading) return <div>Loading...</div>;
	return (
		// Thanh breadcrumb
		<div className='productDetail'>
			<div className='container-lg'>
				<nav aria-label='breadcrumb'>
					<ol className='breadcrumb'>
						<li className='breadcrumb-item'>
							<Link to='/' style={{ color: 'black' }}>
								Trang chủ
							</Link>
						</li>
						<li className='breadcrumb-item active' aria-current='page'>
							Sản phẩm chi tiết
						</li>
					</ol>
				</nav>
				<div className='mt-2 row'>
					<div className='row col-12 col-xl-6'>
						<div className='col-2'>
							<div className='list-group img-product' id='list-tab' role='tablist'>
								{productDetail.img_prod.map((img: any, index: number) => (
									<a
										key={img.id_images}
										className={`list-group-item list-group-item-action ${index === activeImageIndex ? 'active' : ''
											}`}
										id={`list-${img.id_images}-list`}
										data-bs-toggle='list'
										href={`#list-${img.id_images}`}
										role='tab'
										aria-controls={`list-${img.id_images}`}
										onClick={() => handleImageClick(index)}
									>
										<img className='w-100' src={img.url} alt='' />
									</a>
								))}
							</div>
						</div>
						{/* <div className='col-10'>
							<div className='tab-content' id='nav-tabContent'>
								<div
									key={productDetail.public_id}
									className='tab-pane fade show active'
									id='list-home'
									role='tabpanel'
									aria-labelledby='list-home-list'
								>
									<img src={productDetail.img_thumbnail} alt='' />
								</div>
							</div>
						</div> */}
						<div className='col-10'>
							<div className='tab-content' id='nav-tabContent'>
								{productDetail.img_prod.map((img: any, index: number) => (
									<div
										key={img.id_images}
										className={`tab-pane fade ${index === activeImageIndex ? 'show active' : ''}`}
										id={`list-${img.id_images}`}
										role='tabpanel'
										aria-labelledby={`list-${img.id_images}-list`}
									>
										<img src={img.url} alt='' />
									</div>
								))}
							</div>
						</div>
					</div>
					<div className='col-12 col-xl-6'>
						<div className='fw-semibold'>
							<h3>{productDetail.name_prod}</h3>
						</div>
						<div className='d-flex justify-content-between'>
							<div className='trademark-product'>
								<p>Thương hiệu: {productDetail.brands.name_brand}</p>
							</div>
							<div className='code-product'>
								<p>Mã sản phẩm: {productDetail.id_product}</p>
							</div>
						</div>
						<hr />
						<div className='fw-semibold'>
							<p className='gia'>{VND.format(productDetail.price_prod)}</p>
						</div>
						<hr />
						<form action='' className='' onSubmit={handleSubmit}>
							<div className=''>
								<label htmlFor='exampleColorInput' className='form-label fw-semibold'>
									Màu sắc
								</label>
								<div className='vang'></div>
								<div className='do'></div>
							</div>
							<div className='material-product'>
								<div className='fw-semibold'>
									<p>Chất liệu</p>
								</div>
								<label htmlFor='' className='p-1'>
									Gỗ công nghiệp
								</label>
							</div>
							<button className='giam' type='button' onClick={handleDecrement}>
								-
							</button>
							<input
								disabled
								className='soluong'
								type='number'
								min='1'
								id='quantity'
								value={value}
								onChange={(event) => setValue(Number(event.target.value))}
							/>
							<button className='giam me-3' type='button' onClick={handleIncrement}>
								+
							</button>
							<button className='addsp' type='submit' onClick={addToCart}>
								Thêm vào giỏ
							</button>
						</form>
						{/* Sp yêu thích */}
						<div className='tym'>
							<i className='fa-regular fa-heart me-2 my-3'></i>
							<span>
								{/* <a href='#' onClick={handleFavorite}>
                Thêm vào yêu thích
              </a> */}
							</span>
						</div>
						{/* Thông tin chi tiết */}
						<div className='showmore'>
							<p className={!showMore ? 'show-more' : ''}>
								{productDetail.detail_prod.detail_prod.replace(/<\/?p>/g, '')}
							</p>

							<button className='xemthem' onClick={handleShowMore}>
								<p className='more-text m-1'>{showMore ? 'Thu gọn' : 'Xem thêm'}</p>
								<i className='fa fa-angle-down '></i>
							</button>

							{/* {<button onClick={() => setShowMore(true)}>Rút gọn</button>} */}
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div className='container'>
				<div className='d-flex justify-content-center'>
					<nav>
						<div className='nav nav-tabs' id='nav-tab' role='tablist'>
							<button
								className='nav-link active'
								id='nav-home-tab'
								data-bs-toggle='tab'
								data-bs-target='#nav-home'
								type='button'
								role='tab'
								aria-controls='nav-home'
								aria-selected='true'
							>
								Mô tả sản phẩm
							</button>
						</div>
					</nav>
				</div>

				<div className='tab-content' id='nav-tabContent'>
					<div
						className='tab-pane fade show active'
						id='nav-home'
						role='tabpanel'
						aria-labelledby='nav-home-tab'
					>
						<p className='fw-bold'>{productDetail.prod}</p>
						<p>
							{' '}
							Bạn đang cần tìm bàn trà sofa, bàn trà cafe mà chưa tìm được sản phẩm ưng ý
							<br />
							Bạn muốn sở hữu mẫu bàn trà sofa hiện đại trẻ trung tiết kiệm diện tích, dễ dàng kết hợp nội
							thất đặc biệt là ghế sofa.
							<br />
							Bạn muốn sở hữu mẫu bàn trà cafe có kích thước hợp lý có thế làm tag đầu giường bàn học, bàn làm
							việc, bàn uống trà thư giãn tại không gian bạn yêu thích.
							<br />
							Bàn cần tìm sản phầm bàn trà sofa độc đáo để tặng quà tân gia.
							<br />
							Nhưng bàn trà sofa bạn cần phải có giá thành hợp lý và chất lượng.
							<br />
							Nhưng bàn trà sofa bạn cần phải có giá thành hợp lý và chất lượng.
							<br />
							THÔNG TIN CHI TIẾT
							<br />
							- Kích thước: Bàn trứng (90x50x42cm), bàn tròn (50x50x45cm).
							<br />
							- Màu sắc: Trắng.
							<br />
							- Chất liệu: Mặt bàn gỗ MDF phủ melamin chống xước chống nước. Chân gỗ sồi tự nhiên.
							<br />
							- Chất liệu: Mặt bàn gỗ MDF phủ melamin chống xước chống nước. Chân gỗ sồi tự nhiên.
							<br />- Công năng: Bàn trà cafe tại nhà tại văn phòng, bàn.
						</p>
					</div>
				</div>
			</div>
			{/* Sản phẩm bạn vừa xem */}
			<div className='product-new my-5 container '>
				<div className='spvx row'>
					<div className='hr col'>
						<hr />
					</div>
					<h2 className='fw-bold text-center col'>SẢN PHẨM BẠN VỪA XEM</h2>
					<div className='hr col'>
						<hr />
					</div>
				</div>
				<div className='product-page-favorites-wrap slick-initialized slick-slider my-5'>
					<Slide />
				</div>
			</div>
			{/* Sản phẩm liên quan  */}
			<div className='product-new my-5 container '>
				<div className='spvx row'>
					<div className='hr col'>
						<hr />
					</div>
					<h2 className='fw-bold text-center col'>SẢN PHẨM LIÊN QUAN</h2>
					<div className='hr col'>
						<hr />
					</div>
				</div>
				<div className='product-page-favorites-wrap slick-initialized slick-slider my-5'>
					<Slide />
				</div>
			</div>
			<hr />
		</div>
	);
};

export default ProductDetail;
