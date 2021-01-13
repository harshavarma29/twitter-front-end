import logo from './logo.svg';
import './App.css';
import Tweet from './components/Tweet';
import TweetCards from './components/TweetCards';
import React, { PureComponent } from 'react';

class App extends PureComponent {

  constructor() {
    super();

    this.state = {
      change: ''
    }
  }

  getData = (value) => {
    this.setState({
      change: value
    })
    console.log(this.state.change)
  }

  render() {
    return (
      <div className="App">
        <Tweet data={this.getData}/>
        <TweetCards exe={this.state.change}/>
      </div>
    );
  }
}

export default App;
