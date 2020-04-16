import React from "react";
import useCounter from "../hooks/useCounter";

const AddBanner = () => {
  const { count, up } = useCounter();
  return count < 2 && (
    <img
      onClick={up}
      src="https://dge4uaysoh8oy.cloudfront.net/lp/37/images/Pop-up-hero-visual.png"
      alt="oh no!"
    />
  );
};

export default AddBanner;
