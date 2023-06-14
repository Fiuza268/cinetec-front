import './App.css';
import FormsLogin from './Pages/login';
import FormsCad from './Pages/CadUser';
import { MovieCatalog } from './Pages/MovieCatalog';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormsLogin />} />
        <Route path="/registrar" element={<FormsCad />} />
        <Route path="/catalog" element={<MovieCatalog />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;