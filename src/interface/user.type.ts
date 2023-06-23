type User = {
	id_user: number;
	first_name: string;
	last_name: string;
	email: string;
	phone: string | number;
	verify: number;
};

export type UsersType = User[];
