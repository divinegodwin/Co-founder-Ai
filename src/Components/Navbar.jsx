import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const ToggleNav = () => {
    setOpen(!open);
  };
 
  return (
    <div>
      <nav className="bg-[rgb(50,51,50)] w-full h-[80px] flex flex-row pl-2 top-0 fixed ">
        <div className="flex flex-row pt-1">
          <div className="w-[50px] h-[50px] bg-black text-white rounded-full m-2 flex justify-center mt-3 ">
            <p className="absolute pt-3 text-center font-bold">CFAI</p>
          </div>
          <header>
            <p className="pl-2 pt-6 text-lg text-white">Co-Founder AI</p>
          </header>
        </div>

        <div className="flex pl-[8rem] ">
          <svg
            onClick={ToggleNav}
            className="text-white w-[30px]"
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
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            ></path>
          </svg>
        </div>
      </nav>

      <aside>
        <div
          className={`${
            open
              ? "rounded-lg pt-6 bg-[rgb(50,51,50)] h-[205px] p-4 flex flex-col gap-4 w-[250px] absolute top-16 text-white list-none right-0"
              : "hidden"
          }`}
        >
          <div className="flex flex-row w-full">
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
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              ></path>
            </svg>
            <li className="pt-1 pl-2">
              New chat
            </li>
          </div>
          <div className="flex">
            <svg
              className="w-[30px]"
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
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              ></path>
            </svg>
            <li className="pl-2">
              History
            </li>
          </div>
          <div className="flex">
         
          
<label className="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" ></input>
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>

          <li className="pl-2">
            Theme
          </li>
          </div>

          <div className="flex">
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
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              ></path>
            </svg>
            <li className="pl-2">
              Create Account
            </li>
          </div>
        </div>
      </aside>
 
    </div>
  );
};

export default Navbar;
