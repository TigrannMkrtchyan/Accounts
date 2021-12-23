import React from "react";
import data from "../data";
import { useParams } from "react-router-dom";
import { Card } from "antd";
import "antd/dist/antd.css";

const AccountData = () => {
  const params = useParams();

  let arr = data.find((value) => {
    return value.id == params.id;
  });

  return (
    <Card title="Default size card" style={{ width: 300 }}>
      <p>{arr.id}</p>
      <p>{arr.name}</p>
      <p>{arr.createdOn}</p>
      <p>{arr.owner}</p>
      <p>{arr.updatedOn}</p>
    </Card>
  );
};

export default AccountData;
