import React from "react";

import SignUpMentorSubForm from "../sign-up-mentor-sub-form/sign-up-mentor-sub-form";

import { UserOutlined } from "@ant-design/icons";

import "./sign-up-mentor-sub.scss";

const SignUpMentorSub = () => (
  <div className="sign-up-sub">
    <div className="sign-up-sub__form-svg__box">
      <UserOutlined className="sign-up-sub__form-svg" />
    </div>

    <div className="sign-up-sub__text-box">
      <span className="sign-up-sub__text">
        <span className="sign-up-sub__text-bg">Sign up as a mentor</span>
        Create a free account on Devias and get started
      </span>
    </div>
    <SignUpMentorSubForm />
  </div>
);

export default SignUpMentorSub;
