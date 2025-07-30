import api from "@/config/api";
import { GET_ALL_ORDER_FAILURE, GET_ALL_ORDER_REQUEST, GET_ALL_ORDER_SUCCESS, GET_ORDER_FAILURE, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, PAY_ORDER_FAILURE, PAY_ORDER_REQUEST, PAY_ORDER_SUCCESS } from "./ActionType"



export const payOrder = ({jwt,orderData,amount}) => async (dispatch) =>{
  dispatch({type: PAY_ORDER_REQUEST});

  try{
    const response = await api.post(`/api/orders/pay`,orderData,{
      headers : {
        Authorization : `Bearer ${jwt}`
      },
    });

    dispatch({
      type : PAY_ORDER_SUCCESS,
      payload: response.data,
      amount
    });
    console.log("order success ",response.data)
  }
  catch(error){
    console.log("error ",error)
    dispatch({
      type : PAY_ORDER_FAILURE,
      error : error.message,
    });
  }
}

export const getOrderById = ({jwt,orderId}) => async (dispatch) =>{
  dispatch({type: GET_ORDER_REQUEST});

  try{
    const response = await api.get(`/api/orders/${orderId}`,{
      headers : {
        Authorization : `Bearer ${jwt}`
      },
    });

    dispatch({
      type : GET_ORDER_SUCCESS,
      payload: response.data,
    });
    console.log(" get order id ",response.data)
  }
  catch(error){
    console.log("error ",error)
    dispatch({
      type : GET_ORDER_FAILURE,
      error : error.message,
    });
  }
}

export const getAllOrdersForUser = ({jwt,orderType,assetSymbol}) => async (dispatch) =>{
  dispatch({type: GET_ALL_ORDER_REQUEST});

  try{
    const response = await api.get(`/api/orders`,{
      headers : {
        Authorization : `Bearer ${jwt}`
      },
      params:{
        order_type: orderType,
        asset_symbol : assetSymbol,
      }
    });

    dispatch({
      type : GET_ALL_ORDER_SUCCESS,
      payload: response.data,
    });
    console.log(" order success ",response.data)
  }
  catch(error){
    console.log("error ",error)
    dispatch({
      type : GET_ALL_ORDER_FAILURE,
      error : error.message,
    });
  }
}