import React from "react";

import { Form, Input, Button } from "antd";

import "antd/dist/antd.css";

import "./sign-up-mentor-profile-form.scss";

const SignUpMentorProfileForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <center className="mento-form-profile">
      <Form
        name="complex-form"
        onFinish={onFinish}
        layout="vertical"
        className="mento-form-profile__form"
      >
        <Form.Item label="Fullname" className="mento-form-profile__form-item">
          <Form.Item name="username" noStyle>
            <Input
              placeholder="Isaac Abdul Leo"
              className="mento-form-profile__input"
            />
          </Form.Item>
        </Form.Item>

        <Form.Item
          label="Phone"
          className="mento-form-profile__form-item"
          id="color"
        >
          <Form.Item
            name="username"
            noStyle
            rules={[{ required: true, message: "Phone number is required" }]}
          >
            <Input
              placeholder="081691999"
              className="mento-form-profile__input"
            />
          </Form.Item>
        </Form.Item>

        <Form.Item label="Address" className="mento-form-profile__form-item">
          <Form.Item name="username" noStyle>
            <Input
              placeholder="Home Address"
              className="mento-form-profile__input"
            />
          </Form.Item>
        </Form.Item>

        <Form.Item className="mento-form-profile__button-form">
          <Button
            type="primary"
            htmlType="submit"
            className="mento-form-profile__button"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </center>
  );
};

export default SignUpMentorProfileForm;
