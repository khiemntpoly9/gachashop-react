import React from 'react';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { checkIsLogin } from '~/services/auth/auth.service';

type ProtectedProps = {
	role: string[];
	children: React.ReactNode;
};

const Protected: React.FC<ProtectedProps> = ({ role, children }) => {
	const [roleIs, setRoleIs] = useState<string>('');
	const [isLogin, setIsLogin] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	useEffect(() => {
		// Call api to check role
		const check = async () => {
			const data = await checkIsLogin();
			setIsLogin(data.isLogin);
			setRoleIs(data.role);
			setIsLoading(false);
		};
		check();
	}, []);
	if (isLoading) return <div>Loading....</div>;
	if (!isLogin) {
		return <Navigate to='/admin/login' />;
	}
	if (role.includes(roleIs)) {
		return <>{children}</>;
	} else {
		return <Navigate to='/unauthorized' />;
	}
};

export default Protected;
