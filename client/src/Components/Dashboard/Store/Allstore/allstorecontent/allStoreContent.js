import React,{Component} from 'react';
import './allstorecontent.css'
import  Store from '../stores/stores';
// import {connect} from 'react-redux';
// import Spinner from '../../../../../Spinner/spinner'





class AllStoreContent extends Component{
    constructor(){

        super();
       
    }
    


     

    render(){


        return(
            
        <div className="allstorecontent-head">
           
            
            <Store data = {this.props.data?this.props.data:null}/>
            
        </div>
        )
    }

}


export default AllStoreContent;