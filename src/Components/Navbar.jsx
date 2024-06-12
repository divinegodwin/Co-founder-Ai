const Navbar = () => {
  return (
    <div>
      <nav className="bg-[#50c878] w-full h-[70px] flex flex-row">
        <div className="w-[50px] h-[50px] bg-black text-white rounded-full m-2 flex justify-center mt-2 ">
        
          <p className="absolute pt-3 text-center">CFA</p>
        </div>
        <header>
        <p className="pl-2 pt-5 font-bold text-white text-lg">Co-Founder AI</p>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
