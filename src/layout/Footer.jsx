import React from "react";

function Footer() {
  return (
    <footer className="page-footer cyan ">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} by Sergei Vaskin
          <a className="grey-text text-lighten-4 right" href="https://github.com/sergeivaskin1991/react-movies" target="_blank">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
