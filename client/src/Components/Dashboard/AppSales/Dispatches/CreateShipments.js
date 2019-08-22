import React, { Component } from 'react'
import { Steps, Button, message, DatePicker } from 'antd';
import './CreateDispatch.css'
import First from './Step1'
import Second from './Step2'
import {Link} from 'react-router-dom'
import history from './history';
import Header from './Dispatchhead';
import DispatchActionProvider from '../../../../Redux/Epics/dispatch'
import {connect} from 'react-redux'


const { Step } = Steps;



class CreateDispatch extends Component {


    constructor(props) {
        super(props);
      


        // this.first = this.first.bind(this)
        this.state = {
            currenttime:'',
            current: 0,
            NoS: 1,
            carrier: '',
            Next: true,
            location: '',
            readyat:'',
            finish:true,


        };
        this.steps = [
            {
                title: 'Carrier and Location Selection',
                content: <First handleCarrier={this.handleCarrier} handleChange={this.handleChange} />
            },
            {
                title: 'Dispatch',
                content: <Second Noofshipments={this.Noofshipments} value={this.state.NoS} onChange={this.onChange} handleChanges={this.handleChanges} onOk={this.onOk} />
            },
        ]

    }
    handleChange = (event) => {
        if (event == '') {
            this.setState({ location: '' })
        } else {
            this.setState({ location: event.target.value })
        }
        if (event.target.value !== '' && this.state.carrier !== '') {
            this.setState({ Next: false })
        } else {
            this.setState({ Next: true })
        }


    };


    handleCarrier = (e) => {
        if (e.target.value == '') {
            this.setState({ carrier: '' })
        } else {
            this.setState({ carrier: e.target.value })
        }
        if (e.target.value !== '' && this.state.location !== '') {
            this.setState({ Next: false })


        } else {
            this.setState({ Next: true })
        }
      
    }
    // step 2 code
    onChange = (value, dateString) => {

        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
        let newdate = new Date()
        console.log(newdate)
        if (value) {
            if ((newdate.getTime() + (1800 * 1000)) < value.get()._d.getTime()) {
                this.setState({
                    readyat: dateString,
                    currenttime:newdate,
                    finish:false
                })

            } else {
                console.log('Smaller')
            }
        }
    }

    onOk = (value) => {
        console.log('onOk: ', value);
    }

    Noofshipments = (event) => {
        this.setState({
            NoS: event.target.value
        })

    }




    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }
    handleclick=()=>{
        
        this.props.dispatch(DispatchActionProvider.create(this.state))
        
        // const {carrier,NoS,readyat,location,currenttime}=this.state
        // let a={carrier:carrier,Nos:NoS,readyat: readyat,location: location,currenttime:currenttime}
        // console.log(a)
        // var options = {
        //     method: 'POST',
        //     body: JSON.stringify(a),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }

        // }


        // fetch('/store/dispatch/createdispatch', options)
        //     .then(res => res.json())
        //     .then(json => {
        //         if(json){
        //         message.success('This is a success message')
        //         this.props.history.push('/dashboard/sales/dispatches')
        //     }else{
        //         message.error('sumthing went wrong')
        //     }
        //     })
        //     .catch((error) => { console.log(error) });
    }
    render() {
        const { current } = this.state;
        const { Next,finish } = this.state
        // const steps=this.steps
        return (
            <div>
           
                <div>
                <Steps style={{ width: '80%' }} current={current}>
                    {this.steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">{this.steps[current].content}</div>
                <div className="steps-action">
                    {current < this.steps.length - 1 && (
                        <Button type="primary" disabled={Next} onClick={() => this.next()}>
                            Next
                </Button>
                    )}
                    {current === this.steps.length - 1 && (
                        <Button type="primary" onClick={this.handleclick} disabled={finish}>
                            Done
                </Button >
                    )}
                    {current > 0 && (
                        <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                            Previous
                </Button>
                    )}
               <span> <Link to={'/dashboard/sales/dispatches'}>Cancel</Link></span>
                </div>
                </div>
            </div>
        );
    }
}



const mapStateToProp = (store)=>{
    return {
        data:store.dispatch
    }
}

const connectedCreateDispatch = connect(mapStateToProp)(CreateDispatch)


export default connectedCreateDispatch