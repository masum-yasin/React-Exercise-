import React, { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';

const PhoneBar = () => {
    const [phones,setPhones]= useState([]);
    useEffect(()=>{
        // fetch(' https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data =>setPhones(data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data =>console.log(data))
    },[])
    return (
        <>
            
        </>
    );
};

export default PhoneBar;