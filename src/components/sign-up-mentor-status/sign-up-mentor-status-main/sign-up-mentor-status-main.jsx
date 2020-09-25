import React from "react";

import SignUpMentorSvg from "../../sign-up-mentor-svg/sign-up-mentor-svg";
import SignUpMentorStatusSub from "../sign-up-mentor-status-sub/sign-up-mentor-status-sub";

import "./sign-up-mentor-status-main.scss";

import messysvg from "../../../assets/MessyDoodle (1)@2x.png";

const SignUpMentorStatusMain = () => {
  return (
    <div className="sign-up-profile">
      <SignUpMentorSvg url={messysvg}>
        <p className="sign-up-mentor-svg__text">
          Earn money every time a student purchases your course. <br /> Get paid
          monthly through PayPal or Payoneer, it’s your choice.
        </p>
      </SignUpMentorSvg>
      <SignUpMentorStatusSub />
    </div>
  );
};

export default SignUpMentorStatusMain;
