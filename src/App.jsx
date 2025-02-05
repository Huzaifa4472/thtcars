import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reservations from "./pages/reservations";
import Login from "./pages/login";
function App() {
  return (
    <div className="font-poppins">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reservation" element={<Reservations />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
