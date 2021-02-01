import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/homepage/HomePage.jsx'
import Detail from './pages/detail/Detail.jsx'

class App extends Component {
  render() {
    return (   
       <BrowserRouter>
            <div className="App">
              <Navbar/>
                <Switch>
                <Route exact path="/" component={Home}/>
                    <Route exact path="/detail" component={Detail}/>                 
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
