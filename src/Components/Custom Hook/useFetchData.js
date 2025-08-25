import { useState, useEffect } from "react";

export function useFetchData(url){
     const [data,setdata]=useState();
     useEffect(()=>{
        fetch(url)
        .then(response=>response.json)
        .then(data=>{
            setdata(data);
        })
        .catch((ex)=>{console.error(ex)})
     },[url])
     return{data}
}