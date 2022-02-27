import React, { useState, useEffect } from "react";
import Residents from "./residents";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Loading from "../loading";

const Locations = () => {
  const url = "https://rickandmortyapi.com/api/location";

  const [results, setResults] = useState([]);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const d = await fetch(url).then((res) => res.json());
    setResults(d.results);
    setInfo(d.info);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div>
      {results.map((location, index) => {
        return (
          <Card style={{ marginTop: "30px" }}>
            <CardContent key={index}>
              <div>
                <p>
                  <h2>{location.name}</h2>
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#collapseExample" + index}
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Residents
                  </button>
                </p>
                <div className="collapse" id={"collapseExample" + index}>
                  <Residents residents={location.residents} />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default Locations;
