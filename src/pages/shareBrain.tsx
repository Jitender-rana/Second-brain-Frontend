import {useParams} from "react-router-dom";
import { Card } from "../components/Card";
import axios from "axios";
import { useEffect,useState } from "react";
const Backend_Url=import.meta.env.VITE_BACK_ULR;
type ContentItem = {
    _id: string;
    title: string;
    link: string;
    type: "Youtube" | "Twitter" | "Instagram";
  };

export function ShareBrain(){
    const [contents,setcontents]=useState<ContentItem[]>([]);
    const params = useParams();
    const hash=params.hash;
    
    async function fetchShareBrain(){
        const response=await axios.get(`${Backend_Url}brain/${hash}`);
        if(response.data.data){
        setcontents(response.data.data);
        return;
        }
        alert(`something went wrong`);

    }
    useEffect(()=>{
        fetchShareBrain();
    },[])
    console.log(contents);


    return <div className="bg-purple-200  p-10 flex gap-6 flex-wrap h-full">
        {contents.map(({type,link,title,_id})=><Card key={_id} title={title} type={type} url={link} uniqueKey={_id} canDelete={false}></Card>)}
        

    </div>
}