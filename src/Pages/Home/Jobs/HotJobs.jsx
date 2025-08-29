import React, { use } from 'react';
import JobCard from './JobCard';


const HotJobs = ({ jobCollection }) => {
	
	const jobs = use(jobCollection);

	return (
		<div className='w-11/12 mx-auto'>
			<h1 className='text-3xl font-bold text-center my-5'>Hot Jobs</h1>
			<div className='grid grid-cols-4 gap-5 my-5'>
				{
					jobs.map(job => <JobCard key={job._id} job={job} />)
				}
			</div>
		</div>
	);
};

export default HotJobs;