import history from '../../history/history';
import * as Actions from '../Actions/allstore';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';









const Store = {
    SaveStore:(data) => dispatch => {

          
            dispatch(Actions.SAVE_NEW_STORE())
            let formData = new FormData();
            formData.append('name',data.store_name);
            formData.append('desc',data.description);
            formData.append('file',data.file);
            formData.append('lat',data.lat);
            formData.append('lng',data.lng);
            formData.append('id',data.id||null)
            data.update?
            fetch('/store/all_store/update',{
                method:'POST',
                body:formData
            }).then((resp)=>{
                return resp.json();
            }).then((res)=>{
                if(res.success){
                    dispatch(Actions.NEW_STORE_SAVED())
                    history.push('/dashboard/store/all_stores')
                    toast(()=>"Your store is updated successfully");                    

                }else{
                    debugger;
                    dispatch(Actions.NEW_STORE_FAILED(res.err))
                    toast(()=>"There was an error. Your store wasn't updated.");                    
                }
            }) :
            fetch('/store/all_store/new',{
                method:'POST',
                body:formData
            }).then((resp)=>{
                return resp.json();
            }).then((res)=>{
                debugger;
                if(res.success){
                    dispatch(Actions.NEW_STORE_SAVED())
                    history.push('/dashboard/store/all_stores')                  

                }else{
                    dispatch(Actions.NEW_STORE_FAILED())
                    toast(()=>"There was an error. Your store was not created. Please try again!");                    
                }
            }) 
    

    },
    deleteStore:(data)=>dispatch=>{
        dispatch(Actions.DELETE_STORE())
        fetch('/store/all_store/delete_store',{
            method:'POST',
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({id:data.id,imgSrc : data.image})
          }).then((resp)=>{
            return resp.json();
          }).then((res)=>{
            if(res.success){
                dispatch(Actions.DELETE_STORE_SUCCESS())
                toast(()=>"Your store is deleted successfully");                    
              fetch('/store/all_store/all',{
      
              }).then((resp)=>{
                  return resp.json();
              }).then((res)=>{
      
                  dispatch(Actions.ALL_STORE(res))
              })
            }else{
                dispatch(Actions.DELETE_STORE_FAILED(res.err))
                toast(()=>"There was an error. Your store isn't deleted");                    

            }
          })
    }
}

    


export default Store;