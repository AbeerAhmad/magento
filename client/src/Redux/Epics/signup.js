import * as actions from '../Actions/signup'
import {message} from 'antd'
import history from '../../history/history'

const signup = {
    create: (values) => dispatch => {
         dispatch(actions.CREATING_USER())
         var options = {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        
        }


        fetch('http://localhost:5000/users/signup', options)
        .then(res => res.json())
        .then(json => {
                if (json.success) {
                    dispatch(actions.CREATING_USER_SUCCESS( ))
                    message.success('This is a success message')
                   history.push('/')
                } else {
                    dispatch(actions.CREATING_USER_FAILURE(json.err))
                    message.error('sumthing went wrong')
                }
            })
            .catch((error) => { 
                dispatch(actions.CREATING_USER_FAILURE(error))
                console.log(error) });
    }
}


export default signup




// var options = {
//     method: 'POST',
//     body: JSON.stringify(values),
//     headers: {
//         'Content-Type': 'application/json'
//     }

// }


// fetch('http://localhost:5000/users/signup', options)
//     .then(res => res.json())
//     .then(json => {
//         if(json){
//             console.log(json)
//         message.success('This is a success message')
//         this.props.history.push('/')
//     }else{
//         message.error('sumthing went wrong')
//     }
//     })
//     .catch((error) => { console.log(error) });