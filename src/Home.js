import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
          alt="Fading Background"
        />
        <div className="home__row">
          <Product
            title="The lean startup"
            price={29.99}
            image="https://rmnetwork.org/newrmn/wp-content/uploads/2011/11/generic-book-cover.jpg"
            rating={5}
          />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />}
        </div>
      </div>
    </div>
  );
}

export default Home;
