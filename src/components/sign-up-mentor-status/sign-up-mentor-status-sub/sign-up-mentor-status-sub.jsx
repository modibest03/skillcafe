import React from "react";

import SignUpMentorStatusForm from "../sign-up-mentor-status-form/sign-up-mentor-status-form";

import "./sign-up-mentor-status-sub.scss";

const SignUpMentorStatusSub = () => {
  return (
    <div className="sig-up-mentors sign-up-profile-sub">
      <center className="sign-up-mentor-form-header sign-up-mentor-status-header">
        <h4 className="sign-up-mentor-form-header__text">
          <span className="sign-up-mentor-form-header__text-bg">
            Welcome Mentor
          </span>
          Kindly complete your profile to proceed
        </h4>
      </center>
      <SignUpMentorStatusForm />
    </div>
  );
};

export default SignUpMentorStatusSub;
