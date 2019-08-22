import React,{Component} from 'react';
import './newstore.css';
import Spinner from '../../../../Spinner/spinner'
import store from '../../../../../Redux/store';

import Content from './newStoreContent/newStoreContent';
import {connect} from 'react-redux'





class NewStore extends Component{


    render(){
        
        let data = this.props.match.params.id?this.props.data.payload.filter((obj)=>{
            return (obj._id === this.props.match.params.id);
        }):null
        console.log(this.props.match.params.id);
        console.log(this.props.data.payload);
        return(
            <div className="newstore-head">
                {
                    this.props.spin.isLoading ? <Spinner/>:<Content data = {data} />
                }
            </div>
        )
    }

}


const spinnerInfo = (store)=>{
    return {
        spin:store.SaveStore,
        data:store.AllStore
    }
}


const ConnectedNewStore = connect(spinnerInfo)(NewStore);


export default ConnectedNewStore;