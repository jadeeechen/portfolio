import React from "react";
import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      color="0, 0, 0"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2}
      clickables={[
        "a",
        "button",
        ".link"
      ]}
    />
  );
};

export default Cursor;