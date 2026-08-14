import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Budget from "./pages/Budget/Budget";
import Recommendations from "./pages/Recommendations/Recommendations";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/budget"
          element={<Budget />}
        />

        <Route
          path="/recommendations"
          element={<Recommendations />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
