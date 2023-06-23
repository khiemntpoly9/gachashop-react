import newRequest from '@utils/newRequest';

// Lấy danh sách tài khoản
export const getListUsers = async () => {
	try {
		const respose = await newRequest.get('user/list');
		return respose.data;
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};
