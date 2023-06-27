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

// Đăng nhập
export const login = async (email: string, password: string) => {
	try {
		const respose = await newRequest.post('auth/login', { email, password });
		return respose.data;
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};
