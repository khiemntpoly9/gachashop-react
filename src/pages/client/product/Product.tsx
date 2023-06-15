import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Category from '../components/category/Category';
import newRequest from '../../../utils/newRequest';
import ProductCard from '../components/product-card/ProductCard';
import Slide from '../components/slide/Slide';
import './Product.scss';

const Product = () => {
	const [productData, setProducts] = useState([]);
	useEffect(() => {
		newRequest
			.get('/products')
			.then((res) => {
				setProducts(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	// Lọc sản phẩm
	const [under100, setUnder100] = useState(false);
	const [between100And200, setBetween100And200] = useState(false);

	// Lấy data sản phẩm lọc theo giá
	useEffect(() => {
		let url = '';
		if (under100) {
			url += '/products-price?min=0&max=10000';
		} else if (between100And200) {
			url += '/products-price?min=11000&max=1000000';
		}
		if (!under100 && !between100And200) {
			url = '/products';
		}
		newRequest
			.get(url)
			.then((response) => {
				setProducts(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [under100, between100And200]);
	// Kiểm tra checkbox lọc
	const handleCheckboxChange = (event) => {
		const { name, checked } = event.target;
		if (name === 'under100') {
			setUnder100(checked);
			setBetween100And200(false);
		} else {
			setBetween100And200(checked);
			setUnder100(false);
		}
	};
	// Lấy category
	const {
		isLoading,
		error,
		data: dataCate,
	} = useQuery({
		queryKey: ['Categorys'],
		queryFn: () =>
			newRequest.get('/categories/all').then((res) => {
				return res.data;
			}),
	});
	console.log(dataCate);
	if (isLoading) return 'Loading...';
	if (error) return 'An error has occurred: ' + error.message;
	return (
		<div className='container'>
			<div className='row'>
				<section className='main_container collection col-md-12 col-lg-12 margin-bottom-5 order-lg-first order-md-first order-sm-last order-last'>
					<div className='product-gray product_recent product-page-favorites'>
						<nav aria-label='breadcrumb'>
							<ol className='breadcrumb'>
								<li className='breadcrumb-item'>
									<a href='#' className='text-reset'>
										Trang chủ
									</a>
								</li>
								<li className='breadcrumb-item active' aria-current='page'>
									Tất cả sản phẩm
								</li>
							</ol>
						</nav>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='related-product'>
									<div
										className='product--home home-title lazy p-2 text-center fw-bold fs-5 '
										data-src='//bizweb.dktcdn.net/100/396/362/themes/777022/assets/bestsell.jpg?1678155521674'
										data-was-processed='true'
									>
										Top sản phẩm bán chạy
									</div>
									<div className='product-page-favorites-wrap slick-initialized slick-slider '>
										<Slide />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='row my-5'>
						<aside className='sidebar-client col-lg-3 col-md-12 col-sm-12 col-12 left-content'>
							<div className='aside-category card d-lg-block d-none margin-bottom-20'>
								<div className='aside-title text-center card-header text-uppercase fs-6 fw-bold'>
									Danh mục sản phẩm
								</div>
								<div className='aside-content'>
									<ul className='navbar-pills my-2 '>
										{dataCate.map((Cate) => (
											<Category key={Cate.id_categories} Cate={Cate} />
										))}
									</ul>
								</div>
							</div>
							<div className='aside-filter card clearfix my-4'>
								<div className='heading text-center card-header text-uppercase fs-6 fw-bold '>
									Lọc Sản phẩm
								</div>
								<div className='aside-hidden-mobile'>
									<div className='fillter-container'>
										<div className='fillter-containers '></div>
										<aside className='aside-item nav-item4 my-3 '>
											<div className='row'>
												<a
													className='nav-link col-10 fw-bold'
													href='#'
													data-bs-toggle='collapse'
													data-bs-target='#contentId11'
													aria-expanded='false'
													aria-controls='contentId11'
												>
													Thương hiệu
												</a>

												<i
													className='fa-solid fa-caret-down icon3 col-2'
													data-bs-toggle='collapse'
													data-bs-target='#contentId11'
													aria-expanded='false'
													aria-controls='contentId11'
												></i>
											</div>
											<div className='collapse' id='contentId11'>
												<div className='form-check my-3 '>
													<input className='form-check-input' type='checkbox' value='IBIE' id='IBIE' />
													<label className='form-check-label' htmlFor='IBIE'>
														IBIE
													</label>
												</div>
											</div>
										</aside>
										<hr />
										<aside className='aside-item nav-item4 my-3'>
											<div className='row'>
												<a
													className='nav-link col-10 fw-bold'
													href='#'
													data-bs-toggle='collapse'
													data-bs-target='#contentId12'
													aria-expanded='false'
													aria-controls='contentId12'
													// selectPrice={handelPrice}
												>
													Giá sản phẩm
												</a>

												<i
													className='fa-solid fa-caret-down icon3 col-2'
													data-bs-toggle='collapse'
													data-bs-target='#contentId12'
													aria-expanded='false'
													aria-controls='contentId12'
												></i>
											</div>
											<div className='collapse ' id='contentId12'>
												<div className='my-3'>
													<div className='form-check my-2 '>
														<input
															className='form-check-input'
															type='checkbox'
															name='under100'
															checked={under100}
															// value={selectPrice}
															id='Giá dưới 100.000đ'
															onChange={handleCheckboxChange}
															// onClick={() => filterResult()}
														/>
														<label className='form-check-label' htmlFor='Giá dưới 100.000đ'>
															Giá dưới 100.000đ
														</label>
													</div>
													<div className='form-check my-2 '>
														<input
															className='form-check-input'
															type='checkbox'
															value='100.000đ - 200.000đ'
															id='100.000đ - 200.000đ'
															name='between100And200'
															checked={between100And200}
															onChange={handleCheckboxChange}
															// onClick={() => filterResult()}
														/>
														<label className='form-check-label' htmlFor='100.000đ - 200.000đ'>
															100.000đ - 200.000đ
														</label>
													</div>
													<div className='form-check my-2 '>
														<input
															className='form-check-input'
															type='checkbox'
															value='200.000đ - 300.000đ'
															id='200.000đ - 300.000đ'
														/>
														<label className='form-check-label' htmlFor='200.000đ - 300.000đ'>
															200.000đ - 300.000đ
														</label>
													</div>
													<div className='form-check my-2 '>
														<input
															className='form-check-input'
															type='checkbox'
															value='300.000đ - 500.000đ'
															id='300.000đ - 500.000đ'
														/>
														<label className='form-check-label' htmlFor='200.000đ - 300.000đ'>
															{' '}
															300.000đ - 500.000đ
														</label>
													</div>
													<div className='form-check my-2 '>
														<input
															className='form-check-input'
															type='checkbox'
															value='500.000đ - 1.000.000đ'
															id='500.000đ - 1.000.000đ'
														/>
														<label className='form-check-label' htmlFor='500.000đ - 1.000.000đ'>
															500.000đ - 1.000.000đ
														</label>
													</div>
													<div className='form-check my-2 '>
														<input
															className='form-check-input'
															type='checkbox'
															value='Giá trên 1.000.000đ'
															id='Giá trên 1.000.000đ'
														/>
														<label className='form-check-label' htmlFor='Giá trên 1.000.000đ'>
															Giá trên 1.000.000đ
														</label>
													</div>
												</div>
											</div>
										</aside>
										<hr />
										<aside className='aside-item nav-item4 my-3 '>
											<div className='row'>
												<a
													className='nav-link col-10 fw-bold'
													href='#'
													data-bs-toggle='collapse'
													data-bs-target='#contentId13'
													aria-expanded='false'
													aria-controls='contentId13'
												>
													Loại sản phẩm
												</a>

												<i
													className='fa-solid fa-caret-down icon3 col-2'
													data-bs-toggle='collapse'
													data-bs-target='#contentId13'
													aria-expanded='false'
													aria-controls='contentId13'
												></i>
											</div>
											<div className='collapse' id='contentId13'>
												<div className='form-check my-3'>
													<input className='form-check-input' type='checkbox' value='Bobanan' id='Bobanan' />
													<label className='form-check-label' htmlFor='Bobanan'>
														Bộ bàn ăn
													</label>
												</div>
											</div>
										</aside>
										<hr />
										<aside className='aside-item nav-item4 my-3'>
											<div className='row'>
												<a
													className='nav-link col-10 fw-bold'
													href='#'
													data-bs-toggle='collapse'
													data-bs-target='#contentId14'
													aria-expanded='false'
													aria-controls='contentId14'
												>
													Chất liệu
												</a>

												<i
													className='fa-solid fa-caret-down icon3 col-2'
													data-bs-toggle='collapse'
													data-bs-target='#contentId14'
													aria-expanded='false'
													aria-controls='contentId14'
												></i>
											</div>
											<div className='collapse ' id='contentId14'>
												<div className='my-3'>
													<div className='form-check my-2 '>
														<input className='form-check-input' type='checkbox' value='csnt' id='csnt' />
														<label className='form-check-label' htmlFor='csnt'>
															Cao su nhân tạo
														</label>
													</div>
													<div className='form-check my-2 '>
														<input className='form-check-input' type='checkbox' value='cstn' id='cstn' />
														<label className='form-check-label' htmlFor='cstn'>
															Cao su thiên nhiên
														</label>
													</div>
													<div className='form-check my-2 '>
														<input className='form-check-input' type='checkbox' value='dcn' id='dcn' />
														<label className='form-check-label' htmlFor='dcn'>
															Da công nghiệp
														</label>
													</div>
													<div className='form-check my-2 '>
														<input className='form-check-input' type='checkbox' value='dt' id='dt' />
														<label className='form-check-label' htmlFor='dt'>
															Da thật
														</label>
													</div>
													<div className='form-check my-2 '>
														<input className='form-check-input' type='checkbox' value='f' id='fs' />
														<label className='form-check-label' htmlFor='f'>
															Foam
														</label>
													</div>
													<div className='form-check my-2 '>
														<input className='form-check-input' type='checkbox' value='vbl' id='vbl' />
														<label className='form-check-label' htmlFor='vbl'>
															Vải bố Linen
														</label>
													</div>
													<div className='form-check my-2 '>
														<input className='form-check-input' type='checkbox' value='vc' id='vc' />
														<label className='form-check-label' htmlFor='vc'>
															Vải Canvas
														</label>
													</div>
													<div className='form-check my-2 '>
														<input className='form-check-input' type='checkbox' value='vn' id='vn' />
														<label className='form-check-label' htmlFor='vn'>
															Vải nhung
														</label>
													</div>
													<div className='form-check my-2 '>
														<input className='form-check-input' type='checkbox' value='xd' id='xd' />
														<label className='form-check-label' htmlFor='xd'>
															Xơ dừa
														</label>
													</div>
												</div>
											</div>
										</aside>
										{/* <hr /> */}
										{/* <aside className='aside-item nav-item4 my-3'>
									<div className='row'>
										<a
											className='nav-link col-10 fw-bold'
											href='#'
											data-bs-toggle='collapse'
											data-bs-target='#contentId15'
											aria-expanded='false'
											aria-controls='contentId15'
										>
											Phong cách
										</a>

										<i
											className='fa-solid fa-caret-down icon3 col-2'
											data-bs-toggle='collapse'
											data-bs-target='#contentId15'
											aria-expanded='false'
											aria-controls='contentId15'
										></i>
									</div>
									<div className='collapse ' id='contentId15'>
										<div className='my-3'>
											<div className='form-check my-2 '>
												<input className='form-check-input' type='checkbox' value='pcu' id='pcu' />
												<label className='form-check-label' htmlFor='pcu'>
													Phong cách Urban
												</label>
											</div>
											<div className='form-check my-2 '>
												<input className='form-check-input' type='checkbox' value='pcac' id='pcac' />
												<label className='form-check-label' htmlFor='pcac'>
													Phong cách Art & Craft
												</label>
											</div>
											<div className='form-check my-2 '>
												<input className='form-check-input' type='checkbox' value='pcb' id='pcb' />
												<label className='form-check-label' htmlFor='pcb'>
													Phong cách Brutalism
												</label>
											</div>
											<div className='form-check my-2 '>
												<input className='form-check-input' type='checkbox' value='pccd' id='pccd' />
												<label className='form-check-label' htmlFor='pccd'>
													Phong cách cổ điển
												</label>
											</div>
											<div className='form-check my-2 '>
												<input className='form-check-input' type='checkbox' value='pccb' id='pccb' />
												<label className='form-check-label' htmlFor='pccb'>
													Phong cách Color Block
												</label>
											</div>
											<div className='form-check my-2 '>
												<input className='form-check-input' type='checkbox' value='pchd' id='pchd' />
												<label className='form-check-label' htmlFor='pchd'>
													Phong cách hiện đại
												</label>
											</div>
										</div>
									</div>
								</aside> */}
									</div>
								</div>
							</div>
						</aside>
						<section className='collection col-lg-9 col-md-12 col-sm-12 col-12'>
							<h1 className='col-title text-uppercase '>Tất cả sản phẩm</h1>
							<div className='category-products products category-products-grids clearfix my-1'>
								<div className='sort-cate clearfix d-md-block d-none'>
									<div className='sort-cate-left row'>
										<h3 className='fs-6 col-2'>Xếp theo:</h3>
										<div className='col-10'>
											<ul className='row'>
												<li className='btn-quick-sort alpha-asc list-unstyled col-2'>
													<div className='form-check '>
														<input
															className='form-check-input'
															type='radio'
															name='flexRadioDefault'
															id='flexRadioDefault1'
														/>
														<label className='form-check-label' htmlFor='flexRadioDefault1'>
															Tên A-Z
														</label>
													</div>
												</li>
												<li className='btn-quick-sort alpha-asc list-unstyled col-2'>
													<div className='form-check'>
														<input
															className='form-check-input'
															type='radio'
															name='flexRadioDefault'
															id='flexRadioDefault2'
														/>
														<label className='form-check-label' htmlFor='flexRadioDefault2'>
															Z-A
														</label>
													</div>
												</li>
												<li className='btn-quick-sort alpha-asc list-unstyled col-2'>
													<div className='form-check '>
														<input
															className='form-check-input'
															type='radio'
															name='flexRadioDefault'
															id='flexRadioDefault3'
														/>
														<label className='form-check-label' htmlFor='flexRadioDefault3'>
															Hàng mới
														</label>
													</div>
												</li>
												<li className='btn-quick-sort alpha-asc list-unstyled col-3'>
													<div className='form-check '>
														<input
															className='form-check-input'
															type='radio'
															name='flexRadioDefault'
															id='flexRadioDefault4'
														/>
														<label className='form-check-label' htmlFor='flexRadioDefault4'>
															Giá thấp đến cao
														</label>
													</div>
												</li>
												<li className='btn-quick-sort alpha-asc list-unstyled col-3'>
													<div className='form-check '>
														<input
															className='form-check-input'
															type='radio'
															name='flexRadioDefault'
															id='flexRadioDefault5'
														/>
														<label className='form-check-label' htmlFor='flexRadioDefault5'>
															Giá cao xuốn thấp
														</label>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<hr className='hr' />
							<div className='products-view  row row-cols-3 justify-content-between gap-1'>
								{productData.map((prod) => (
									<ProductCard key={prod.id_product} prod={prod} />
								))}
							</div>
							<div className='row'>
								<div className='col-lg-12 col-sm-12 col-12 margin-top-20 fix-page'>
									<nav aria-label='Page navigation example' id='pt'>
										<ul className='pagination '>
											<li className='page-item col-1'>
												<a
													className='page-link text-center text-reset  rounded-circle'
													href='#'
													aria-label='Previous'
													id='pl'
												>
													<span aria-hidden='true'>&laquo;</span>
													<span className='sr-only'>Previous</span>
												</a>
											</li>
											<li className='page-item col-1'>
												<a className='page-link text-center text-reset rounded-circle' id='pl' href='#'>
													1
												</a>
											</li>
											<li className='page-item col-1'>
												<a className='page-link text-center text-reset rounded-circle' id='pl' href='#'>
													2
												</a>
											</li>
											<li className='page-item col-1'>
												<a className='page-link text-center text-reset rounded-circle' id='pl' href='#'>
													3
												</a>
											</li>
											<li className='page-item col-1'>
												<a
													className='page-link text-center text-reset rounded-circle'
													id='pl'
													href='#'
													aria-label='Next'
												>
													<span aria-hidden='true'>&raquo;</span>
													<span className='sr-only'>Next</span>
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</section>
					</div>
				</section>
				{/* <div className='text-center evo-main-des col-12 col-lg-12 col-md-12 order-sm-first order-first order-lg-last order-md-last margin-bottom-10 margin-top-10'>
			Ant Home là sàn thương mại điện tử chuyên cung cấp các sản phẩm nội thất và trang trí nội thất cho
			thị trường Việt Nam. Chúng tôi tin rằng hạnh phúc của mỗi gia đình đều được vun đắp từ nhà, không
			gian sống tạo dựng giá trị cuộc sống. Chính vì vậy mục tiêu, sứ mệnh mà Ant Home hướng tới là đem
			đến những giải pháp tối ưu về nội thất cho nhà ở, văn phòng… Với con đường mà Ant Home đã chọn,
			chúng tôi mong muốn được cùng xây tổ ấm với triệu gia đình Việt đồng thời cùng chung tay kiến tạo
			không gian làm việc chuyên nghiệp với các doanh nghiệp tại Việt Nam.
		</div> */}
			</div>
			<hr />
		</div>
	);
};

export default Product;
