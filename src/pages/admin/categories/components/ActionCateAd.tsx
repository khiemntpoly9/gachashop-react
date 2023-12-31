import { deleteCategory } from '~/services/product/category.service';

const ActionCateAd = ({ cateId, nameCate, onIncreaseNumber }) => {
	const modalId = `deleteModal-${cateId}`;
	const submitDelete = async () => {
		await deleteCategory(cateId, nameCate);
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
				<button className='btn' data-bs-toggle='modal' data-bs-target={`#${modalId}`}>
					<i className='fa-solid fa-trash'></i>
				</button>
			</div>
			{/* <!-- Modal --> */}
			<div
				className='modal fade'
				id={modalId}
				tabIndex={-1}
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h1 className='modal-title fs-5' id='exampleModalLabel'>
								Xoá danh mục
							</h1>
							<button
								type='button'
								className='btn-close shadow-none'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<div className='modal-body'>
							<span>Xác nhận xoá danh mục {nameCate}?</span>
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

export default ActionCateAd;
