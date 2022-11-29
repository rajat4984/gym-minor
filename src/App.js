import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import List from "./components/List";
import "./style.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="list" element={<List />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
