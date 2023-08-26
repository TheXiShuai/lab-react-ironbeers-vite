import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import beerImage from "../assets/beers.png";
import randomBeerImage from "../assets/random-beer.png";
import newBeerImage from "../assets/new-beer.png";

function HomePage() {
  return (
    
    <div className="home-page">
      <Navbar/>
      <div className="home-header">
        <h1>Welcome to Our Brewery</h1>
        <p>Discover a world of beers</p>
      </div>
      <div className="beer-links">
        <Link to="/beers" className="beer-link">
          <div className="beer-card">
            <img src={beerImage} alt="Explore our collection of beers" />
            <h2>All Beers</h2>
            <p>Explore our collection of beers</p>
          </div>
        </Link>
        <Link to="/random-beer" className="beer-link">
          <div className="beer-card">
            <img src={randomBeerImage} alt="Feeling lucky? Get a random beer" />
            <h2>Random Beer</h2>
            <p>Feeling lucky? Get a random beer</p>
          </div>
        </Link>
        <Link to="/new-beer" className="beer-link">
          <div className="beer-card">
            <img src={newBeerImage} alt="Brew a new beer and add to our collection" />
            <h2>New Beer</h2>
            <p>Brew a new beer and add to our collection</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
