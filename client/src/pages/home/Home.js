import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__title">
          <h3>
            The new era of electronic <span>payments</span>
          </h3>
          <h4>
            New level finance product with new functionality that is available
            to everyone
          </h4>
        </div>
        <div className="home__button">
          <button className="get__app">Get the app</button>
          <button className="get__started">Get started</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
