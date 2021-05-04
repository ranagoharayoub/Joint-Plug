import './App.css';
import HomePage from './Pages/HomePage'
import Join from './Pages/Join'
import Login from './Pages/Login'
import ContactUs from './Pages/ContactUs'
import Blog from './Pages/Blog'
import News from './Pages/News'
import AddBusiness from './Pages/AddBusiness'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { useEffect, useState } from 'react';
import TopNavbar from './Components/TopNavbar';
import BottomNavbar from './Components/BottomNavbar';
import Menu from './Pages/Menu';


function App() {


  const [screen, setscreen] = useState(window.innerWidth)
  const [mobile, setmobile] = useState(false)
  
 
useEffect(() => {
    const width = () =>{
        
        setscreen(window.innerWidth) 
    }
    if(screen <'700'){
      setmobile(true)
    }
    window.addEventListener('resize', width)

  }, [screen])



  return (
    <Router>

      {
        mobile? <TopNavbar></TopNavbar> : <Navbar></Navbar>
      }
      <Switch>
        <Route path='/' exact component={HomePage}></Route>
        <Route path='/join' component={Join}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/contactus' component={ContactUs}></Route>
        <Route path='/blog' component={Blog}></Route>
        <Route path='/news' component={News}></Route>
        <Route path='/menu' component={Menu}></Route>
        <Route path='/addbusiness' component={AddBusiness}></Route>
      </Switch>
      <Footer></Footer>
      {
        mobile?<BottomNavbar></BottomNavbar> : null
      }
    </Router>
  );
}

export default App;
