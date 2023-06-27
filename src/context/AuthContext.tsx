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
	const [isLogined, setIsLogined] = useState<boolean>(false);

	return <AuthContext.Provider value={{ isLogined, setIsLogined }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
