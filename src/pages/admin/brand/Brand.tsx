import { useEffect, useState } from 'react';
import { BrandsType } from '~/interface/brand.type';
import { createBrandService, getListBrands } from '~/services/brand/brand.service';
import ActionBrand from '@admin/brand/components/ActionBrand';

const Brand = () => {
	const [brand, setBrand] = useState<BrandsType>([]);
	const [nameBrand, setNameBrand] = useState<string>('');
	const [count, setCount] = useState<number>(0);
	// Lấy dư liệu từ API Brand
	useEffect(() => {
		const fetchBrand = async () => {
			const data = await getListBrands();
			setBrand(data);
		};
		fetchBrand();
	}, [count]);

	// Thêm thương hiệu
	const createBrand = async () => {
		await createBrandService(nameBrand);
		handleIncreaseNumber();
	};

	// Tăng lên 1, mỗi khi có tương tác với dữ liệu
	const handleIncreaseNumber = () => {
		setCount(count + 1);
	};
	return (
		<div>
			<h4>Danh sách thương thiệu</h4>
			<button className='btn btn-success mb-2' data-bs-toggle='modal' data-bs-target='#addBrandModal'>
				Thêm thương hiệu
			</button>
			{/* table */}
			<div className='border rounded-2 p-3'>
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>
								<input type='checkbox' />
							</th>
							<th scope='col'>ID</th>
							<th scope='col'>Tên Thương hiệu</th>
							<th scope='col'>Công cụ</th>
						</tr>
					</thead>
					<tbody>
						{brand?.length > 0 ? (
							brand?.map((brand) => (
								<tr key={brand.id_brand}>
									<th scope='row'>
										<input type='checkbox' />
									</th>
									<td>{brand.id_brand}</td>
									<td>{brand.name_brand}</td>
									<td>
										<ActionBrand
											brandId={brand.id_brand}
											nameBrand={brand.name_brand}
											onIncreaseNumber={handleIncreaseNumber}
										/>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td className='text-center' colSpan={5}>
									Không có dữ liệu.
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
			{/* end table */}
			{/* Model thêm danh mục */}
			<div
				className='modal fade'
				id='addBrandModal'
				tabIndex={-1}
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h1 className='modal-title fs-5' id='exampleModalLabel'>
								Thêm thương hiệu
							</h1>
							<button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
						</div>
						<div className='modal-body'>
							<div className='mb-3'>
								<label htmlFor='exampleFormControlInput1' className='form-label'>
									Tên thương hiệu
								</label>
								<input
									type='text'
									className='form-control shadow-none'
									onChange={(e) => {
										setNameBrand(e.target.value);
									}}
								/>
							</div>
						</div>
						<div className='modal-footer'>
							<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
								Huỷ
							</button>
							<button type='button' className='btn btn-success' onClick={createBrand}>
								Thêm
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Brand;
