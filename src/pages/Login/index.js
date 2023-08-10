import React from "react";
import { Form } from "antd";

import Button from "../../components/Button";
import { Link } from "react-router-dom";
function Login() {
  const onFinish = (values) => {
    console.log("success", values);
  };

  return (
    <div className="h-screen bg-primary flex item-center justify-center">
      <div className="authentication-form bg-white p-3">
        <h1 className="text-secondary text-2xl font-bold mb-1">S95-LIBRARY - LOGIN</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <input type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <input type="password" placeholder="password" />
          </Form.Item>

          

          <div className = "text-center mt-2 flex flex-col gap-1">
          <Button title="Login" type="submit" />
          <Link to= "/register"
          className ="text-primary text-sm "
          > Dont have an account? click here to Register</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
