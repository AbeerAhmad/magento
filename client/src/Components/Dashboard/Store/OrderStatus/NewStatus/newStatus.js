import React,{Component} from 'react';
import {Button,Input,Form} from 'antd';
import './newStatus.css'
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify'

class NewStatus extends Component{
    state = {
        code:'',
        view:'',
        label:''
    }
    statusCodeHandler =(e)=>{
        this.setState({
            code:e.target.value
        })
    }
    statusLabelHandler =(e)=>{
        this.setState({
            label:e.target.value
        })
    }
    storeViewHandler=(e)=>{
        this.setState({
            view:e.target.value
        })
    }



    submitNewStatus=()=>{
        if(this.state.code && this.state.label){
            console.log(this.state)
        }else{
            toast(()=>"Please complete the required fields")
        }
    }





    resetFields=()=>{
        this.props.form.resetFields();
    }
    render(){
        const { getFieldDecorator } = this.props.form
        return(
            <div className = 'new-status-head'>
                <div className = 'newstatus-heading-1'>
                    Create New Order Status
                </div>
                  <div className = 'newstatus-btns'>
                        <Link to = '/dashboard/store/order_status' className = 'newstatus-btn'>Back</Link>
                        <Button onClick = {this.resetFields} size = 'large' type = 'ghost' className = 'newstatus-btn' >Reset</Button>
                        <Button onClick = {this.submitNewStatus} size = 'large' type = 'primary' className = 'newstatus-btn'>Save Status</Button>                        
                 </div>
                 <div className = 'newstatus-heading-2'>
                     Order Status Information
                 </div>
                 <div className="newstatus-inputHeader">
                 <Form.Item label="Source Code">
                    {getFieldDecorator('sourcecode', {
                        rules: [
                        {
                            required: true,
                            message: 'Please Enter the Source Code',
                        },
                        ],
                    })(<Input onChange = {this.statusCodeHandler} />)}
                </Form.Item>
                <Form.Item label="Status Label">
                    {getFieldDecorator('nameprefix', {
                        rules: [

                        {
                            required: true,
                            message: 'Please Enter the Status Label',
                        },
                        ],
                    })(<Input onChange = {this.statusLabelHandler}/>)}
                </Form.Item>
                <Form.Item  label="Defaul Store View">
                    {getFieldDecorator('defaultstoreview', {
                        rules: [
                            {
                                required: false,
                            },
                        ],
                    })(<Input onChange = {this.storeViewHandler}/>)}
                </Form.Item>
    
                 </div>
            </div>
        )
    }
}

const WrappedNewStatus = Form.create({ name: 'addcustomer' })(NewStatus)
export default WrappedNewStatus