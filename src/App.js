import { Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import HisotryFile from './modules/HistoryFile';
import Home from './modules/Home';
import NewFile from './modules/NewFile';

function App() {
  return (
    <div className="App">
      <div>
        <Menu />
      </div>
      <div className='routes'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/History" element={<HisotryFile />} />
            <Route path="/New" element={<NewFile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
