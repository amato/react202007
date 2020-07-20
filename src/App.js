import React, {Component} from 'react';

// class App extends Component{
//   render(){
//     return (
//       //<div>
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={()=>{console.log("I am clicked!")}} />
//       </React.Fragment>
//     )
//   }
// }

const App = () =>{
  return(
    <div>
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () =>{
  return (
    <div>
      Meow!!
    </div>
  )
}

export default App;
