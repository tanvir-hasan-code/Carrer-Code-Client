import React, { Suspense } from 'react';
import MyApplicationStats from './MyApplicationStats';
import ApplicationList from './ApplicationList';
import UseAuth from '../../Hooks/UseAuth';
import useApplicationAPI from '../../API/useApplicationAPI';


const MyApplications = () => {


	const { user } = UseAuth();
	const { myApplicationPromise } = useApplicationAPI(); 



	return (
		<div>
			<MyApplicationStats/>
			<Suspense fallback={'Loading.....'}>
				<ApplicationList myApplicationPromise={ myApplicationPromise(user.email)} />
			</Suspense>
		</div>
	);
};

export default MyApplications;