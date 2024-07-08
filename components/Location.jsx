import React, { useState, useEffect } from "react"
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
const Location = ({ title, children }) => {
    const location = useLocation();
    useEffect(() => {
        switch (window.location.href) {
            case 'http://localhost:3001/':
                // document.title = 'Home';
                document.title = title;
              break;
            case 'http://localhost:3001/Login':
                document.title = title;
                // document.title = 'xyz';
                break;
            case 'http://localhost:3001/Signup':
                document.title = title;
                // document.title = 'Signup';
                break;
          }
    }, [location, window.location.href])


    return children
}

export default Location