import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const { beerId } = useParams(); // Access the beerId parameter from the URL
  const [beerDetails, setBeerDetails] = useState(null);

  useEffect(() => {
    // Fetch the details of the specific beer using the beerId parameter
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => response.json())
      .then((data) => {
        setBeerDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching beer details:", error);
      });
  }, [beerId]);

  if (!beerDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="beer-details-page">
      <img src={beerDetails.image_url} alt={beerDetails.name} />
      <h2>{beerDetails.name}</h2>
      <p>{beerDetails.tagline}</p>
      <p>First Brewed: {beerDetails.first_brewed}</p>
      <p>Attenuation Level: {beerDetails.attenuation_level}</p>
      <p>{beerDetails.description}</p>
      <p>Contributed by: {beerDetails.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;
