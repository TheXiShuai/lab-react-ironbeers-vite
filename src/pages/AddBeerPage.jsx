import React, { useState } from "react";

function AddBeerPage() {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();


    fetch("https://ih-beers-api2.herokuapp.com/beers/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("New beer added successfully!");
        } else {
          console.error("Failed to add new beer");
        }
      })
      .catch((error) => {
        console.error("Error adding new beer:", error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="add-beer-page">
      <h2>Add a New Beer</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Tagline:
          <input
            type="text"
            name="tagline"
            value={formData.tagline}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          First Brewed:
          <input
            type="text"
            name="first_brewed"
            value={formData.first_brewed}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Brewer's Tips:
          <input
            type="text"
            name="brewers_tips"
            value={formData.brewers_tips}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Attenuation Level:
          <input
            type="number"
            name="attenuation_level"
            value={formData.attenuation_level}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Contributed By:
          <input
            type="text"
            name="contributed_by"
            value={formData.contributed_by}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
  
}

export default AddBeerPage;
