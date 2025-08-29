import Lottie from "lottie-react";
import React, { use } from "react";
import registerLottie from '../../assets/LottieFiles/register.json'
import { AuthContext } from "../../Context/AuthContext";
import GoogleSignIn from "../Shared/GoogleSignIn";


const Register = () => {
	const {createUser} = use(AuthContext)


	const handleRegister = (e) => {
		e.preventDefault()
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		createUser(email, password)
			.then(res => {
			console.log(res)
			}).catch(error => {
			console.log(error)
		})
	}

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
				  <Lottie className="w-96" animationData={registerLottie} loop={true}></Lottie>
			  <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Email</label>
              <input name="email" type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input name="password" type="password" className="input" placeholder="Password" />
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
            <GoogleSignIn/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
