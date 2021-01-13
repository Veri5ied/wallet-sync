import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__title">
          <h2>
            The new era of electronic <span>payments</span>
          </h2>
          <h3>
            New level finance product with new functionality that is available
            to everyone
          </h3>
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
