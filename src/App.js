import React,{Component} from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component{
  constructor(props){//初期化処理
    super(props)
    console.log("constructor",this.state)
    this.state = {count:0}

  }

  handlePlusButton = () =>{
    const count = this.state.count
    this.setState({count:count+1})

    console.log("handlePlusButton:")
    console.log(this.state.count)
  }
  handleMinusButton = () =>{
    const count = this.state.count
    this.setState({count:count-1})

    console.log("handleMinusButton:")
    console.log(this.state.count)
  }

  render(){
    console.log("render",this.state)
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
