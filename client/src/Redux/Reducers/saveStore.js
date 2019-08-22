import * as actionTypes from '../actionTypes';
import SaveStore from '../Epics/store'


const initialState = {
    isLoading: false
}

const saveStore = (state = initialState, action) => {

   
    switch (action.type) {
        case actionTypes.SAVE_NEW_STORE_LOADING:{
            return { ...state, isLoading: true,  user: null };
        }

        case actionTypes.ADD_NEW_STORE_FAILED:{
            return { ...state, isLoading: false,err:action.err,  user: null };//,err:action.err
        }
        case actionTypes.ADD_NEW_STORE_SUCCESS:{
            return { ...state, isLoading: false,  user: null };
        }
          default:
          return state;
      }
    
}

export default saveStore