import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchAppBar from "./components/AppBar";
import Home from "./components/Pages/Home";
import Tour from "./components/Pages/Tour";

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
