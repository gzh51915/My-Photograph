import React from "react";
import { Table, Button, Pagination } from "antd";
import http from "./http";
import { Redirect, Link } from "react-router-dom";
import { resRemove, Allremove, resUpdate } from "../api";

const columns = [
  {
    title: "UserName",
    dataIndex: "username",
    key: "_id",
  },
  {
    title: "PassWord",
    dataIndex: "password",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Action",
    dataIndex: "",

    render: (props) => {
      const id = props._id
      const remove = async () => {
        await resRemove(id)
        return <UserInfo />
      }
      const update = async () => {
        console.log(props._id)
        const id = props._id
        const data = await resUpdate(id)
        console.log(data)
      
      }
      return (
        <div>
          <Button size="small" ><Link to={{pathname:"/inser",state:{data:"data"}}} onClick={update}>Update</Link></Button>
          <Button size="small" danger onClick={remove}>Delete</Button>
        </div>
      )
    }
  },
];

class UserInfo extends React.Component {
  constructor() {
    super();
    this.deleteItem = this.deleteItem.bind(this);
  }

  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);

    this.setState({ selectedRowKeys });
  };

  async componentDidMount() {
    const { data } = await http.get("/goods");
    console.log(data);
    this.setState({
      data,
      pagination: {
        pageSize: 3,
      },
    });
  }

  deleteItem = (idx) => {
    console.log(11111);
  };
  removeAll = async () => {
    // console.log(this.props)
    const find = await Allremove()
    console.log("find", find)
  }

  render() {
    const user = JSON.parse(sessionStorage.getItem("user_msg"))
    console.log("user", user)
    if (!user) {
      return <Redirect to="/login" />
    }
    const { data, pagination, loading, selectedRowKeys } = this.state;
    // console.log(data,selectedRowKeys);

    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    const hasSelected = selectedRowKeys.length > 0;

    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            Reload
          </Button>
          <Button type="primary" style={{ float: "right" }}>
            <Link to="/inser">增加</Link>
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>

        <Table
          rowKey="_id"
          pagination={pagination}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
        <Button onClick={this.removeAll}>全删</Button>
      </div>
    );
  }
}

export default UserInfo;
