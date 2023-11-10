import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Keyword from './Components/keyword/Keyword';
import Detail from './Components/Detail/Detail';
import Member from './Components/Member/Member';
import User from './Components/User/User';
import Playlist from './Components/Playlist/Playlist';
import Header from './Components/UI/Header';
function App() {
  return (
    <>
    <div className='background-overlay'></div>
    <Header/>
    <Router basename="/">
      <Routes>
        <Route key ="Main" path="/" element={<Main/>} />
        <Route key ="Search" path="/Search/*" element={<Keyword/>} />
        <Route key='Detail' path='/Detail/*' element={<Detail/>}/>
        <Route key='Member' path='/Member/*' element={<Member/>}/>
        <Route key='User' path='/User/*' element={<User/>}/>
        <Route key='PlayList' path='/PlayList/*' element={<Playlist/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
