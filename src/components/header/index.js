import React from "react";
import "./styles.scss";
import Logo from "../../assets/graphics/profile.jpg";

const Header = (props) => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoImg" src={Logo} alt="myLogo" />
          {/* <img data-test="logoImg" src={JestLogo} alt="Jest Logo" />
          <img data-test="logoImg" src={EnzymeLogo} alt="Enzyme Logo" /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
