import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Author2 from './components/Author2';
import Quotes2 from './components/Quotes2';
import ByAuthor from './components/ByAuthor';

function App() {
  return (
    <>
    
    <Navbar/>
    {/* <Search2/> */}
    
    <Routes>
      <Route path='/quote-of-day' element={<Home/>}></Route>
      <Route path='/author' element={<Author2/>}></Route>
      <Route path='/quote' element={<Quotes2/>}></Route>
      <Route path='/ByAuthor' element={<ByAuthor/>}></Route>
    </Routes>
    </>
    
  );
}

export default App;
