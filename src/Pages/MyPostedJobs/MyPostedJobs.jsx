import React, { Suspense, use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import JobList from './Joblist';
import useJobAPI from '../../API/useJobAPI';


const MyPostedJobs = () => {

	const { user } = use(AuthContext);
	const { jobCreatedByPromise } = useJobAPI();


	return (
		<div>
			<h1>Hello This Is My Posted Jobs</h1>

			<Suspense fallback={<span>Loading.............</span>} >
			<JobList jobCreatedByPromise={jobCreatedByPromise(user.email)}></JobList>
			</Suspense>

		</div>
	);
};

export default MyPostedJobs;