/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ProductAdd {
	name_prod: string;
	id_categories: number;
	brand_prod: number;
	detail_prod: string;
	price_prod: number;
	material_prod: number;
	style_prod: number;
	quantity: number;
	show_prod: number;
	img_thumbnail: any;
	list_img: any;
	files: any;
}

export interface Images {
	files: any;
	originFileObj: Blob;
	uid: string;
	name: string;
	status: string;
	url: string;
	thumbUrl: string;
}

export interface FormDataFields {
	append(arg0: string, arg1: string): unknown;
	name_prod: string;
	id_categories: string;
	brand_prod: string;
	style_prod: string;
	price_prod: string;
	detail_prod: string;
	quantity: string;
	img_thumbnail: Blob;
	list_img: Blob[];
}

export type Product = {
	id_product: number;
	name_prod: string;
	categories: {
		id_categories: number;
	};
};

export type Products = Product[];

export type ProductsAd = {
	id_product: number;
	name_prod: string;
	price_prod: number;
	categories: {
		id_categories: number;
		name_categories: string;
	} | null;
	quantity: number;
	action_history: [
		{
			users: {
				id_user: number;
				first_name: string;
				last_name: string;
				role: {
					name_role: string;
				};
			};
		}
	];
	createdAt: string;
};

export type ProductsAds = ProductsAd[];

// Kiểu dư liệu của sản phẩm chi tiết
export type ProductDetail = {
	id_product: number;
	name_prod: string;
	price_prod: string | number;
	img_thumbnail: string;
	public_id: string;
	createdAt: string;
	updatedAt: string | null;
	quantity: number;
	show_prod: number;
	categories: {
		id_categories: number;
		name_categories: string;
		parent: {
			id_categories: number;
			name_categories: string;
		};
	};
	brands: {
		id_brand: number;
		name_brand: string;
	};
	img_prod: [
		{
			id_images: number;
			public_id: string;
			url: string;
		}
	];
	detail_prod: {
		detail_prod: string;
	};
};
