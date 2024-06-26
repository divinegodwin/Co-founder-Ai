import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";

const Account = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hidden, setHidden] = useState(false);

  function PasswordVisibility() {
    setHidden(!hidden);
  }

  return (
    <div>
      <div className="flex flex-row pt-1 justify-center mt-1">
        <div className="logo w-[50px] h-[50px] bg-black text-white rounded-full m-2 flex justify-center mt-3 ">
          <p className="absolute pt-3 text-center font-bold">CFAI</p>
        </div>
      </div>

      <div className="flex flex-col text-center">
        <header className="font-bold text-[20px] pb-1">Create Account</header>
      </div>

      <div className="grid justify-center gap-3 pt-3">
        <div className="flex flex-col ">
          <label className="font-bold">Email</label>
          <input
            type="
 email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-[350px] h-[50px] border-2 border-slate-500 rounded-lg outline-none p-3"
          ></input>
        </div>

        <div className="flex flex-col">
          <label className="font-bold">Username</label>
          <input
            type="
 text"
            onChange={(e) => setUsername(e.target.value)}
            className="w-[350px] h-[50px] border-2 border-slate-500 rounded-lg outline-none p-3"
          ></input>
        </div>

        <div className="flex flex-col">
          <label className="font-bold">Password</label>
          <div className="flex border-2 border-slate-500 w-[350px] rounded-lg">
            <input
              type={hidden? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[350px] h-[50px] border-0 rounded-lg outline-none p-3"
            ></input>
            <div className="flex pr-2">
              <svg
                onClick={PasswordVisibility}
                className="w-[30px] "
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
          </div>
        </div>

        <div>
          <label className="font-bold">Confirm Password</label>
          <div className="flex border-2 border-slate-500 w-[350px] rounded-lg">
            <input
             type={hidden? "text" : "password"}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-[350px] h-[50px] border-0 rounded-lg outline-none p-3"
            ></input>
            <div className="flex pr-2">
              <svg
                className="w-[30px] "
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
          </div>
        </div>

        <button className="text-white bg-blue-500 h-[50px] rounded-lg">
          Create Account
        </button>
        <Link to="/Login">
          <button className="text-blue-500 font-bold border-2 rounded-lg w-[350px] h-[50px] border-blue-500">
            Sign In
          </button>
        </Link>
        <p className="text-center">
          By creating an account, you agree
          <br /> to our Terms of Service and Privacy
        </p>
      </div>
    </div>
  );
};

export default Account;
