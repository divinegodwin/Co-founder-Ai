const Navbar = () => {
  return (
    <div>
      <nav className="bg-[#50c878] w-full h-[70px] flex flex-row">
        <div className="w-[50px] h-[50px] bg-black text-white rounded-full m-2 flex justify-center mt-2 ">
        
          <p className="absolute pt-3 text-center">CFA</p>
        </div>
        <h1 className="pl-2 pt-6 font-bold text-white">Co-Founder AI</h1>
      </nav>
    </div>
  );
};

export default Navbar;
