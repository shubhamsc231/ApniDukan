import './App.css';
import Header from './components/Header.js';
import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login.js';
import Layout from './pages/Layout.js';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Header />
    </>
  );
}

export default App;
