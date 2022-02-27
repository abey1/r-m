import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const BasicPagination = (props) => {
  const { pages, setPage } = props;
  const onChange = (event, value) => {
    setPage(value);
  };
  return (
    <Stack spacing={2}>
      <Pagination count={pages} color="primary" onChange={onChange} />
    </Stack>
  );
};

export default BasicPagination;
