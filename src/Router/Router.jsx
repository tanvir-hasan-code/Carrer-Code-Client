import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import Details from "../Pages/JobDetails/Details";
import PrivateRoute from "../Route/PrivateRoute";
import JobApply from "../Pages/Home/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplication from "../Pages/ViewApplication/ViewApplication";

const router = createBrowserRouter([
	{
		path: '/',
		Component: RootLayout,
		hydrateFallbackElement:<span className="loading loading-spinner text-neutral"></span>,
		children: [
			{
				index: true,
				Component: Home
			}, 
			{
				path: '/register',
				Component: Register
			},
			{
				path: '/signin',
				Component: SignIn
			},
			{
				path: '/jobs/:id',
				loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`),
				Component: Details
			},
			{
				path: '/jobApply/:id',
				element: <PrivateRoute><JobApply/></PrivateRoute>
			},
			{
				path: '/myApplications',
				element: <PrivateRoute><MyApplications/></PrivateRoute>
			},
			{
				path: '/addJob',
				element: <PrivateRoute><AddJob/></PrivateRoute>
			},
			{
				path: "/myPostedJobs",
				element: <PrivateRoute><MyPostedJobs/></PrivateRoute>
			},
			{
				path: '/applications/job/:job_id',
				loader: ({params})=>fetch(`http://localhost:5000/applications/job/${params.job_id}`),
				element: <PrivateRoute><ViewApplication/></PrivateRoute>
			}
		]
	},
])

export default router;