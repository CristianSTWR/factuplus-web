import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import ListaEspera from "./pages/ListaEspera";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaEspera />} />
        <Route path="/lista-espera" element={<ListaEspera />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;