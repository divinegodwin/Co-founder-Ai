import ChatBox from "./Components/Chatbox";
import Account from "./Components/Account";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>  
        <Routes>
          <Route exact path="/" element={<ChatBox />} />
          <Route exact path="/Account" element={<Account />} />
          <Route exact path="/Login" element={<Login/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
