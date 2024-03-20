import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Restaruants from "./components/Restaruants/Restaruants";
import Qoutes from "./components/Qoutes/Qoutes";
import Contact from "./components/Contact/Contact";
import Food from "./components/Food/Food";
import DetailedRecipe from "./components/Food/DetailedRecipe";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qoutes" element={<Qoutes />} />
            <Route path="/restaruants" element={<Restaruants />} />
            <Route path="/food" element={<Food />} />
            <Route path="/food/:id" element={<DetailedRecipe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
