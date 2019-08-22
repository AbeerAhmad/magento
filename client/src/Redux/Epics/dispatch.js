import * as actions from '../Actions/dispatch'
import {message} from 'antd'

const Dispatch = {
    create: (data) => dispatch => {
        dispatch(actions.CREATING_DISPATCH)
        const { carrier, NoS, readyat, location, currenttime } = data
        let a = { carrier: carrier, Nos: NoS, readyat: readyat, location: location, currenttime: currenttime }
        var options = {
            method: 'POST',
            body: JSON.stringify(a),
            headers: {
                'Content-Type': 'application/json'
            }

        }


        fetch('/store/dispatch/createdispatch', options)
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    dispatch(actions.CREATING_DISPATCH_SUCCESS())
                    message.success('This is a success message')
                    this.props.history.push('/dashboard/sales/dispatches')
                } else {
                    dispatch(actions.CREATING_DISPATCH_FAILURE(json.err))
                    message.error('sumthing went wrong')
                }
            })
            .catch((error) => { 
                dispatch(actions.CREATING_DISPATCH_FAILURE(error))
                console.log(error) });
    }
}


export default Dispatch