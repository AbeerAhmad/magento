import { Table, Input, Select } from 'antd';
import React, { Component } from "react"
import {connect} from 'react-redux'
import './allUsers.css';
// import {Link} from "react-router-dom";
const Search = Input.Search;
const { Option }= Select;

const columns = [
    {
        title: 'id',
        dataIndex: 'key',
        
    },
    {
        title: 'User Name',
        dataIndex: 'userName',
    },
    {
        title: 'First Name',
        dataIndex: 'firstName',
    },
    {
        title: 'Last Name',
        dataIndex: 'lastName',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
    
];


const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect : (record, selected, selectedRows, nativeEvent) => {
        console.log(record)
    },

    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

class AllUsers extends Component {

    state={
        key:"",
        userName:"",
        firstName:"",
        lastName:"",
        email:"",
        status:"",
        data:[]
    }
    componentDidMount(){
        this.setState({data:this.props.users})
    }

    handleClick=(e)=>{
        console.log("this click in me" + e.target)
    }
    handleRoute=(e)=>{
      // console.log();
      if(e.key>=1)
      this.props.history.push("/dashboard/setting/user/edituser/"+e.key);
    }
    render() {
        // const data = this.props.orders
        // function handleChange(value) {
        //     console.log(`selected ${value}`);
        //     this.setState({status:value});
        //   }
          
       const inputFields=[
            { 
        key:<Input onChange={(e)=>{ this.setState({key:e.target.value})} } />,
          userName:<Input onChange={ (e)=> {this.setState({userName:e.target.value.toLowerCase()}) } } />,
          firstName:<Input onChange={ (e)=>{ this.setState({firstName:e.target.value.toLowerCase()}) } } />,
          lastName:<Input onChange={ (e)=>{ this.setState({lastName:e.target.value.toLowerCase()}) } } />,
          email:<Input onChange={ (e)=>{ this.setState({email:e.target.value.toLowerCase()}) } } />,
          status:<Select defaultValue="Active" style={{ width: 120 }} onChange={(value)=>{ this.setState({status:value.toLowerCase()}) }}>
      <Option value="Active">Active</Option>
      <Option value="Inactive">Inactive</Option>
    </Select>
    
        }
        ]
 var data=this.state.data;
        const dataa=[
          
        
    ]
    let fData=data.filter( 
        (value)=>{
        return value.key.includes(this.state.key)     
        && value.userName.toLowerCase().includes(this.state.userName)
        && value.firstName.toLowerCase().includes(this.state.firstName) 
        && value.lastName.toLowerCase().includes(this.state.lastName) 
        && value.email.toLowerCase().includes(this.state.email) 
        && value.status.toLowerCase().includes(this.state.status) 
        }
        
        )
        
        return (
            <div>
                {/* <Link to="/dashboard/setting/user/edituser">Settings</Link> */}
                  <h1 style={{fontSize:24}}>All Users</h1>
                <Search
                    placeholder="Search User"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                />
                <Table className="sales-order-table"  rowSelection={rowSelection} onRowClick={e=>{this.handleRoute(e)}}  columns={columns} dataSource={[...inputFields,...fData]} />
            </div>
        )
    }
}
const mapStateToProps = store => ({
    users: store.AllUsers
  });
export default connect (mapStateToProps)( AllUsers);



