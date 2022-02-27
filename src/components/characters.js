import React, { useEffect, useState } from "react";
import MediaCard from "./card";
import BasicPagination from "./pagination";
import Loading from "../loading";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getAll = async () => {
    const data = await fetch(
      "https://rickandmortyapi.com/api/character/?page=" + page
    ).then((res) => res.json());
    setCharacters(data.results);
    setLoading(false);
  };
  useEffect(() => {
    getAll();
  }, [page]);
  return loading ? (
    <Loading />
  ) : (
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BasicPagination pages={42} setPage={setPage} />
      </div>
    </div>
  );
};

export default Characters;
