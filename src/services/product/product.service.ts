/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-catch */
// import { ProductAdd } from 'src/interface/product.interface';
import newRequest from '@utils/newRequest';
// import { useQuery } from '@tanstack/react-query';

// Lấy sản phẩm
export const getProducts = async () => {
	try {
		const respose = await newRequest.get('products');
		return respose.data;
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};

// Thêm sản phẩm
export const addProduct = async (product: any) => {
	try {
		const respose = await newRequest.post('product', product);
		return respose.data;
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};

// Danh sách sản phẩm (admin)
export const listProductsAd = async (page: number, limit: number) => {
	try {
		const respose = await newRequest.get(`products-admin?page=${page}&limit=${limit}`);
		return respose.data;
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};

// Xoá sản phẩm (admin)
export const deleteProduct = async (id: number, nameProd: string) => {
	try {
		const respose = await newRequest.delete(`product?id=${id}&name=${nameProd}`);
		return respose.data;
	} catch (error) {
		console.error('Error fetching:', error);
		throw error;
	}
};

// Lấy sản phẩm chi tiết
export const getProductDetail = async (id: number) => {
	try {
		const respose = await newRequest.get(`product?id=${id}`);
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
