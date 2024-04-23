
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
}
  from 'react-router-dom';
import Places from './components/Places';
import Stay from './components/Stay';
import Travel from './components/Travel';
import Food from './components/Food';


function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Places' element={<Places/>} />
          <Route path='/Stay' element={<Stay/>} />
          <Route path='/Travel' element={<Travel />} />
          <Route path='/Food' element={<Food />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
