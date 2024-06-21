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

      <div className="flex pl-[8rem] ">
      <svg
        className="nav-icon-icon w-[30px] text-[#ffff]  "
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
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          ></path>
          </svg>
      </div>

      </nav>
    </div>
  );
};

export default Navbar;
