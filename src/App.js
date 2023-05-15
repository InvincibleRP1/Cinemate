import { Routes, Route } from 'react-router-dom'

import "./App.css";
import { HomePage } from './pages/home/home';
import { ShelfPage } from './pages/Shelf/shelfPage';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/shelf' element={<ShelfPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
