import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderNav from './components/common/HeaderNav';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <HeaderNav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
