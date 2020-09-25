import React from "react";

import SignUpMentorProfileForm from "../sign-up-mentor-profile-form/sign-up-mentor-profile-form";

import "./sign-up-mentor-profile-sub.scss";

const SignUpMentorProfileSub = () => {
  return (
    <div className="sig-up-mentors sign-up-profile-sub">
      <center className="sign-up-mentor-form-header">
        <h4 className="sign-up-mentor-form-header__text">
          <span className="sign-up-mentor-form-header__text-bg">
            Welcome Mentor
          </span>
          Kindly complete your profile to proceed
        </h4>
        <img src="" alt="" srcset="" />
      </center>
      <SignUpMentorProfileForm />
    </div>
  );
};

export default SignUpMentorProfileSub;
