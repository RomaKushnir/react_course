import React from "react";

const UncontrolledInput = React.forwardRef(({ placeholder }, ref) => {
  return <input type="text" ref={ref} placeholder={placeholder} />;
});

export default UncontrolledInput;
