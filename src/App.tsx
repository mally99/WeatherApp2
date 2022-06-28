import './App.css';
import Main from './components/main';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetWeatherByCity from './components/getWeatherByCity';

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:city" element={<GetWeatherByCity />} />
        </Routes>
      </Router>
    </div>



  );
}

export default App;
