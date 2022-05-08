import { render } from "@testing-library/react";
import React from "react";
import "./App.css";
import ContactList from "./ContactList";
import Feed from "./Feed";

class App extends React.Component {
  constructor(){
    super()
  }

  render () {
    return (
      <div className="App-Div">
      <Feed />
      <ContactList />
    </div>
    )
  }
}

export default App;

// function App() {
//   return (
//     <div className="App-Div">
//       <Feed />
//       <ContactList />
//     </div>
//   );
// }

// export default App;