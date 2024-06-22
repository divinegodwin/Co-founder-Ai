const Navbar = () => {
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

        <div className="flex pl-[9rem] ">
          <svg
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
        <div className="bg-[rgb(50,51,50)] h-[200px] w-[180px] absolute top-16 text-white list-none right-0">
          <li>hi</li>
        </div>
      </aside>

    </div>
  );
};

export default Navbar;
