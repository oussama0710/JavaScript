import React, { useState } from "react";

const Fetch = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const fetchPok = (e) => {
    e.preventDefault();
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response.results);
        setPokemon(response.results);
      })
  };
  return (
    <div>
      <button
        onClick={(e) => fetchPok(e)}>
        Fetch Pokemon
      </button>
      
      {pokemon.map((element,i) => {return <p key={i}>{element.name}</p>}
      )}
    </div>
  );
};

export default Fetch;
