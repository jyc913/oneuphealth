
import { GET_BUNDLE} from '../action-types/cart-actions'
import {FAILURE, REQUEST, SUCCESS} from '../actionType.util'
const initState = {
    bundle:{},
    isLoading: false,
    error_message: 'error',
    testing: 'hello world'
}
const usersReducer= (state = initState,action)=>{
   
  switch(action.type){
    case REQUEST(GET_BUNDLE):
        return {
            ...state,
            isLoading: action.payload,
        };
        
    case SUCCESS(GET_BUNDLE):
        return {
            ...state,
            isLoading: false,
            bundle:action.payload
        };
    case FAILURE(GET_BUNDLE):
        return {
            ...state,
            isLoading: false,
            error_message:action.payload
        };
    default:
    return state;
} 
}

export const resultRequested =()=>({
    type: REQUEST (GET_BUNDLE),
    payload:true
})

export const resultSuccess = result =>({
    type: SUCCESS (GET_BUNDLE),
    payload:result
})

export const resultHasErrored =error=>({
    type: FAILURE (GET_BUNDLE),
    payload:error
})

export const fetchBundleData= ()=> dispatch =>{
  
    dispatch(resultRequested(true));
    const url='http://localhost:5000/bundle';
    fetch(url,{
        method: 'GET'
    })
    .then(response=>{return response.json()})
    .then(result =>{
        return dispatch(resultSuccess(result));
    })
    .catch(error=>dispatch(resultHasErrored(error)))

}



export default usersReducer
