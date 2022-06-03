import React from "react";
import ReactImageMagnify from "react-image-magnify";
import watchImg300 from "../../Assets/small1.png";
import watchImg1200 from "../../Assets/big1.png";
const MagnifierImg = () => {
  return (
    <div style={{ width: "400px", height: "400px" }}>
      <ReactImageMagnify
        width="200px"
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            isFluidWidth: true,
            src: watchImg300,
          },
          largeImage: {
            src: watchImg1200,
            width: 1200,
            height: 1200,
          },
        }}
      />
    </div>
  );
};

export default MagnifierImg;
