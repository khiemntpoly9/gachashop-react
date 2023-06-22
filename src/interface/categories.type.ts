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
};

export type Categories = Category[];

export type CategoryA = {
	title: string | number;
	value: string | number;
	children: CategoryA[] | [];
};
