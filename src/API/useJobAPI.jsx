import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const useJobAPI = () => {

	const axiosSecure = useAxiosSecure();

	const jobCreatedByPromise = (email) => {
		return axiosSecure.get(`/jobs/applications?email=${email}`).then(res =>res.data)
	}


	return {
		jobCreatedByPromise
	};
};

export default useJobAPI;