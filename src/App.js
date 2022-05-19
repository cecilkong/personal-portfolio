import logo from './logo.svg';
import './App.css'
import Layout from './Layout.js'
import Personal from './Personal'
import Games from './Games'
import Contact from './Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route path="personal" element={<Personal/>} />
          <Route path="games" element={<Games/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
