import { Routes, Route } from "react-router-dom";
import classes from "./App.css";
import Wrapper from "./components/UI/Wrapper";
import Home from "./pages/Home";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/home" element=<Home/>/>
      </Routes>
    </Wrapper>
  );
}

export default App;
