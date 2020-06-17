import React from "react";
import { Table, Button, Pagination } from "antd";
import http from "./http";
import { Redirect, Link } from "react-router-dom";
import { resRemove, Allremove, resUpdate } from "../api";


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
          dataIndex: "password",
        },
        {
          title: "Address",
          dataIndex: "address",
        },
        {
          title: "Action",
          dataIndex: '',

          render: (props) => {
            // const id = props._id
            // const remove = async () => {
            //   // await resRemove(id)

            // }
            // const update = async () => {
            //   const id = props._id
            //   // data = await resUpdate(id)
            // }
            return (
              <div>
                <Button size="small" ><Link to={{ pathname: "/inser", state: { props } }} >编辑</Link></Button>
                <Button size="small" danger onClick={this.remove.bind(this, props._id)}>删除</Button>
              </div>
            )
          }
        },
      ]
    }
  }
  remove = async (id) => {
    const {data} = this.state
    // let res = await resRemove(id)
    console.log(id);
    
    if(1){
      this.setState({
        data:data.filter(item=>item._id!==id)
      })
    }
    console.log(this.state.data);
    
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
    // console.log(data);
    this.setState({
      data,
      pagination: {
        pageSize: 3,
      },
    });
  }

  removeAll = async () => {
    // console.log(this.props)
    const find = await Allremove()
    console.log("find", find)
  }

  render() {
    const user = JSON.parse(sessionStorage.getItem("user_msg"))
    if (!user) {
      return <Redirect to="/login" />
    }
    const { data, pagination, loading, selectedRowKeys } = this.state;
    console.log(data);

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
            重置
          </Button>
          <Button type="primary" style={{ float: "right" }}>
            <Link to={{ pathname: "/inser", state: { username: "", password: "", _id: "", address: "" } }} >增加</Link>
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>

        <Table
          rowKey="_id"
          pagination={pagination}
          rowSelection={rowSelection}
          columns={this.state.columns}
          dataSource={data}
        />
        <Button onClick={this.removeAll}>全删</Button>
      </div>
    );
  }
}

export default UserInfo;
