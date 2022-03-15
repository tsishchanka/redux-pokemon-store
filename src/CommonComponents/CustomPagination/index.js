import { memo } from "react";
import { Pagination } from "@mui/material";
import styles from "./styles.module.scss";

const CustomPagination = ({ currentPage, onPageChange, pageCount }) => {
  return (
    <div className={styles.container}>
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={(event, page) => onPageChange(page)}
      />
    </div>
  );
};

export default memo(CustomPagination);
