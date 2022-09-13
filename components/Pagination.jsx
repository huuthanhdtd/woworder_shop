import React from 'react';
import { Pagination } from '@material-ui/lab';

const Paginate = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Pagination
      count={20}
      page={page}
      shape="rounded"
      onChange={handleChange}
    />
  );
};

export default Paginate;
