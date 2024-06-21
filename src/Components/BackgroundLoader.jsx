const BackgroundLoader = () => {
  return (
    <div className="flex flex-row justify-center mt-[20rem]">
      <div className="w-[50px] h-[50px] bg-black text-white rounded-full m-2 flex justify-center mt-3 ">
        <p className="absolute pt-3 text-center font-bold">CFAI</p>
      </div>

      <div className="bg-loader mt-3"></div>
    </div>
  );
};

export default BackgroundLoader;
