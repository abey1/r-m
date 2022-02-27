import React from "react";
import Resident from "./resident";
const residents = (props) => {
  const { residents } = props;

  return (
    <div className="row">
      {residents.map((resident, index) => {
        return (
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Resident key={index} url={resident} />
          </div>
        );
      })}
    </div>
  );
};

export default residents;
