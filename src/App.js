import { Route, Routes } from "react-router-dom";

import Portfolio from "./Pages/index"

import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
