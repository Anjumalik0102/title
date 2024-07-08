import React,{useState} from "react"
import { Navigate} from 'react-router-dom';
const Protected = ({children}) => {


const auth = localStorage.getItem('userLogedIn')


if(!auth){
    return <Navigate to='/login' replace />
}

return auth === 'true' ? children : <Navigate to='/login' replace />
}

export default Protected