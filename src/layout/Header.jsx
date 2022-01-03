import React from "react";

function Header() {
  return (
		<nav className="cyan darken-3">
    <div className="nav-wrapper">
      <a href="!#" className="brand-logo left">React Movies</a>
      <ul id="nav-mobile" className="right hide-on-med">
        <li><a href="https://github.com/sergeivaskin1991/react-movies" target="_blank">Repo</a></li>
      </ul>
    </div>
  </nav>
  );
}

export { Header };
