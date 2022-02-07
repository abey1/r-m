import React, { useEffect, useState } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const getAllCharacters = async () => {
    const data = await fetch("https://rickandmortyapi.com/api/character").then(
      (res) => res.json()
    );
    setCharacters(data.results);
  };
  useEffect(() => {
    getAllCharacters();
  }, []);
  return (
    <div>
      {characters.map((character) => {
        return <h2 key={character.id}>{character.name}</h2>;
      })}
    </div>
  );
};

export default Characters;
