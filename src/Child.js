import React from "react";
import PropTypes from "prop-types";

const Child = ({ title: x, number, handleName, children }) => {
  return (
    <div>
      <h3>{x}</h3>
      <h4>{number}</h4>
      {children}
      <button onClick={() => handleName("seif")}>Details</button>
    </div>
  );
};

export default Child;
Child.defaultProps = {
  title: "inconnu",
  number: 0,
};
Child.propTypes = {
  number: PropTypes.number,
};
