import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/agendamento" element={<Agendamento />} />
      </Routes>

  );
}

export default App;