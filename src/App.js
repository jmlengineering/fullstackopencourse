// import logo from './logo.svg';
// import './App.css';
import { useState } from "react"

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter( counter + 1 )
  const setToZero = () => setCounter(0)
 
  console.log('rendering...', counter)

  return (
   <div>
    <div>{ counter }</div>
    <button onClick={increaseByOne}>
      plus
    </button>
    <button onClick={setToZero}>
      zero
    </button>
   </div>
  ) 
} 

export default App

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
