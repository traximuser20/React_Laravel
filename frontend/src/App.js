import './App.css';
import Navbar from './components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Create from './pages/create';
import List from './pages/list';
import About from './pages/about';
import View from './pages/view';
import Edit from './pages/edit';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/list" element={<List/>} />
        <Route path="/view/:id" element={<View/>} />
        <Route path="/edit/:id" element={<Edit/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
