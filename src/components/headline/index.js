import React, { Component } from "react";
import PropTypes from "prop-types";

class Headline extends Component {
  render() {
    const { header, desc } = this.props;

    if (!header) {
      return null;
    }

    return (
      <div data-test="HeadlineComponent">
        <h1 data-test="header">{header}</h1>
        <p data-test="desc">{desc}</p>
      </div>
    );
  }
}
Headline.propTypes = {
  // we dont use the library here
  header: PropTypes.string, // the proptypes where we specify  the data types of header
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool,
    })
  ),
};
export default Headline;
