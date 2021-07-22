import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import AddHome from './components/addhome/AddHome';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Signup from './components/signup/Signup';
import SlidHomes from './components/slidinghomes/SlidHomes';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Home />
        <AddHome />
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/addhome" component={AddHome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/slidehome" component={SlidHomes} />
        {/* <Login /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
