import React, { useState, useEffect } from "react";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    // Fetch a random beer from the API
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => response.json())
      .then((data) => {
        setRandomBeer(data);
      })
      .catch((error) => {
        console.error("Error fetching random beer:", error);
      });
  }, []);

  if (!randomBeer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="random-beer-page">
      <img src={randomBeer.image_url} alt={randomBeer.name} />
      <h2>{randomBeer.name}</h2>
      <p>{randomBeer.tagline}</p>
      <p>First Brewed: {randomBeer.first_brewed}</p>
      <p>Attenuation Level: {randomBeer.attenuation_level}</p>
      <p>{randomBeer.description}</p>
      <p>Contributed by: {randomBeer.contributed_by}</p>
    </div>
  );
}

export default RandomBeerPage;
