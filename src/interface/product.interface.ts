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
	img_thumbnail: Images[];
	list_img: Images[];
}

interface Images {
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
