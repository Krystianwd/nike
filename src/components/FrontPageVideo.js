import React from "react";

const FrontPageVideo = () => {
  return (
    <video
      style={{
        marginTop: "30px",
        height: "50%",
        width: "100%",
        objectFit: "fill",
      }}
      autoPlay
      loop
      muted
    >
      <source src="nike_-_members_of_summer (720p).mp4" type="video/mp4" />
    </video>
  );
};

export default FrontPageVideo;
