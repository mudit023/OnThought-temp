import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="bg-zinc-900 pt-10 px-10 pb-5">
      <Routes>
        <Route path="/home" element=<Home/>/>
        <Route path="/" element=<LandingPage/>/>
      </Routes>
    </div>
  );
}

export default App;
