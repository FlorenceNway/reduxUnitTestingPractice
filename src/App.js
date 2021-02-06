import React, { Component } from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import SharedButton from "./components/button/SharedButton";
import ListItem from "./components/listitem/ListItem";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";
import "./app.scss";

const tempArr = [
  {
    name: "flo",
    age: 25,
    onlineStatus: true,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch,
    };
    return (
      <div>
        <Header />
        <Headline
          header="Post"
          desc="Click the button to render posts"
          tempArr={tempArr}
        />
        <SharedButton {...configButton} />
        {posts.length > 0 && (
          <div>
            {posts.map((post, index) => {
              const { title, body } = post;
              const configListItem = {
                title,
                desc: body,
              };
              return <ListItem key={index} {...configListItem} />;
            })}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.postReducer,
  };
};

export default connect(mapStateToProps, { fetchPosts })(App); //connect component to store
