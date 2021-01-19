import React, { Component } from "react";
import Header from "./components/header";
import "./app.scss";
import Headline from "./components/headline";

const tempArr = [
  {
    name: "flo",
    age: 25,
    onlineStatus: true,
  },
];

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Headline
          header="Post"
          desc="Click the button to render posts"
          tempArr={tempArr}
        />
      </div>
    );
  }
}

export default App;
