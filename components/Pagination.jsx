import React from 'react';
import { Pagination } from '@material-ui/lab';

const Paginate = ({ ...props }) => {
  return <Pagination shape="rounded" {...props} />;
};

export default Paginate;
