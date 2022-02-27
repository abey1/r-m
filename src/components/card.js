import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SingleCharacter from "./singleCharacter";

export default function MediaCard(character) {
  const { name, image, species, status, type } = character.character;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <table className="table-secondary">
            <tr className="table-secondary">
              <td className="table-secondary">species</td>
              <td className="table-secondary">{species}</td>
            </tr>
            <tr className="table-secondary">
              <td className="table-secondary">type</td>
              <td className="table-secondary">{type}</td>
            </tr>
            <tr className="table-secondary">
              <td className="table-secondary">status</td>
              <td className="table-secondary">{status}</td>
            </tr>
          </table>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOpen}>
          Detail
        </Button>
      </CardActions>
      <SingleCharacter
        character={character.character}
        open={open}
        handleClose={handleClose}
      />
    </Card>
  );
}
