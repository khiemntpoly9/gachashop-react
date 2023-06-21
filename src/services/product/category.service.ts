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

// Lấy tất cả danh mục cha
export const getAllParentCategories = async () => {
	try {
		const respose = await newRequest.get('categories/parent');
		return respose.data;
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};

// Lấy tất cả danh mục con
export const getAllChildCategories = async () => {
	try {
		const respose = await newRequest.get('categories/children');
		return respose.data;
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};

// Xoá danh mục
export const deleteCategory = async (id: number) => {
	try {
		const respose = await newRequest.delete(`categories?id=${id}`);
		return respose.data;
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};
