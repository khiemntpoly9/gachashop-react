import newRequest from '../../utils/newRequest';

// Lấy danh mục sản phẩm
export const getCategories = async () => {
	try {
		const respose = await newRequest.get('categories');
		return respose.data;
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};
