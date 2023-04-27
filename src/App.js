import Home from "./Pages/Home";
import Context from "./Components/Context";
import Rooms from "./Pages/Rooms";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SingleRoom from "./Pages/SingleRoom";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:slug" element={<SingleRoom />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
