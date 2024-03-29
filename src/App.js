import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//import Counter from './components/Counter.js' //imports our class 'Counter' from the directory 'components'
import Profile from './components/Profile.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      index: 0
    }
  }

  increment = () => {
    let curIndex = this.state.index;
    let nextIndex = curIndex + 1;
    this.setState({
      index: nextIndex
    })
  }

  render(){
    return (
      <div className="App">
        <Profile curImageIndex={this.state.index}/>
        <button onClick={() => this.increment()}>Next Image</button>
      </div>
    )
  }

}

export default App;
