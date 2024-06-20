import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

const ChatBox = () => {

  const apiKey = 'AlzaSyA76U1ZI_JZCAOw5xgOv_fdO1VoCH2KDng'
  const genAI = new GoogleGenerativeAI(apiKey)
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const [userPrompt, setUserPrompt] = useState("")

  const[generatedText, setGeneratedText] =useState("")

  const Generate = async () => {

    console.log('hi')
    
    try {
      const result = await model.generateContent(userPrompt);
      const response = await result.response;
      const text = response.text();
      setGeneratedText(text); 
      console.log(text);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div>
      <div className=" bottom-0 flex flex-row px-2 fixed bg-[#f2f2f2] h-[80px] w-full shadow-lg">
        <input
          onChange={(e)=>setUserPrompt(e.target.value) }
          type="text"
          className=" my-4 w-[250px] max-w-[270px] h-[50px] ml-4 pl-3 px-2 rounded-2xl border-2 border-[#323332]"
        ></input>

        <div className="flex flex-row px-5 py-7">
          <svg
          
            className="w-[30px] absolute right-14"
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
            onClick={Generate}
            className="w-[30px] absolute right-5"
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

    
          <div>{generatedText}</div>
      
    </div>
  );
};

export default ChatBox;
