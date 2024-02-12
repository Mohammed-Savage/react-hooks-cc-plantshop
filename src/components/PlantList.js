import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, stockPlant}) {
  return (
    <ul className="cards">{
      plants
      // .filter(plant => !plant.sold)
      .map(plant => <PlantCard key={plant.id} plant={plant} stockPlant={stockPlant}/>)
      /* render PlantCards components in here */
      }</ul>
  );
}

export default PlantList;
