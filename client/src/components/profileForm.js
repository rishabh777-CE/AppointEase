import { Button, Col, Form, Input, Row, TimePicker } from "antd";
import moment from "moment";
import React from "react";

function userForm({ username,email }) {
  return (
     <Form
      layout="vertical"
      >
      <h1 className="card-title mt-3">Personal Information</h1>
      <Row gutter={20}>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Name"
            name="Name"
            initialValue={username}
            rules={[{ required: true }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="email"
            name="email"
            initialValue={email}
            rules={[{ required: true }]}
          >
            <Input placeholder="email" />
          </Form.Item>
        </Col>
       
      </Row>
    </Form>

  );
}

export default userForm;
