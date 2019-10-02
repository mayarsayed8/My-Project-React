import React, { Component } from 'react';
import Header from './Component/Header/Header';
import Courses from './Component/Course/Courses'
import Home from './Component/Home/Home'
import Chart from './Component/Chart/Chart'
import { BrowserRouter as Router ,Route ,Switch} from 'react-router-dom';



class App extends Component {
    render() {
        return (
            < Router>
            <div className="App">
              <Header/>
               <div className="contanier">
               <Switch>
               <Route exact path="/" component={Home}/>
               <Route exact path="/Chart" component={Chart}/>
               <Route exact path="/Courses" component={Courses}/>
               </Switch> 
              </div>
               </div>
               </Router>
            
        )
    }
}

export default  App;