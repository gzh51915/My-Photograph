import React from "react";
import { Table, Button, Pagination, Popconfirm } from "antd";
import http from "./http";
import { Redirect, Link } from "react-router-dom";
import { resRemove, Allremove, resUpdate } from "../api";
// import confirm from "antd/lib/modal/confirm";


class UserInfo extends React.Component {

  constructor() {
    super();
    this.remove = this.remove.bind(this)
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      columns: [
        {
          title: "UserName",
          dataIndex: "username",
          key: "_id" + Date.now(),
        },
        {
          title: "PassWord",
          dataIndex: "password"
        },
        {
          title: "Age",
          dataIndex: "age"
        },
        {
          title: "Address",
          dataIndex: "address",
        },
        {
          title: "Action",
          dataIndex: '',

          render: (props, record) => {
            return (
              <div>
                <Button size="small" ><Link to={{ pathname: "/inser", state: { props } }} >编辑</Link></Button>
                <Popconfirm title="Sure to delete?" onConfirm={() => { this.remove(props._id) }}>
                  <Button size="small" danger >
                    删除 </Button>
                </Popconfirm>
              </div>
            )
          }
        },
      ]
    }
  }
  remove = async (id) => {
    const { data } = this.state
    let res = await resRemove(id)

    if (1) {
      this.setState({
        data: data.filter(item => item._id !== id)
      })
    }

  }


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
    this.setState({
      data,
      pagination: {
        pageSize: 3,
      },
    });

  }

  removeAll = async () => {
  };

  render() {
    const user = JSON.parse(sessionStorage.getItem("user_msg"))
    console.log(user)
    if (!user) {
      return <Redirect to="/login" />;
    }
    const { data, pagination, loading, selectedRowKeys } = this.state;

    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    const hasSelected = selectedRowKeys.length > 0;

    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button danger onClick={this.removeAll}>全删</Button>
          <Button type="primary" style={{ float: "right" }}>
            <Link to={{ pathname: "/inser", state: { username: "", password: "", _id: "", address: "", age: '' } }} >增加</Link>
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>

        <Table
          rowKey="_id"
          pagination={pagination}
          columns={this.state.columns}
          dataSource={data}
        />

      </div>
    );
  }
}

export default UserInfo;
