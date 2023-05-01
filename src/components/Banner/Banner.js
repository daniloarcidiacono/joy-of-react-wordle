import React from "react";

function Banner({ status, children }) {
  return (
    <div class={`${status} banner`}>
      <p>
        {children}
      </p>
    </div>
  );
}

export default Banner;
