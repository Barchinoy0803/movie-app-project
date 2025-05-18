import React from 'react';
import Pagination from '@mui/material/Pagination';
import { useStateValue } from '@/context';

const PaginationP = ({ currentPage, totalPages, onPageChange }) => {
  const [state] = useStateValue()
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
      sx={{
        backgroundColor: state.isDarkmode ? '#1e1e1e' : '#fff',
        color: state.isDarkmode ? '#d3d3d3' : '#000',
        borderRadius: 2,
        padding: '8px',
        '& .MuiPaginationItem-root': {
          color: state.isDarkmode ? '#fff' : '#000',
          borderColor: state.isDarkmode ? '#000' : '#ccc',
        },
        '& .Mui-selected': {
          backgroundColor: state.isDarkmode ? '#333' : '#ddd',
          color: state.isDarkmode ? '#fff' : '#000',
        },
      }}

    />
  );
};

export default PaginationP;
