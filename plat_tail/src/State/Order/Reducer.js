import { PAY_ORDER_REQUEST, GET_ORDER_REQUEST, GET_ALL_ORDER_REQUEST, PAY_ORDER_SUCCESS, GET_ORDER_SUCCESS, GET_ALL_ORDER_SUCCESS, PAY_ORDER_FAILURE, GET_ORDER_FAILURE, GET_ALL_ORDER_FAILURE } from "./ActionType";


const initialState = {
  order :null,
  orders : [],
 loading : false,
 error : null
};

const orderReduder = (state = initialState, action) =>{
  switch (action.type){
    case PAY_ORDER_REQUEST:
    case GET_ORDER_REQUEST:
    case GET_ALL_ORDER_REQUEST:
      return {
        ...state,
        loading:true,
        error: null,
      }
    case PAY_ORDER_SUCCESS:
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        order : action.payload,
        loading : false,
        error : null,
      };
    case GET_ALL_ORDER_SUCCESS:
      return {
        ...state,
        orders : action.payload,
        loading : false ,
        error : null,
      }

    case PAY_ORDER_FAILURE:
    case GET_ORDER_FAILURE:
    case GET_ALL_ORDER_FAILURE:
      return {
        ...state,loading : false , error : action.error,
      }

    default :
    return state;
  }
};
export default orderReduder;