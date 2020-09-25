import React from "react";

import SignUpMentorSvg from "../../sign-up-mentor-svg/sign-up-mentor-svg";
import SignUpMentorStatusSub from "../sign-up-mentor-socials-sub/sign-up-mentor-socials-sub";

import messysvg from "../../../assets/ReadingDoodle@2x.png";

const SignUpMentorSocialsMain = () => {
  return (
    <div className="sign-up-profile">
      <SignUpMentorSvg url={messysvg}>
        <p className="sign-up-mentor-svg__text">
          Help people learn new skills, advance their careers, and explore their
          hobbies by sharing your knowledge.
        </p>
      </SignUpMentorSvg>
      <SignUpMentorStatusSub />
    </div>
  );
};

export default SignUpMentorSocialsMain;
