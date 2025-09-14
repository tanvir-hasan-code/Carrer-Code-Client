import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
	
	const { user, loading } = use(AuthContext);
	const location = useLocation();

	if (loading) {
		return <div className='flex justify-center items-center min-h-screen'><span className='loader'></span></div>
	}
	
	
	if (!user) {
		return <Navigate to={'/signin'} state={{ from: location }} replace ></Navigate>;
	}


	return children;
};

export default PrivateRoute;