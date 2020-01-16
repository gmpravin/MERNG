import React from "react";

const Option = ({ data }) => {
  return data.map(i => {
    return (
      <option key={i.id} value={i.id}>
        {i.name}
      </option>
    );
  });
};

export default Option;
