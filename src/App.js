import { Routes, Route } from "react-router-dom";
import classes from "./App.css";
import Wrapper from "./components/UI/Wrapper";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/home" element=<Home/>/>
        <Route path="/" element=<LandingPage/>/>
      </Routes>
    </Wrapper>
  );
}

export default App;
