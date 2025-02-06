import './App.css';

// react router 
import { BrowserRouter, Route, Routes } from 'react-router';

// pages 
import Home from "../src/Pages/Home";
import SingleUser from './Pages/SingleUser';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:Id" element={<SingleUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
