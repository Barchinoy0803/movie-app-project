import React from 'react';
import Pagination from '@mui/material/Pagination';

const PaginationP = ({ currentPage, totalPages, onPageChange }) => {
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={handleChange}
      color="primary"
      shape="rounded"
      siblingCount={1}
      boundaryCount={1}
      showFirstButton
      showLastButton
    />
  );
};

export default PaginationP;
