
import './App.css';
// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Places from './components/Places';
import Stay from './components/Stay';
import Travel from './components/Travel';
import Food from './components/Food';
import SignUp from './components/SignUp';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Places" element={<Places />} />
          <Route path="/Stay" element={<Stay/>} />
          <Route path="/Travel" element={<Travel/>} />
          <Route path="/Food" element={<Food/>} />
          <Route path="/SignUp" element={<SignUp/>} />
       </Routes>
    </>
 );
};

export default App;




