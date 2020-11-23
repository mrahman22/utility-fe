import React from "react";

const GroupBy = (props) => {
  return (
    <div>
      sortBy:
      <select
        onChange={(e) => {
          props.handleGroup(e.target.value);
        }}
      >
        <option value="select" defaultValue>
          all
        </option>
        <option value="type">type</option>
      </select>
    </div>
  );
};

export default GroupBy;