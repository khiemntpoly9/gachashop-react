import { ReactNode, createContext, useState } from 'react';

interface AuthContextProps {
	isLogined: boolean;
	setIsLogined: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AuthProviderProps {
	children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const logLogin = localStorage.getItem('isLogin');
	const [isLogined, setIsLogined] = useState<boolean>(Boolean(logLogin));
	return <AuthContext.Provider value={{ isLogined, setIsLogined }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
