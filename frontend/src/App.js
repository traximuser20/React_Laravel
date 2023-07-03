import './App.css';
import Navbar from './components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Create from './pages/create';
import About from './pages/about';
import View from './pages/view';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/view" element={<View/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
