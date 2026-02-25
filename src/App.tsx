import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PHome from "./pages/PHome/PHome";
import PSobre from "./pages/PSobre/PSobre";
import PServicos from "./pages/PServicos/PServicos";
import PContato from "./pages/PContato/PContato";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PHome />} />
        <Route path="/sobre" element={<PSobre />} />
        <Route path="/servicos" element={<PServicos />} />
        <Route path="/contato" element={<PContato />} />
      </Routes>
    </Router>
  );
}

export default App;