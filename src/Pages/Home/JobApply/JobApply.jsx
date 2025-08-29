import React from "react";
import { useParams } from "react-router";
import UseAuth from "../../../Hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { user } = UseAuth();

  const { id } = useParams();

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const portfolio = form.portfolio.value;

    const application = {
      id,
      applicant: user.email,
      linkedin,
      github,
      portfolio,
    };

    axios
      .post("http://localhost:5000/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-4/12 mx-auto my-10 p-10 bg-base-300 rounded-2xl">
      <form onSubmit={handleApply}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Your LinkedIn Link</legend>
          <input
            name="linkedin"
            type="url"
            className="input w-full"
            placeholder="Enter Your Valid LinkedIn Link"
          />
          <legend className="fieldset-legend">Your GitHub Link</legend>
          <input
            name="github"
            type="url"
            className="input w-full"
            placeholder="Enter Your Valid GitHub Link"
          />
          <legend className="fieldset-legend">Enter Your Portfolio Link</legend>
          <input
            name="portfolio"
            type="url"
            className="input w-full"
            placeholder="Enter Your Valid Portfolio Link"
          />
        </fieldset>
        <input
          className="btn w-full btn-neutral mt-5"
          type="submit"
          value="Apply"
        />
      </form>
    </div>
  );
};

export default JobApply;
