import React from 'react';
import axios from "axios";


const { REACT_APP_API_BASE_URL, REACT_APP_API_TOKEN } = process.env
    
 export const fetchData = async (path) => {
    const response = await axios.get(`${REACT_APP_API_BASE_URL}${path}`, {
      headers: {
        "app-id": REACT_APP_API_TOKEN,
      },
    });
    // return(response?.data?.data);
    return response?.data
  };

  export const customErrorHandler=(err=>{

    if(err.code==="auth/user-not-found"){
        return "There is no user with this email" 
    }
    if(err.code==="auth/email-already-in-use"){
        return "The email address is already in use.Please try with another email"
    }
    if(err.code==="auth/wrong-password"){
        return "Wrong Password!! Please try again"
    }


}); 