import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const BaseAPI = "http://localhost:6001/plants"

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => fetch(BaseAPI)
    .then(response => response.json())
    // .then(console.log)
    .then(setPlants)
  , []);

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} addNewPlant={addNewPlant}
      stockPlant={stockPlant} />
    </div>
  );

  function addNewPlant(plant) {
    // console.log("processing", plant)
    fetch(BaseAPI, {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(plant),
    })
    .then(response => response.json())
    .then(json => setPlants([...plants, json]))
    // setPlants([...plants, plant])
  }

  function stockPlant(plant) {
    // console.log(plant);
    setPlants(plants.map(p => p.id !== plant.id
      ? p
      : { ...p, sold: true }
      ))
  }
}

export default App;
