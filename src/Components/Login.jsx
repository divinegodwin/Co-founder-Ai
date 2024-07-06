/*import { Link } from "react-router-dom";
import { useState } from "react";
import supabase from "../../SupabaseClient";

const Login = () => {
  const [hidden, setHidden] = useState(false);

  function PasswordHide() {
    setHidden(true);
  }
  function PasswordShow() {
    setHidden(false);
  }
  return (
    <div className="mt-[8rem]">
      <div className="logo flex flex-row pt-1 justify-center mt-1">
        <div className="w-[50px] h-[50px] bg-black text-white rounded-full m-2 flex justify-center mt-3 ">
          <p className="absolute pt-3 text-center font-bold">CFAI</p>
        </div>
      </div>

      <div className="grid justify-center gap-3 pt-3">
        <div className="flex flex-col ">
          <label className="font-bold">Email</label>
          <input
            type="
 email"
            className="w-[350px] h-[50px] border-2 border-slate-500 rounded-lg outline-none p-3"
          ></input>
        </div>

        <div className="flex flex-col">
          <label className="font-bold">Password</label>
          <div className="flex border-2 border-slate-500 w-[350px] rounded-lg">
            <input
              type={hidden ? "text" : "password"}
              className="w-[350px] h-[50px] border-0 rounded-lg outline-none p-3"
            ></input>
            <div className="flex pr-2">
              <svg
                onClick={PasswordShow}
                className={`${hidden ? "w-[25px] block" : "w-[30px] hidden"}`}
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                ></path>
              </svg>
            </div>
            <div className=" flex pr-2 ">
              <svg
                onClick={PasswordHide}
                className={`${
                  hidden ? "w-[25px] hidden " : "w-[25px] block"
                } block`}
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div>
          <span className="text-blue-500">Forgotten password?</span>
        </div>

        <Link to="/Login">
          <button className="text-white font-bold  rounded-lg w-[350px] h-[50px] bg-blue-500 mt-2">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
