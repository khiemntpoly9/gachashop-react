import { deleteBrandService } from '~/services/brand/brand.service';

const ActionBrand = ({ brandId, nameBrand, onIncreaseNumber }) => {
	const brandid: string = brandId;
	const submitDelete = async () => {
		await deleteBrandService(brandId);
		onIncreaseNumber();
	};
	return (
		<div className='d-flex'>
			<div>
				<button className='btn'>
					<i className='fa-solid fa-eye'></i>
				</button>
			</div>
			<div>
				<button className='btn'>
					<i className='fa-solid fa-pen'></i>
				</button>
			</div>
			{/* Xoá */}
			<div>
				<button className='btn' data-bs-toggle='modal' data-bs-target={`#${brandid}`}>
					<i className='fa-solid fa-trash'></i>
				</button>
			</div>
			{/* <!-- Modal --> */}
			<div
				className='modal fade'
				id={brandid}
				tabIndex={-1}
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h1 className='modal-title fs-5' id='exampleModalLabel'>
								Xoá thương hiệu
							</h1>
							<button
								type='button'
								className='btn-close shadow-none'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<div className='modal-body'>
							<span>Xác nhận xoá thương hiệu {nameBrand}?</span>
						</div>
						<div className='modal-footer'>
							<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
								Huỷ
							</button>
							<button type='button' className='btn btn-danger' data-bs-dismiss='modal' onClick={submitDelete}>
								Xoá
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ActionBrand;
