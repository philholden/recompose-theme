import React, { Component } from 'react'
import Button from './button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button
          element={'a'}
          href="http://google.com"
          style={{backgroundColor: 'orange'}}
        >
          Click me
        </Button>
      </div>
    );
  }
}

export default App
