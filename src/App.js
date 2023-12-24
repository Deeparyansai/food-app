
import './App.css';
import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { CardProvider } from './components/ContextReducer.js';
import MyOrder from './views/MyOrder.js';

function App() {
  return (
    <CardProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element=<Home /> />
            <Route exact path='/login' element=<Login /> />
            <Route exact path='/createuser' element=<Signup /> />
            <Route exact path='/myOrder' element=<MyOrder /> />
          </Routes>
        </div>
      </Router>
    </CardProvider>
  );
}

export default App;
