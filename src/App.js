import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Cards from './Components/Cards/Cards'
import Buttons from './Components/Buttons/Buttons'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Chats from './Components/Chats/Chats'
import ChatScreen from './Components/Chats/ChatScreen'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat"/>
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/"/>
            <Chats />
          </Route>
          {/* Default route at the bottom */}
          <Route path="/">
            <Header/>
            <Cards/>
            <Buttons/>
          </Route>
        </Switch>   
      </Router>
     
    </div>
  );
}

export default App;





 