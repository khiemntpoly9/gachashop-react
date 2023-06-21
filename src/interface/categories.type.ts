/* eslint-disable @typescript-eslint/no-explicit-any */
export type Category = {
	id_categories: number;
	name_categories: string;
	parent_id: number | null;
	children: Category[];
	createdAt: string;
	parent: {
		name_categories: string;
	};
};

export type Categories = Category[];

export type CategoryA = {
	title: string | number;
	value: string | number;
	children: CategoryA[] | [];
};
