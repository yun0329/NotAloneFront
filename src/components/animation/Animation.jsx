import styled from 'styled-components';
import React,{useEffect} from "react";
import lottie from "lottie-web";
import animationData from "./loading.json";

const Animation=(props)=>{
    const container=styled.div`
    width:200px;
    `;
    useEffect(()=>{
        lottie.loadAnimation({
            container:container,
            renderer:"svg",
            loop:true,
            autoplay:true,
            animationData:animationData,
        });
    },[]);
    return(
        <>
        <div id="container"></div>
        </>
    )
};

export default Animation;