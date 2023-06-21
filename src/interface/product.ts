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
	user: [
		{
			id_user: number;
			first_name: string;
			last_name: string;
			role: {
				name_role: string;
			};
		}
	];
	createdAt: string;
};

export type ProductsAds = ProductsAd[];
