import { Link } from "react-router-dom";
const Login = () => {
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
              type="
 password"
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
