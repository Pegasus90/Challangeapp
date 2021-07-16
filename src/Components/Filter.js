import React from "react";
import { Input } from "reactstrap";

const Filter = ({ handleSearch }) => {
  return (
    <div className="col-md-8">
      <Input
        type="text"
        placeholder="Search for user..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default Filter;
