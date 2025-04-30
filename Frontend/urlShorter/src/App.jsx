import Home from "./Pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login"
import { ToastContainer, toast } from 'react-toastify';
function App() {
    <Routes>
      <Route path="/login" element={<Login/>}/>
    </Routes>

  return (
    <>
    <ToastContainer/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
