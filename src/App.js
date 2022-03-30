import './App.css';
import React, {Component} from 'react';


class App extends Component{
  state = {
    showMessage: false
  }
  onButtonClickHandler = () => {
   this.setState({showMessage: true});
  };

  render(){ 
    return(<div className="App">
     {this.state.showMessage && <p>Welcome to circleci-app!</p>}
      <button id="click" onClick={this.onButtonClickHandler}>Click me !</button>
    </div>);

  }
}

export default App;
