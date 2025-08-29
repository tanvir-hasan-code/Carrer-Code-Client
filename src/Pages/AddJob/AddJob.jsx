import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = use(AuthContext);

  const handleAddJob = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Process salary Data

    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };

    // Process Requirements Data

    const requirementsString = newJob.requirements;
    const requirementsDarty = requirementsString.split(",");
    const requirementsClean = requirementsDarty.map((req) => req.trim());
    newJob.requirements = requirementsClean;

    // Process Responsibilities in Shorthand Data

    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((req) => req.trim());

    newJob.status = "active";

    // Post On Database

    axios
      .post("http://localhost:5000/jobs", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Job Has Been Published",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-11/12 mx-auto mb-10">
      <h1 className="font-bold text-4xl text-center my-4">Please Add a Job</h1>
      <form onSubmit={handleAddJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="Job Title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input"
            placeholder="Company name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="Company Location"
          />

          <label className="label">Company logo</label>
          <input
            type="url"
            name="company_logo"
            className="input"
            placeholder="Logo URL"
          />
        </fieldset>

        {/* Job Type*/}
        <fieldset className="fieldset bg-base-200 border-base-300  rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Type</legend>
          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Remote"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Hybrid"
              aria-label="Hybrid"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Part-Time"
              aria-label="Part-Time"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Full-Time"
              aria-label="Full-Time"
            />
          </div>
        </fieldset>
        {/* Job Category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Category</legend>
          <select
            defaultValue="Job Category"
            name="category"
            className="select"
          >
            <option disabled={true}>Chose a Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>
        {/* Application Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>

          <input
            type="datetime-local"
            name="applicationDeadline"
            className="input"
          />
        </fieldset>
        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3">
            <div>
              <label className="label">Minimum Salary</label>
              <input
                type="number"
                name="min"
                className="input"
                placeholder="Minimum Salary"
              />
            </div>

            <div>
              <label className="label">Maximum Salary</label>
              <input
                type="number"
                className="input"
                name="max"
                placeholder="Maximum Salary"
              />
            </div>

            <div>
              <label className="label">Currency</label>
              <select
                defaultValue="Currency"
                name="currency"
                className="select"
              >
                <option disabled={true}>Chose a Currency</option>
                <option value="USD">USD</option>
                <option value="EURO">EURO</option>
                <option value="BDT">BDT</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Job Description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Description</legend>

          <textarea
            className="textarea textarea-ghost"
            name="description"
            placeholder="Type Here"
          ></textarea>
        </fieldset>

        {/* Job Requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>

          <textarea
            className="textarea textarea-ghost"
            name="requirements"
            placeholder="Job Requirements (Separate By Comma)"
          ></textarea>
        </fieldset>

        {/* Job Requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Responsibilities</legend>

          <textarea
            className="textarea textarea-ghost"
            name="responsibilities"
            placeholder="Job Responsibilities (Separate By Comma)"
          ></textarea>
        </fieldset>

        {/*  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">HR Info</legend>

          <label className="label">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input"
            defaultValue={""}
            placeholder="HR Name"
          />

          <label className="label">HR Email</label>
          <input
            type="text"
            name="hr_email"
            className="input"
            defaultValue={user.email}
            placeholder="HR Email"
          />
        </fieldset>

        <input
          type="submit"
          className="btn btn-primary w-xs flex mx-auto mt-4"
          value="Add Job"
        />
      </form>
    </div>
  );
};

export default AddJob;
