import { useReducer, createContext } from 'react';

const authReducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				currentUser: action.payload,
				authState: true,
			};
		default:
			return {
				...state,
			};
	}
};

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		currentUser: null,
		authReady: false,
	});

	
	return (
		<AuthContext.Provider
			value={{
				...state,
				dispatch,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};