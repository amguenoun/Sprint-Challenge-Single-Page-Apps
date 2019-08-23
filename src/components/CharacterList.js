import React, { useEffect, useState } from "react";
import Axios from "axios";

import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get('https://rickandmortyapi.com/api/character/')
      .then(resp => setCharList(resp.data.results))
      .catch(error => console.log("Axios Error:", error))
  }, []);

  return (
    <section className="character-list grid-view">
      {charList.map(character => {
        return <CharacterCard character={character} key={character.id} />
      })}
    </section>
  );
}
