import React from "react";
import { Table, Button, Pagination, Popconfirm } from "antd";
import http from "./http";
import { Redirect, Link } from "react-router-dom";
import { resRemove, Allremove, resUpdate } from "../api";


class UserInfo extends React.Component {

  constructor() {
    super();

    this.remove = this.remove.bind(this);
    this.removeAll = this.removeAll.bind(this)

    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      columns: [
        {
          title: "id",
          dataIndex: "",
          key: "_id" + Date.now(),
        render:(text,record,index)=><span>{index+1}</span>
        },
        {
          title: "商品名称",
          dataIndex: "title",
        },
        {
          title: "原价",
          dataIndex: "price",
        },
        {
          title: "现价",
          dataIndex: "resprice",
        },
        {
          title: "操作",
          dataIndex: '',
          render: (props) => {
            return (
              <div>
                <Button size="small" ><Link to={{ pathname: "/admin/inser", state: { props } }} >编辑</Link></Button>
                <Popconfirm title="确定删除吗?" cancelText="取消" okText="确认" okType="danger" onConfirm={() => { this.remove(props._id) }}>
                  <Button size="small" danger >删除</Button>
                </Popconfirm>

              </div>
            )
          }
        },
      ]
    }
  }
  //删除单个商品
  remove = async (id) => {
    const { data } = this.state
    let res = await resRemove(id)

    if (1) {
      this.setState({
        data: data.filter(item => item._id !== id)
      })
    }
  }

  //删除所有商品
  removeAll = async () => {
    // await Allremove();
    this.setState({
      data: []
    })
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
    this.setState({
      data,
      pagination: {
        pageSize: 3,
      },
    });
  }

  render() {

    // 判断是否登录
    const user = JSON.parse(sessionStorage.getItem("user_msg"))
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
        <Popconfirm title="确定删除吗?" cancelText="取消" okText="确认" okType="danger"
        onConfirm={() => { this.removeAll() }}
        >
           <Button type="primary" danger >全删</Button>

        </Popconfirm>
          <Button type="primary" style={{ float: "right" }}>
            <Link to={{ pathname: "/admin/inser", state: { username: "", password: "", _id: "", address: "" } }} >添加</Link>
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>

        <Table
          rowKey="_id"
          pagination={pagination}
          // rowSelection={rowSelection}
          columns={this.state.columns}
          dataSource={data}
        />

      </div>
    );
  }
}

export default UserInfo;
