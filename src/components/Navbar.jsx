import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="ui pointing secondary menu">
        <a className="ui item">Global</a>
        <a className="ui item">Local</a>
      </nav>
      <nav className="ui fluid five item pointing secondary menu">
        <a className="ui item">News</a>
        <a className="ui item">Food</a>
        <a className="ui item">Tech</a>
        <a className="ui item">Culture</a>
        <a className="ui item">Sports</a>
      </nav>
    </>
  );
};

export default Navbar;
