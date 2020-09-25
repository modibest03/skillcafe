import React from "react";

import SignUpMentorSvg from "../../sign-up-mentor-svg/sign-up-mentor-svg";
import SignUpMentorProfileSub from "../sign-up-mentor-profile-sub/sign-up-mentor-profile-sub";

import "./sign-up-mentor-profile-main.scss";

import readingsvg from "../../../assets/ReadingDoodle@2x.png";

const SignUpMentorProfileMain = () => {
  return (
    <div className="sign-up-profile">
      <SignUpMentorSvg url={readingsvg}>
        <p className="sign-up-mentor-svg__text">
          Help people learn new skills, advance their careers, and explore their
          hobbies by sharing your knowledge.
        </p>
      </SignUpMentorSvg>
      <SignUpMentorProfileSub />
    </div>
  );
};

export default SignUpMentorProfileMain;
