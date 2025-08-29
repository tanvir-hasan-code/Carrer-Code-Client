
import React from "react";
import { IoLocation } from "react-icons/io5";
import { Link, useLoaderData } from "react-router";

const Details = () => {
  const jobData = useLoaderData();
  const {
    _id,
    company_logo,
    hr_name,
    requirements,
    applicationDeadline,
    location,
    title,
    description,
    salaryRange,
  } = jobData;

  return (
	  <div className="min-h-screen flex items-center justify-center ">
		  <div className="card bg-gray-300 p-5 w-10/12 mx-auto my-5 shadow-sm">
      <div className="flex gap-3 items-center mx-auto">
        <img className="w-28" src={company_logo} alt="Company-Logo" />
        <div>
          <h1>{hr_name}</h1>
          <p className="flex items-center gap-2">
            <IoLocation /> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <h5>
          Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </h5>
        <p>{description}</p>
        <p>Deadline: {applicationDeadline}</p>
        <div className="card-actions">
          {requirements.map((req, i) => (
            <div key={i} className="badge badge-outline">
              {req}
            </div>
          ))}
        </div>
      </div>
      <Link className="btn btn-info" to={`/jobApply/${_id}`}>
        Apply Now
      </Link>
    </div>
	</div>
  );
};

export default Details;
