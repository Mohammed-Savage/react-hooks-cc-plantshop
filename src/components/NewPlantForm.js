import React, { useState } from "react";

function NewPlantForm({addNewPlant}) {
    const [plant, setPlant] = useState({
      name: "", image: "", price: 0.
    });

    // const [plantName, setPlantName] = useState("")
    // const [plantImage, setPlantImage] = useState("")
    // const [plantPrice, setPlantPrice] = useState("")

    function handleChange(event) {
      setPlant({...plant, [event.target.name]: event.target.value})
    }

  function handleSubmit(event) {
    event.preventDefault();
    addNewPlant(plant)
  }

    return (
      <div className="new-plant-form">
        <h2>New Plant</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={plant.name} onChange={handleChange} placeholder="Plant name" />
          <input type="text" name="image" value={plant.image} onChange={handleChange} placeholder="Image URL" />
          <input type="number" name="price" step="0.01" value={plant.price} onChange={handleChange} placeholder="Price" />
          <button type="submit">Add Plant</button>
        </form>
      </div>
    );
}

export default NewPlantForm;
