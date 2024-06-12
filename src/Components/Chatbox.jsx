const ChatBox = () => {
 
  //const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest"});


 
  return (
    <div>
      <div className="fixed bottom-2 w-full">
        <input
          type="text"
          className="w-[270px] h-[50px] ml-4 pl-3 px-2 rounded-2xl  border-2 border-slate-500 outline-[#50c878]"
        ></input>
        <svg
        className="w-[30px] absolute bottom-2 right-16"
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
            d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
          ></path>
        </svg>
        <svg
          className="w-[30px] absolute bottom-2 right-5"
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
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ChatBox;
