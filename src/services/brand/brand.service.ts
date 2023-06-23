import newRequest from '~/utils/newRequest';

// Lấy danh sách thương hiệu
export const getListBrands = async () => {
	try {
		const respose = await newRequest.get('brand');
		return respose.data;
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};

// Tạo thương hiệu
export const createBrandService = async (name: string) => {
	try {
		const respose = await newRequest.post('brand', { name_brand: name });
		return respose.data;
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};

// Xoá thương hiệu
export const deleteBrandService = async (id: number) => {
	try {
		const respose = await newRequest.delete(`brand?id=${id}`);
		return respose.data;
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};
