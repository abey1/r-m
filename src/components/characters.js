import React, { useEffect, useState } from "react";
import MediaCard from "./card";

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
    <div style={{ margin: "50px" }} className="container">
      <div className="row">
        {characters.map((character) => {
          return (
            <div
              key={character.id}
              style={{ marginBottom: "30px" }}
              className="col-xs-12 col-sm-6 col-md-4 col-lg-3"
            >
              <MediaCard character={{ ...character }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
