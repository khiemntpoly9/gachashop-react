import newRequest from '~/utils/newRequest';

// Check đăng nhập, role
export const checkIsLogin = async () => {
	try {
		const respose = await newRequest.get('auth/check');
		return respose.data;
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};
