import React, { Suspense } from "react";
import Banner from "./Banner/Banner";
import HotJobs from "./Jobs/HotJobs";

const Home = () => {
  const jobCollection = fetch("http://localhost:5000/jobs").then((res) =>
    res.json()
  );

  return (
    <div>
      <Banner />
      <Suspense fallback={<div className="min-h-screen flex justify-center items-center"><span className="loader"></span></div>}>
        <HotJobs jobCollection={jobCollection}/>
      </Suspense>
    </div>
  );
};

export default Home;
