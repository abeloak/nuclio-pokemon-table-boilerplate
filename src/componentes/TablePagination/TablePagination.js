import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import './TablePagination.css'

const TablePagination = props => {
  const { pageSize, pageNumber, maxPage, onChangeSize, onChangePage } = props;

  const pageSizes = ['10', '15', '20', '50'];

  const pages = [...Array(maxPage).keys()].map(i => i + 1);

  return (
    <div className={'paginationRoot'}>
      <div className={'paginationItem'}>
        <span>Size</span>
        <Dropdown options={pageSizes} selectedOption={pageSize} onChange={onChangeSize} />
      </div>
      <div className={'paginationItem'}>
        <span>Page</span>
        <Dropdown options={pages} selectedOption={pageNumber} onChange={onChangePage} />
      </div>
    </div>
  );
};

export default TablePagination;