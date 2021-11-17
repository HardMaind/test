import React, { Component } from "react";
import NavBar from "./components/navBar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <main className="main">
          <Counters />
        </main>
      </div>
    );
  }
}
export default App;
