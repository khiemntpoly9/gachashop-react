import { deleteProduct } from '@services/product/product.service';
import { useNavigate } from 'react-router-dom';

const AcitonAdmin = ({ productId, nameProduct }) => {
	const navigate = useNavigate();
	const modalId = `deleteModal-${productId}`;
	const submitDelete = async () => {
		await deleteProduct(productId, nameProduct);
	};
	return (
		<div className='d-flex'>
			<div>
				<button className='btn'>
					<i className='fa-solid fa-eye'></i>
				</button>
			</div>
			<div>
				<button onClick={() => navigate(`/admin/product/edit?id=${productId}`)} className='btn'>
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
								Xoá sản phẩm
							</h1>
							<button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
						</div>
						<div className='modal-body'>
							<span>Xác nhận xoá sản phẩm {nameProduct}?</span>
						</div>
						<div className='modal-footer'>
							<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
								Huỷ
							</button>
							<button type='button' className='btn btn-danger' onClick={submitDelete}>
								Xoá
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AcitonAdmin;
