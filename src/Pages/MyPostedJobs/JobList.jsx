import React, { use } from "react";
import { Link } from "react-router";

const JobList = ({ jobCreatedByPromise }) => {
  const jobs = use(jobCreatedByPromise);
  return (
    <div>
      <h2 className="text-2xl"> My Posted Job Is: {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Job</th>
              <th>Count</th>
              <th>View Applications</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {jobs.map((job, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.application_count} </td>
                <td>
                  <Link to={`/applications/job/${job._id}`}>
                    View Application
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
