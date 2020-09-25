import React from "react";

import SignUpMentorSocialsForm from "../sign-up-mentor-socials-form/sign-up-mentor-socials-form";

const SignUpMentorSocialsSub = () => {
  return (
    <div className="sign-up-profile-sub">
      <center className="sign-up-mentor-form-header sign-up-mentor-status-header">
        <h4 className="sign-up-mentor-form-header__text">
          <span className="sign-up-mentor-form-header__text-bg">
            Welcome Mentor
          </span>
          Kindly complete your profile to proceed
        </h4>
      </center>
      <SignUpMentorSocialsForm />
    </div>
  );
};

export default SignUpMentorSocialsSub;
