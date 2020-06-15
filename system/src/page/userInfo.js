import React from 'react';
import { Table, Button,Pagination} from 'antd';
import http from './http'

const columns = [
	{

		title: 'UserName',
		dataIndex: 'username',
		key: '_id',
	},
	{
		title: 'PassWord',
		dataIndex: 'password',

	},
	{
		title: 'Address',
		dataIndex: 'address',

	},
	{
		title: 'Action',
		dataIndex: '',

		render:()=> <Button>Delete</Button>
 	},
  ];

class UserInfo extends React.Component{


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

	onSelectChange = selectedRowKeys => {
		console.log('selectedRowKeys changed: ', selectedRowKeys);

		this.setState({ selectedRowKeys });
	};

	async componentDidMount() {

		const { data } = await http.get('/goods');
		console.log(data);
		this.setState({
			data,
			pagination:{
				pageSize:3
			}
		})

	}

	// deleteItem(idx) {


	}
	render() {
		const {data,pagination, loading, selectedRowKeys } = this.state;
		// console.log(data,selectedRowKeys);

		const rowSelection = {
			selectedRowKeys,
			onChange: this.onSelectChange,
		};

		const hasSelected = selectedRowKeys.length > 0;

		return (
			<div>
				<div style={{ marginBottom: 16 }}>
					<Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
						Reload
			  </Button>
					<span style={{ marginLeft: 8 }}>
						{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
					</span>
				</div>

			<Table rowKey="_id" pagination={pagination}   rowSelection={rowSelection} columns={columns} dataSource={data} />
			<Button>全删</Button>
		  </div>
		);
	}
}





export default UserInfo;
