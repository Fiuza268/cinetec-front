import logo from './logo.svg';
import './App.css';
import FormsLogin from './Pages/login';
import FormsCad from './Pages/CadUser';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormsLogin />} />
        <Route path="/registrar" element={<FormsCad />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;