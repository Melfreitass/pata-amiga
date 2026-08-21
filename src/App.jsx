import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
<Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;