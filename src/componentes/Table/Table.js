import React from "react";
import './Table.css';

const Table = props => {
  const { items, columnNames } = props;

  return(
    <div className="root">
      <div className="header">
        {columnNames.map(column => <div className="cell">{column}</div>)}
      </div>
      <div className="content">
        {items.map(item => {
          return(
            <div className={"row"}>
              {columnNames.map(columName => {
                return (<div className="cell"> {item[columName]} </div>);
              })}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Table;