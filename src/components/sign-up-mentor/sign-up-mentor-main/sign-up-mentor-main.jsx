import React from "react";

import SignUpMentorSub from "../sign-up-mentor-sub/sign-up-mentor-sub";

import "./sign-up-mantor-main.scss";

const SignUpMentorMain1 = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="sign-up-main">
        <SignUpMentorSub />
        <div className="sign-up-main__text-box">
          <div className="sign-up-main__text">
            <span className="sign-up-main__text--bg">Welcome to Devias </span>
            create an account and get free resources
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpMentorMain1;
