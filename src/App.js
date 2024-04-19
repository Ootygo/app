
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
}
  from 'react-router-dom';
import Places from './components/Places';
import Stay from './components/Stay';
import Travel from './components/Travel';


function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Places' element={<Places/>} />
          <Route path='/Stay' element={<Stay/>} />
          <Route path='/Travel' element={<Travel />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
