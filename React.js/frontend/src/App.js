import logo from './logo.svg';
import './App.css';
import Home from './Components/Router/Home';
import Routing from './Components/Router/Routing';
import { Link } from 'react-router-dom';
import ParentProp from './Components/Props/ParentProp';
import UseStateHook from './Components/Hook/UseStateHook';
import UseEffectHook from './Components/Hook/UseEffectHook';
import UseRefHook from './Components/Hook/UseRefHook';
import UseCallbackHook from './Components/Hook/UseCallbackHook';
import UseMemoHook from './Components/Hook/UseMemoHook';
import UseReducerHook from './Components/Hook/UseReducerHook';
import {CRUD} from './Components/API/CRUD';
import CounterApp from './Components/Redux/CounterApp';
import ChildProp from './Components/Props/ChildProp';
import Connect from './Components/Connecting/Connect';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <h1>Hello World..!</h1> */}

        {/* <div>
          <Link to={'/home'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/contact'}>Contact</Link>
        </div>
      </header> */}

      {/* <Home /> */}
      {/* <Routing /> */}

      {/* <InternalComponent /> */}

      {/* Props Model */}
      {/* <ParentProp /> */}
      {/* <ChildProp/> */}

      {/* Hooks */}
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseCallbackHook /> */}
      {/* <UseMemoHook /> */}
      {/* <UseReducerHook /> */}


      {/* API */}
      {/* <CRUD /> */}

      {/* <CounterApp /> */}
      <Connect/>
    </div>
  );
}

export default App;


function InternalComponent(){
  return(
    <div className='sample'>
      <h1>Internal Component Page in App.js file</h1>
    </div>
  )
}