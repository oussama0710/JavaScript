import React, {useEffect, useState } from "react";
import axios from "axios";

const Fetch = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [button, setButton] = useState(false)
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        setPokemon(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const fetchPok = (e) => {
    e.preventDefault();
    setButton(true)
  };
  return (
    <div>
      <button onClick={(e) => fetchPok(e)}>Fetch Pokemon</button>
      {button === true? pokemon.map((element, i) => {
        return <p key={i}>{element.name}</p>;
      }): <p></p>}
    </div>
  );
};

export default Fetch;
