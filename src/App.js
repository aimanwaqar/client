import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CodeForInterview from './components/CodeForInterview';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import {BrowserRouter,Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
     <Navbar />
     <Routes>
       <Route path="/" element={<CodeForInterview />}></Route>
      <Route path ="/all" element={<AllUsers />}></Route>
       <Route path = "/add" element={<AddUser />}></Route>
       <Route path = "/edit/:id" element={<EditUser />}></Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
