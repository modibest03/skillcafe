import React from "react";

import { Form, Input, Button, Checkbox } from "antd";

import { Link } from "react-router-dom";

import "antd/dist/antd.css";

import "./sign-up-mentor-sub-form.scss";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const SignUpMentorSubForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="sign-up-1__form">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your name",
            },
          ]}
        >
          <Input placeholder="Full Name" className="sign-up-sub-form__input" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input placeholder="Email" className="sign-up-sub-form__input" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            placeholder="Password"
            className="sign-up-sub-form__input"
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Retype Password"
            className="sign-up-sub-form__input"
          />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject("Should accept agreement"),
            },
          ]}
        >
          <Checkbox>
            I have accepted the <Link to="terms">Term and Conditions </Link>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="sign-up-sub-form__button"
          >
            SIGN UP NOW
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpMentorSubForm;
