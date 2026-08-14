
export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Recommendations from "./pages/Recommendations/Recommendations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/recommendations"
          element={<Recommendations />}
        />
      </Routes>
    </BrowserRouter>
  );
}

