import api from "@/config/api";
import { GET_ASSET_DETAILS_FAILURE, GET_ASSET_DETAILS_REQUEST, GET_ASSET_DETAILS_SUCCESS, GET_ASSET_FAILURE, GET_ASSET_REQUEST, GET_ASSET_SUCCESS, GET_USER_ASSET_FAILURE, GET_USER_ASSET_REQUEST, GET_USER_ASSET_SUCCESS } from "./ActionType"


export const getAssetById = ({assetId, jwt}) => async (dispatch) => {
  dispatch({type: GET_ASSET_REQUEST});

  try{
    const response = await api.get(`/api/assets/${assetId}`,{
      headers : {
        Authorization : `Bearer ${jwt}`,
      },
    });
    dispatch({
      type : GET_ASSET_SUCCESS,
      payload : response.data,
    });
    console.log("get asset by id ", response.data)
  }
  catch(error){
    dispatch({
      type : GET_ASSET_FAILURE,
      error : error.message,
    });
  }
};

export const getAssetDetails = ({coinId, jwt}) => async (dispatch) => {
  dispatch({type:GET_ASSET_DETAILS_REQUEST});

  try{
    const response = await api.get(`/api/asset/coin/${coinId}/user`,{
      headers : {
        Authorization : `Bearer ${jwt}`,
      },
    });
    dispatch({
      type : GET_ASSET_DETAILS_SUCCESS,
      payload : response.data,
    });
    console.log("Asset details :" , response.data)
  }
  catch(error){
    dispatch({
      type : GET_ASSET_DETAILS_FAILURE,
      error : error.message,
    });
  }
};

export const getUserAssets = (jwt) => async (dispatch) => {
  dispatch({type: GET_USER_ASSET_REQUEST});

  try{
    const response = await api.get(`/api/asset`,{
      headers : {
        Authorization : `Bearer ${jwt}`,
      },
    });
    dispatch({
      type : GET_USER_ASSET_SUCCESS,
      payload : response.data,
    });
    console.log(" user Asset  :" , response.data)
  }
  catch(error){
    console.log(" user Asset  :" , error.resonse?.data)
    dispatch({
      type : GET_USER_ASSET_FAILURE,
      error : error.message,
    });
  }
};