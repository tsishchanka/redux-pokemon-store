import { memo } from "react";
import { Pagination } from "@mui/material";

const CustomPagination = ({ currentPage, onPageChange, pageCount }) => {
  return (
    <div>
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={(event, page) => onPageChange(page)}
      />
    </div>
  );
};

export default memo(CustomPagination);
