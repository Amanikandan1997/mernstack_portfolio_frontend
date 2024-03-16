
import './App.css';
import Profile from './Profile';
import Login from "./Login/Login"
import Forgotpassword from './Login/Forgotpassword';
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter, Routes ,Route, HashRouter} from 'react-router-dom';
import Project from './Project';
import Skills from './Skills';
import Course from './Course';
import Add from './Dashboard/Add';
import Update from './Dashboard/Update';


function App() {
  return (
    
    
    <HashRouter>
  
    <Routes>
   
      <Route path='/' element={<Profile/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/forgotpassword' element={<Forgotpassword/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/skils' element={<Skills/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/course' element={<Course/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/update' element={<Update/>}/>
    </Routes>
    </HashRouter>

    
  );
}

export default App;
