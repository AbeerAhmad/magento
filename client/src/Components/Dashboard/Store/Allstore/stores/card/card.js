import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Card, Icon, Avatar } from 'antd';
import './card.css';
import store from '../../../../../../Redux/store';
import {GET_ALL_STORE} from '../../../../../../Redux/actionTypes';
import {connect} from 'react-redux'
import { Modal, Button } from 'antd';
import Store from '../../.../../../../../../Redux/Epics/store';
import defaultImg from '../../../../../../image/default.jpg'
import {Tooltip} from 'antd'

const { Meta } = Card;
const mapStateToProps = state => ({
  val: state.store_name
});
const confirm = Modal.confirm;


class Cards extends Component{
  


  deleteCard=(prop)=>{
    this.props.dispatch(Store.deleteStore(prop));
  }

  
   showConfirm() {
     const self = this;
    confirm({
      title: 'Do you want to delete this store?',
      content: 'This is store will be deleted and you will never get its contents',
      onOk() {

        self.deleteCard(self.props)

        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  }
  

  render(){

    return(
      
     
        <Card
        className = "styling-card"
        // style={{ width: '22vw',minWidth:'220px',display:'inline-block',margin:'10px',textAlign:"justify" }}
        cover={

            <img
            height = "250"
              src={this.props.image?'/'+this.props.image:defaultImg}
            />
          }


        >
        <Meta
        className = "card-meta"
          title={this.props.title}
          description={this.props.description}
          // style = {{height:'80px',overflow:'hidden'}}
        />
        <div className = 'card-icons-head'>
          <Link to = {`/dashboard/store/all_stores/${this.props.id}`} className = 'card-link'
          >
            <Icon type="edit" className = 'card-icons' />
          </Link>
            <Icon className = 'card-icons'
                onClick={this.showConfirm.bind(this)}  type="delete"
              />
        </div>
      </Card>
  
    
    )
  }
    
}
export default connect(mapStateToProps)(Cards);




