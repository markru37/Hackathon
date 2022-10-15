import './scss/App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
