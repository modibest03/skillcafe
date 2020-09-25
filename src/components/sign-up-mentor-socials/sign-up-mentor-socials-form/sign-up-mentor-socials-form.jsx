import React from "react";

import { Form, Input, Button } from "antd";

import "antd/dist/antd.css";

const SignUpMentorSocialsForm = () => {
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
        <Form.Item
          label="Availability"
          className="mento-form-profile__form-item"
        >
          <Form.Item
            name="availability"
            noStyle
            rules={[{ required: true, message: "Title is required" }]}
          >
            <Input
              placeholder="12 hours per week"
              className="mento-form-profile__input"
            />
          </Form.Item>
        </Form.Item>

        <Form.Item
          label="Mode of Communication"
          className="mento-form-profile__form-item"
        >
          <Form.Item
            name="communication"
            noStyle
            rules={[
              { required: true, message: "Years of experience is required" },
            ]}
          >
            <Input
              placeholder="Email, skype, Whatsapp"
              className="mento-form-profile__input "
            />
          </Form.Item>
        </Form.Item>

        <Form.Item label="LimkedIn" className="mento-form-profile__form-item">
          <Form.Item name="limkedin" noStyle>
            <Input
              placeholder="Nodejs, Django, Angular"
              className="mento-form-profile__input"
            />
          </Form.Item>
        </Form.Item>

        <Form.Item
          label="Secondary Stack"
          className="mento-form-profile__form-item"
        >
          <Form.Item name="secondarystack" noStyle>
            <Input
              placeholder="Nodejs, Django, Angular"
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

export default SignUpMentorSocialsForm;
