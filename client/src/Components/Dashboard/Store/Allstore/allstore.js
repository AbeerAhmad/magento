import React,{Component} from 'react';
import './allstore.css'

import store from '../../../../Redux/store';
import {GET_ALL_STORE} from '../../../../Redux/actionTypes';
import {connect} from 'react-redux';
import Spinner from '../../../Spinner/spinner';
import NoStore from './nostore/nostore';
import { Row, Col, Input,Button,Tooltip } from 'antd';
import {Link} from 'react-router-dom'
import Store from './stores/stores'



const Search = Input.Search;






class AllStore extends Component{
  constructor(){
      super();
      fetch('/store/all_store/all',{

        }).then((resp)=>{
            return resp.json();
        }).then((res)=>{
            store.dispatch({type:GET_ALL_STORE,payload:res})
        })
  }
  state = {
    size: 'large',
    data:[]
  };

  componentWillReceiveProps(props){
      
    this.setState({
        data:props.data.payload
    })
  }
  changeHandler=(e)=>{

        let newData = this.props.data.payload.slice();
        if(e.target.value !== ''){
            let val = e.target.value.toUpperCase();
            newData = newData.filter((obj,ind)=>{
                return (obj.desc.toUpperCase().includes(val)||
                obj.name.toUpperCase().includes(val))
            })
        //   this.setState({data:newData})
        this.setState({data:newData})

        }else{
            this.setState({data:this.props.data.payload})

        }
    }

    render(){

    const size = this.state.size

        return(
        <div className="allstore-head">
             <Row className = "allstorecontent-row">
                <Col span = {11}  className = 'allstorecontent-child-1'><span className = "allstorecontent-store-heading">Stores</span></Col>
                <Col span = {13} className = 'allstorecontent-child-2'>
                    <Search className = 'allstorecontent-search' placeholder="Enter a keyword to search" onChange={this.changeHandler}  />
                    <Tooltip title = "Add store"><Link to = '/dashboard/stores/new_store' className = {{cursor:'pointer'}}><Button type="default" style = {{cursor:'pointer'}} shape="circle" icon="plus" size={size} /></Link></Tooltip>
                </Col>
            </Row>
            {

                this.props.data.payload? this.props.data.payload.length === 0?<NoStore/>:<Store data={this.state.data}/>:<Spinner/>
            }
        </div>
        )
    }

}

const stores = (store)=>{
    return{
        data:store.AllStore,
        spinInfo:store.deleteStore
    }
}


const  connectedAllStoreContent = connect(stores)(AllStore)



export default connectedAllStoreContent;