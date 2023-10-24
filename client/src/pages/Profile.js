import { Button, Col, Form, Input, Row, TimePicker } from "antd";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import ProfileForm from "../components/profileForm";
import userForm from "../components/profileForm";


function Profile() {
  const [collapsed, setCollapsed] = useState(false);
  const {user} = useSelector((state) => state.user);
  return (
    <Layout>
      <h1 className="page-title">User Profile</h1>
      <hr />
      {user && <ProfileForm username={user?.name} email= {user?.email} />}
    </Layout>
  );
  }
export default Profile;
