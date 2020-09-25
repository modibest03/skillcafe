import React from "react";

import "./sign-up-mentor-svg.scss";

const SignUpMentorSvg = ({ url, children }) => {
  return (
    <div className="sign-up-mentor-svg">
      <div className="sign-up-mentor-svg__img-box">
        <img src={url} alt="" className="sign-up-mentor-svg__img" />
      </div>
      <div className="sign-up-mentor-svg__text-box">{children}</div>
    </div>
  );
};

export default SignUpMentorSvg;
