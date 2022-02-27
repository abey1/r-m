import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const singleCharacter = (props) => {
  const { character, open, handleClose } = props;
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={character.image} alt={character.name} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {character.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <table className="table-secondary">
              <tr className="table-secondary">
                <td className="table-secondary">species</td>
                <td className="table-secondary">{character.species}</td>
              </tr>
              <tr className="table-secondary">
                <td className="table-secondary">type</td>
                <td className="table-secondary">{character.type}</td>
              </tr>
              <tr className="table-secondary">
                <td className="table-secondary">status</td>
                <td className="table-secondary">{character.status}</td>
              </tr>
            </table>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default singleCharacter;
