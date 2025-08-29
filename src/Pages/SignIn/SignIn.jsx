import Lottie from "lottie-react";
import React, { use } from "react";
import loginLottie from '../../assets/LottieFiles/login.json'
import { AuthContext } from "../../Context/AuthContext";
import GoogleSignIn from "../Shared/GoogleSignIn";
import { useLocation, useNavigate } from "react-router";

const SignIn = () => {
  const { signInUser } = use(AuthContext);
  const location = useLocation();
  const from = location.state || '/';
  const navigate = useNavigate();



	const handleSignIn = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		signInUser(email, password)
			.then(result => {
        console.log(result)
        navigate(from)
			}).catch(error => {
				console.log(error)
			})
		
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <Lottie
          className="w-96"
          animationData={loginLottie}
          loop={true}
        ></Lottie>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign In now!</h1>
            <form onSubmit={handleSignIn} className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <button className="btn btn-neutral mt-4">Sign In</button>
            </form>
            <GoogleSignIn from={from} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
