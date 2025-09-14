import axios from "axios";
import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplication = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();

  const handleStatusChange = (e, id) => {
    axios
      .patch(`https://career-code-server-lilac.vercel.app/applications/${id}`, {
        status: e.target.value,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Status Has Been Updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1 className="text-3xl"> Application ID: {job_id}</h1>
      <h3 className="text-2xl">
        {applications.length} People Applied Your Job
      </h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {applications.map((application, index) => (
              <tr key={application._id}>
                <th>{index + 1}</th>
                <td>{application.applicant}</td>
                <td>
                  <a href={application.portfolio} target="blank">
                    {application.portfolio}
                  </a>
                </td>
                <td>
                  <select
                    onChange={(e) => handleStatusChange(e, application._id)}
                    defaultValue={application.status}
                    className="select"
                  >
                    <option disabled={true}>Update Status</option>
                    <option>Pending</option>
                    <option>Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
