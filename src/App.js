import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/navegación/NavBar'
import Inicio from './components/pages/Inicio'
import Velas from './components/pages/Velas'
import EscenciasYMas from './components/pages/EscenciasYMas' 
import CartWidget from './components/pages/CartWidget'; 
import ItemListContainer from './components/ItemListContainer';




function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Inicio}/>
          <Route path='/Velas' component={Velas}/>
          <Route path='/EscenciasYMas' component={EscenciasYMas}/>
          <Route path='/CartWidget' component={CartWidget}/>
        </Switch>
      </Router>
      <Router>
        <ItemListContainer/>
      </Router>
     {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
