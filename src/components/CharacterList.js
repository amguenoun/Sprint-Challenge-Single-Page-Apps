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
  }, [charList]);

  return (
    <section className="character-list grid-view">
      {charList.map(character => {
        return <CharacterCard image={character.image} key={character.id}
          species={character.species} name={character.name} status={character.status}
          origin={character.origin.name} location={character.location.name}
          episodes={character.episode.length} />
      })}
    </section>
  );
}
