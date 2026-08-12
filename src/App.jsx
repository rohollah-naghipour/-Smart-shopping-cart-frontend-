import { BrowserRouter, Routes, Route } from "react-router-dom";

import Recommendations from "./pages/Recommendations/Recommendations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/recommendations"
          element={<Recommendations />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
