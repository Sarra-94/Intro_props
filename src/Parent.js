import React from "react";
import Child from "./Child";
const Parent = () => {
  const handleName = (name) => {
    alert(`Welcome ${name}`);
  };
  return (
    <div>
      <h2>this is Parent Component</h2>
      <Child
        //   props
        title="this is Child Component"
        number={2021}
        handleName={handleName}
      >
        {/* childrens */}
        <h2>this is children props</h2>
        <img src="https://cdn-media-1.freecodecamp.org/images/zdcDnVK0Okw3GBfFb8vzE3Ofi0uKUpD5KRRN" />
      </Child>
    </div>
  );
};

export default Parent;
