const Account = () => {
  return (
    <div>
      <div className="flex flex-row pt-1 justify-center mt-10">
        <div className="w-[50px] h-[50px] bg-black text-white rounded-full m-2 flex justify-center mt-3 ">
          <p className="absolute pt-3 text-center font-bold">CFAI</p>
        </div>

        <header className="font-bold pt-6">Create Account</header>
      </div>

      <div className="grid justify-center  gap-3 pt-4" >
        <div className="flex flex-col ">
        <label className="font-bold">Email</label>
        <input
          type="
 email"
          className="w-[300px] h-[50px] border-2 border-slate-500 rounded-lg outline-none p-3"
        ></input>
        </div>

<div className="flex flex-col">
        <label className="font-bold">Username</label>
        <input
          type="
 text"
          className="w-[300px] h-[50px] border-2 border-slate-500 rounded-lg outline-none p-3"
        ></input>
        </div>

        <div className="flex flex-col">
        <label className="font-bold">Password</label>
        <input
          type="
 password"
          className="w-[300px] h-[50px] border-2 border-slate-500 rounded-lg outline-none p-3"
        ></input>
        </div>

        <div className="flex flex-col">
        <label className="font-bold">Confirm Password</label>
        <input
          type="
 password"
          className="w-[300px] h-[50px] border-2 border-slate-500 rounded-lg outline-none p-3"
        ></input>
        </div>

        <button className="text-white bg-blue-500 h-[50px] rounded-lg">
          Create your account
        </button>
        <button className='text-blue-500 font-bold'>
          Login
        </button>
        <p className="text-center">By creating an account, you agree<br/>  to our Terms of Service and Privacy</p>
      </div>

      
    </div>
  );
};

export default Account;
