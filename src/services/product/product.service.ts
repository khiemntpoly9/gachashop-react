/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-catch */
// import { ProductAdd } from 'src/interface/product.interface';
import newRequest from '../../utils/newRequest';
// import { useQuery } from '@tanstack/react-query';

// Lấy sản phẩm
export const getProducts = async () => {
	try {
		const respose = await newRequest.get('products');
		console.log(respose.data);
		return respose.data;
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};

// Thêm sản phẩm
export const addProduct = async (product: any) => {
	try {
		console.log(product);
		const respose = await newRequest.post('product', product);
		return respose.data;
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};

// Sử dụng user query
// export const useProducts = () => {
// 	return useQuery(['products'], getProducts);
// };
