import { useEffect, useState } from "react";
import axios from "axios";
const Backend_Url=(import.meta.env.VITE_BACK_ULR);
console.log(`the Backend url exported from Backend is: ${Backend_Url}`)
type ContentItem = {
    _id: string;
    title: string;
    link: string;
    type: "Youtube" | "Twitter" | "Instagram";
  };
export function useContent(){
    const [contents,setcontents]=useState<ContentItem[]>([]);
    async function refresh(){
        const response=await axios.get(`${Backend_Url}/content/contents`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        setcontents(response.data.data);
    }
    useEffect(()=>{
        refresh();

    },[])
    return {contents,refresh,setcontents};
}
