/* eslint-disable @typescript-eslint/no-explicit-any */
export type Category = {
	id_categories: number;
	name_categories: number;
	parent_id: number | null;
	children: Category[];
};

export type Categories = Category[];

export type CategoryA = {
	title: string | number;
	value: string | number;
	children: CategoryA[] | [];
};
