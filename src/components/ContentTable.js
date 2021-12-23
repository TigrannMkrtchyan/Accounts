import React from "react";
import { Table, Tag, Space } from "antd";
import "antd/dist/antd.css";
import data from "../data";
import { Link, Outlet } from "react-router-dom";
import AccountData from "./AccountData";

const ContentTable = () => {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Created on",
      dataIndex: "createdOn",
      key: "createdOn",
    },
    {
      title: "Owner",
      key: "owner",
      dataIndex: "owner",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => {
        return <Link to={`/account/${record.id}`}>View</Link>;
      },
    },
  ];

  <Outlet />;

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default ContentTable;
