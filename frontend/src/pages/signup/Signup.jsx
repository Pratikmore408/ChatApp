import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base  text-blue-500  label-text">
                Fullname
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Fullname"
              className="w-full input input-bordered h-10"
              value={inputs.fullname}
              onChange={(e) =>
                setInputs({ ...inputs, fullname: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base  text-blue-500  label-text">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base text-blue-500 label-text">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base text-blue-500 label-text">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckBox
            onCheckBoxChange={handleCheckBoxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-1 inline-block"
          >
            Already have an account?
          </Link>
          <div>
            <button
              className="btn btn-sm btn-block mt-2 border border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

// import React from "react";
// import GenderCheckBox from "./GenderCheckBox";

// const Signup = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Signup
//           <span className="text-blue-500"> ChatApp</span>
//         </h1>
//         <form action="">
//           <div>
//             <label className="label p-2">
//               <span className="text-base  text-blue-500  label-text">
//                 Fullname
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Fullname"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2" htmlFor="">
//               <span className="text-base  text-blue-500  label-text">
//                 Username
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2" htmlFor="">
//               <span className="text-base text-blue-500 label-text">
//                 Password
//               </span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2" htmlFor="">
//               <span className="text-base text-blue-500 label-text">
//                 Confirm Password
//               </span>
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <GenderCheckBox />

//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-600 mt-1 inline-block"
//           >
//             Already have an account?
//           </a>
//           <div>
//             <button className="btn btn-sm btn-block mt-2">Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
