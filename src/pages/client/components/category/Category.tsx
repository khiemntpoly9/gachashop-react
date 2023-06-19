/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

const Category = (Cate: any) => {
	const [show, setShow] = useState(false);
	return (
		<>
			<li className='nav-item list-unstyled my-2 '>
				<div className='row'>
					<a
						className='nav-link col-10'
						href='#'
						// data-bs-toggle='collapse'
						// data-bs-target='#contentId'
						// aria-expanded='false'
						// aria-controls='contentId'
					>
						{Cate.Cate.name_categories}
					</a>

					<i
						onClick={() => setShow(!show)}
						className='fa-solid fa-caret-down icon2 col-2'
						// data-bs-toggle='collapse'
						// data-bs-target={`#${Cate.Cate.name_category}`}
						// aria-expanded='false'
						// aria-controls={Cate.Cate.name_category}
					></i>
				</div>
				{show && (
					<div className=''>
						<ul>
							{Cate.Cate.children.map((childCat) => {
								return (
									<li className='nav-item2 list-unstyled my-2' key={childCat.id_categories}>
										<a href='#' className='nav-link'>
											{childCat.name_categories}
										</a>
									</li>
								);
							})}
							{/* <li className='nav-item2 list-unstyled my-2'>
                    <a href='#' className='nav-link'>
                        {Cate.Cate.name_category}
                    </a>
                </li>
                <li className='nav-item2 list-unstyled my-2'>
                    <a href='#' className='nav-link'>
                        Phòng ăn
                    </a>
                </li>
                <li className='nav-item2 list-unstyled my-2'>
                    <a href='#' className='nav-link'>
                        Phòng ngủ
                    </a>
                </li>
                <li className='nav-item2 list-unstyled my-2'>
                    <a href='#' className='nav-link'>
                        Phòng làm việc
                    </a>
                </li>
                <li className='nav-item2 list-unstyled my-2'>
                    <a href='#' className='nav-link'>
                        Phòng cho bé
                    </a>
                </li>
                <li className='nav-item2 list-unstyled my-2'>
                    <a href='#' className='nav-link'>
                        Nội thất thông minh
                    </a>
                </li> */}
						</ul>
					</div>
				)}
			</li>
		</>
	);
};

export default Category;
