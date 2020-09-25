import React from "react";

import { Form, Input, Button } from "antd";

import "antd/dist/antd.css";

import "./sign-up-mentor-status-form.scss";

const SignUpMentorStatusForm = () => {
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
        <Form.Item label="Title" className="mento-form-profile__form-item">
          <Form.Item
            name="title"
            noStyle
            rules={[{ required: true, message: "Title is required" }]}
          >
            <Input
              placeholder="Fullstack/Frontend Developer/ Back End devloper"
              className="mento-form-profile__input"
            />
          </Form.Item>
        </Form.Item>

        <Form.Item
          label="Years of Experience"
          className="mento-form-profile__form-item"
        >
          <Form.Item
            name="experience"
            noStyle
            rules={[
              { required: true, message: "Years of experience is required" },
            ]}
          >
            <Input
              placeholder="4"
              className="mento-form-profile__input mento-form-status__input"
            />
          </Form.Item>
        </Form.Item>

        <Form.Item
          label="Primary Stack"
          className="mento-form-profile__form-item"
        >
          <Form.Item
            name="primarystack"
            noStyle
            rules={[{ required: true, message: "Primary stack is required" }]}
          >
            <Input
              placeholder="Nodejs, Django, Angular"
              className="mento-form-profile__input"
            />
          </Form.Item>
        </Form.Item>

        <Form.Item label="Tools" className="mento-form-profile__form-item">
          <Form.Item
            name="tools"
            noStyle
            rules={[{ required: true, message: "Tools is required" }]}
          >
            <Input
              placeholder="AWS, Netlify, Jiira"
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

export default SignUpMentorStatusForm;
