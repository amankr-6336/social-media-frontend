import axios from "axios";
import { getItem, KEY_ACCESS_TOKEN, removeItem, setItem } from "./localStorageManager";

import Store from '../Redux/Store';
import { setLoading, showToast } from "../Redux/slice/appConfigSlice";
import { TOAST_FAILURE } from "../App";
// import { error } from "../../../Server/utils/responseWrapper";

let baseURL = 'http://localhost:4000/';
// console.log('env is ', process.env.NODE_ENV);
if(process.env.NODE_ENV === 'production') {
    baseURL = process.env.REACT_APP_SERVER_BASE_URL
}

export const axiosClient = axios.create({
  baseURL,
  withCredentials: true
});

axiosClient.interceptors.request.use(
    (request) =>{
        const accessToken=getItem(KEY_ACCESS_TOKEN);
        request.headers['Authorization']= `Bearer ${accessToken}`;
        Store.dispatch(setLoading(true));
        return request;
    }
);

axiosClient.interceptors.response.use(
    async (response) => {
          Store.dispatch(setLoading(false));
          const data= response.data;

          if(data.status==='ok'){
            return data;
          }
           const originalRequest=response.config;
          const statusCode=data.statusCode;
          const error=data.message;
          
          Store.dispatch(showToast({
            type:TOAST_FAILURE,
            message:error
          }))

          // if(statusCode===401 && originalRequest.url===`${process.env.REACT_APP_SERVER_BASE_URL}/auth/refresh`){
          //   removeItem(KEY_ACCESS_TOKEN);
          //   window.location.replace('/login','_self');
          //   return Promise.reject(error);
          // }

          if(statusCode===401 && !originalRequest._retry){
            originalRequest._retry=true;

            const response=await axios.create({
              withCredentials:true
            }).get(`${process.env.REACT_APP_SERVER_BASE_URL}auth/refresh`);



            // const response = await axios.get('/auth/refresh');

            // console.log('respnse from backend',response);


            if(response.data.status==='ok'){
                setItem(KEY_ACCESS_TOKEN,response.data.result.accessToken);
                originalRequest.headers['Authorization']=`Bearer ${response.data.result.accessToken}`;
                return axios(originalRequest);
            }
            else{
              removeItem(KEY_ACCESS_TOKEN);
              window.location.replace('/login','_self');
              return Promise.reject(error);
            }
          }
          // else{
          //   removeItem(KEY_ACCESS_TOKEN);
          //   window.location.replace('http://localhost:3000/login','_self');
          //   return Promise.reject(error);
          // }

          return Promise.reject(error);

    },
    async (error)=>{
      Store.dispatch(setLoading(false));
      Store.dispatch(showToast({
        type:TOAST_FAILURE,
        message:error.message
      }))

        return Promise.reject(error);
    }
    // (e){

    // }
)

