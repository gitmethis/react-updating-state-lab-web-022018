// Code DigitalClicker Component Here


import React from 'react'

class DigitalClicker extends React.Component{
  state = {
    timesClicked:0
  }

  increaseCounter = (event) => {
    this.setState({
      timesClicked: ++this.state.timesClicked
    })
  }

  render(){
    return(
      <button onClick={this.increaseCounter}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
