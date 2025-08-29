import React from "react";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    company_logo,
    hr_name,
    requirements,
    applicationDeadline,
    location,
	  title,
	  description,
	salaryRange
  } = job;

  return (
    <div className="card bg-base-100 p-5  shadow-sm">
      <div className="flex gap-3 items-center mx-auto">
        <img
          className="w-20"
          src={company_logo}
          alt="Company-Logo"
        />
			  <div>
				  <h1>{hr_name}</h1>
				  <p className="flex items-center gap-2"><IoLocation/> {location}</p>
		</div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
			  </h2>
			  <h5>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</h5>
        <p>
          {description}
			  </p>
			  <p>Deadline: {applicationDeadline}</p>
        <div className="card-actions">
				  {
					requirements.map((req, i) => <div key={i} className="badge badge-outline">{req}</div>)
				  }
        </div>
      </div>
				  <Link className="btn btn-info" to={`/jobs/${_id}`}>See Details</Link>
    </div>
  );
};

export default JobCard;
