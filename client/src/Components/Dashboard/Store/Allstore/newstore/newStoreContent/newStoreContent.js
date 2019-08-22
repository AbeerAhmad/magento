import React,{Component} from 'react';
import './newStoreContent.css';
import {Row,Col,Input,Button} from 'antd';
import Map from '../Map/Map';
// import history from '../../../../../history/history';
import SaveStoreActionCreator from '../../../../../../Redux/Epics/store'
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify'
import {Icon} from 'antd';
import defaultImg from '../../../../../../image/default.jpg'

import {connect} from 'react-redux'
// import {ADD_NEW_STORE} from '../../../../../Redux/actionTypes';

toast.configure({
    autoClose:1500,
    draggable:true,
    position:"top-center",
    className:'newstoreclient-toast'
})


const acceptedFileTypes='image/x-png,image/png,image/jpeg,image/jpg,image/gif'

const mapStateToProps = state => ({
    val: state.store_name
  });

const Textarea = Input.TextArea

class NewStoreContent extends Component{

constructor(props){

    super();
    props.data?this.state = {
        store_name:props.data[0].name,
        description:props.data[0].desc,
        lat:props.data[0].lat,
        lng:props.data[0].lng,
        file:props.data[0].imgSrc,
        fileName:false,
        update:true,
        id : props.data[0]._id,
        imgFlag:true
    }:this.state ={
        store_name :null,
        description:null,
        lat:null,
        lng:null,
        file:null,
        fileName:null,
        update:false
    }
}


    notify =(closeToast)=><div>Please fill the form</div>

    saveStore =()=>{


            if(this.state.update &&this.state.description && this.state.store_name && this.state.lat && this.state.lng){
                debugger;
                this.props.dispatch(SaveStoreActionCreator.SaveStore(this.state))
            }else if(this.state.description && this.state.store_name && this.state.lat && this.state.lng){
                this.props.dispatch(SaveStoreActionCreator.SaveStore(this.state))
            }else{

                if (! toast.isActive(this.toastId)){
                    toast(<this.notify/>,{toastId:11111111111});
                }
            }

    }

    goBack = ()=>{
        window.history.back();
    }


    fileHandler = (e)=>{
        this.setState({fileName:e.target.files[0].name})
        this.setState({file:e.target.files[0]})
        this.setState({imgFlag:false})
    }

    inputHandler = (e)=>{
        this.setState({store_name:e.target.value})
    }
    descHandler = (e)=>{
        this.setState({description:e.target.value})
    }



    coordinate = (latLng)=>{
        this.setState({
            lat:latLng.lat,
            lng:latLng.lng
        })
    }

    render(){

        return(
            <div className="newstorecontent-head">
                <h2 className = 'newstorecontent-heading'>Quick Info</h2>
                <div className = 'form-head'>
                    <Row className = 'newstorecontent-row'>
                        <Col span = {12}>Store Name:</Col>
                        <Col span = {12}>
                            <Input onChange = {this.inputHandler} value = {this.state.store_name} required className = "newstorecontent-input"/>
                        </Col>
                    </Row>
                    <Row className = 'newstorecontent-row'>
                        <Col span = {12}>Store Description:</Col>
                        <Col span = {12}>
                            <Textarea Rows={4} value = {this.state.description} onChange = {this.descHandler} className = "newstorecontent-textarea"/>
                        </Col>
                    </Row>
                        
                    <Row className = 'newstorecontent-row'>
                        <Col span = {12}>Add Image:</Col>
                        <Col span = {12}>
                            <input type="file" name="file"  onChange = {this.fileHandler} id="file" class="inputfile"  accept = {acceptedFileTypes}/>
                            <label for="file" >
                                <Icon type="upload" className = "newstorecontent-icon" 
                                    // style = {{width:'40px',height:'15px'}}
                                />
                            </label><b style = {{marginLeft:'4px'}}>{this.state.fileName}</b>
                        </Col>
                    </Row>

                    {
                        this.state.update?
                        this.state.imgFlag?
                        this.state.file?
                        <Row className = 'newstorecontent-row-styled'
                            //  style = {{textAlign:'center',minWidth:'400px',padding:'10px',margin:'10px 0',border:'1px solid grey',boxShadow:'0px 2px 2px #eee'}}
                         >
                            <div>Current Image(If you upload a new image the previous one will be deleted)</div>
                            <Col span ={24}>
                                <img ref ='store_img' className = "newstorecontent-img" 
                                    // style = {{width:'25vw',minWidth:'250px',maxWidth:'100%',maxHeight:'100%'}}
                                    src = {`/${this.state.file}`}
                                />
                            </Col>
                        </Row>:null:null:
                        null
                    }

                    <Row className = 'newstorecontent-row'>
                        <Col span = {24}>   
                            <Map coordinate = {this.coordinate} fill ={this.state.update?true:false} lati = {this.state.lat} longi = {this.state.lng}/>
                        </Col>
                    </Row>
                    <div className="newstorecontent-btnHead">
                        <Button type = 'danger' onClick = {this.goBack}>Go Back</Button>
                        <Button type = 'primary' style = {{float:'right'}} onClick = {this.saveStore}>
                            {this.state.update?'Update':'Save'}
                        </Button>
                     </div>    
                  
                    
                    
                </div>

            </div>
        )
    }

}



export default connect(mapStateToProps)(NewStoreContent);