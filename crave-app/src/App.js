import React from 'react';
import {Route} from 'react-router';
import {Link} from 'react-router-dom';

import Inputs from './components/Inputs';
import Results from './components/Results';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        protein: null,
        fat: null,
        fiber: null,
        moisture: null,
        ash: null,
        taurine: null
    }
  }

  handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
  }

  render(){
     return (
      <div className="App">
        <header className="App-header">
          <Link to="/inputs" 
            style={{ 
                marginBottom: "50px", 
                border: "1px solid white", 
                borderRadius: "25px", 
                color:"white", 
                textDecoration: "none",
                padding: "10px"
            }}>Calculate </Link>
          <Route exact path="/" />
          <Route exact path="/inputs" render={(props) => (
            <Inputs 
              {...props} 
              handleChange={this.handleChange} 
            />
          )} />
          <Route exact path="/results" render={(props) => (
            <Results 
              {...props} 
              protein={this.state.protein}
              fat={this.state.fat}
              fiber={this.state.fiber}
              moisture={this.state.moisture}
              ash={this.state.ash}
              taurine={this.state.taurine}
            />
          )} />
        </header>
      </div>
    );
  }
 
}

export default App;
