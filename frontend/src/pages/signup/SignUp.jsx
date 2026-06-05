import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Safely converting gender to lowercase to avoid backend check mismatch
    await signup({ ...inputs, gender: inputs.gender.toLowerCase() });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
      <div className="w-full p-6 rounded-2xl shadow-2xl bg-black/40 backdrop-blur-lg border border-white/20">

        <h1 className="text-3xl font-bold text-center text-white mb-4">
          Sign Up <span className="text-blue-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base text-white font-medium">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Shivansh Sharma"
              className="w-full input input-bordered h-10 bg-white/10 text-white placeholder:text-gray-300"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base text-white font-medium">Username</span>
            </label>
            <input
              type="text"
              placeholder="shivanshsharma"
              className="w-full input input-bordered h-10 bg-white/10 text-white placeholder:text-gray-300"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base text-white font-medium">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 bg-white/10 text-white placeholder:text-gray-300"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base text-white font-medium">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10 bg-white/10 text-white placeholder:text-gray-300"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link to="/login" className="text-sm text-sky-300 hover:text-sky-400 hover:underline mt-3 inline-block">
            Already have an account?
          </Link>

          <div>
            <button type="submit" className="btn btn-primary btn-block mt-4" disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default SignUp;