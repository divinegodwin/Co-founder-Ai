import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import "../App.css";
import BackgroundLoader from "./BackgroundLoader";
import Navbar from "./Navbar";

//import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'


const ChatBox = () => {
  const [userPrompt, setUserPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [processing, setProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loaderTimer = setInterval(() => {
      setIsLoading(false);
    }, 10000);

    return () => clearInterval(loaderTimer);
  }, []);

  const apiKey = import.meta.env.VITE_APP_GENERATIVE_AI_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  function handleInput(e) {
    setUserPrompt(e.target.value);
  }

  const Generate = async () => {
    setIsLoading(false);
    if (userPrompt.trim() === "") return;
    try {
      setMessages((previousMessages) => [
        ...previousMessages,
        {
          text: userPrompt,
          sender: "user",
        },
      ]);
      setProcessing(true);
      const result = await model.generateContent(userPrompt);
      const response = await result.response;
      const aiText = response.text();
      setMessages((previousMessages) => [
        ...previousMessages,
        {
          text: aiText,
          sender: "ai",
        },
      ]);
      setUserPrompt("");
    } catch (error) {
      console.error(error);
    } finally {
      setProcessing(false);
      setUserPrompt("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      Generate();
    }
  };

  const HandleMic = ()=>{
    alert('feature comming soon')
  }
  //const {//speech recognition state
   // transcript,
    //browserSupportSpeechRecognition,
 // } = useSpeechRecognition()

 // if(!browserSupportSpeechRecognition){
 //   return <span>your browser does not support speech to text recongnition </span>
//  }

  return (
    <div>

    <Navbar />
      {isLoading && <BackgroundLoader /> }

      <section className="p-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.sender === "user"
                ? "text-right bg-blue-500"
                : "text-left bg-black"
            } ml-2 mt-[2rem] w-fit  px-4 rounded-lg py-2 flex m-w-2xl text-white`}
          >
            {message.text}
          </div>
        ))}
      </section>

      {processing && <Loader />}

{/*<div><p>{transcript}</p></div>*/}
      <div className=" bottom-0 flex flex-row px-2 fixed bg-[#f2f2f2] h-[80px] w-full shadow-lg">
        <input
          value={userPrompt}
          onChange={handleInput}
          type="text"
          className=" my-4 w-[250px] max-w-[270px] h-[50px] ml-4 pl-3 px-2 rounded-2xl border-2 border-[#323332] outline-none"
        ></input>

        <div className="flex flex-row px-5 py-7">
          <svg
          onClick={HandleMic}
            className="w-[30px] absolute right-14 text-blue-500"
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
            onKeyDown={handleKeyDown}
            className="w-[30px] absolute right-5 text-blue-500"
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
    </div>
  );
};

export default ChatBox