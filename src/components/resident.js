import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Card } from "@mui/material";

const Resident = (props) => {
  const { url } = props;
  const [data, setData] = useState({});

  const getData = async () => {
    const d = await fetch(url).then((res) => res.json());
    setData(d);
  };

  useEffect(() => {
    getData();
    console.log(data.id);
  }, []);

  return (
    <Card>
      <Avatar alt="Remy Sharp" src={data.image} />
      <h6>{data.name}</h6>
    </Card>
  );
};

export default Resident;
