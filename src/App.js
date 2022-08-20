import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Error from "./pages/Error";

const App = ({ accomodation }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/details-logement/:id"
          element={<Details accomodation={accomodation} />}
        />
        {/* if url is unknown : error 404 */}
        <Route path="*/" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
