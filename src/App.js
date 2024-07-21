import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Greet  from './components/Greet.js'
import Welcome from './components/Welcome.js';
import Hello from './components/Hello.js';
import "bootstrap/dist/css/bootstrap.min.css";
import Message from './components/Message.js';
import Counter from './components/Counter.js';
import FunctionClick from './components/FunctionClick.js';
import ClassClick from './components/ClassClick.js';
import EventBind from './components/EventBind.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <EventBind />
        <ClassClick />
        <FunctionClick />
        <Counter />
        <Greet name="Bruce" heroName="Wayne">
          <p>This is children props</p>
        </Greet>
        <Greet name="Luke" heroName="Skywalker" />
          <button class="btn btn-primary">Vote</button>
        <Welcome name="YanFei" heroName="SlimShaddy" />
        <Hello />
        <Message />
      </header>

      
    </div>
  );
}

export default App;
