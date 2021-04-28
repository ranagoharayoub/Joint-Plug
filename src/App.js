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

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage}></Route>
        <Route path='/join' component={Join}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/contactus' component={ContactUs}></Route>
        <Route path='/blog' component={Blog}></Route>
        <Route path='/news' component={News}></Route>
        <Route path='/addbusiness' component={AddBusiness}></Route>
      </Switch>
    </Router>
  );
}

export default App;
