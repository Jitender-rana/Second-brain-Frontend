import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button";
import { Input } from "./input";
import { Submit } from "../icons/submit";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Youtube } from "../icons/youtube";
import { Instagram } from "../icons/instagram";
import { Twitter } from "../icons/twitter";
import { useNavigate } from "react-router-dom";
const Backend_Url=import.meta.env.VITE_BACK_ULR;

type CreateContentprops={
    open: boolean;
    onClose: ()=>void;
}
enum ContentTypes{
    Youtube = "Youtube",
    Instagram = "Instagram",
    Twitter = "Twitter",
}
export function CreateContent({open,onClose}: CreateContentprops){
    console.log(`the value for open in create content is ${open}`);
    const wrapperRef=useRef<HTMLDivElement>(null);
    let Classname=document.getElementsByClassName("CreateContentclass");
    useEffect(()=>{
        if(open){
        Classname[0].addEventListener("click",handleClickOutside,false);
        console.log(`the elements is Classname array are: ${Classname[0]}`)
        }
        return()=>{
            // Classname[0].removeEventListener("click",handleClickOutside,false);
        }
    },[onClose,open])
    const handleClickOutside=(event:any)=>{
        if(wrapperRef.current && !wrapperRef.current.contains(event.target)){
            onClose();
        }
    }
    const [submitingcontent,setsubmitingcontent]=useState(false);
    const [type,settype]=useState(ContentTypes.Youtube);
    const titleRef=useRef<HTMLInputElement>();
    const linkRef=useRef<HTMLInputElement>();
    async function onSubmit(){
        if(localStorage.getItem("token")){
        setsubmitingcontent(true);
        const title=titleRef.current?.value;
        const link=linkRef.current?.value;
        const token=localStorage.getItem("token");
        const response=await axios.post(`${Backend_Url}/content/create-content`,{
            title: title,
            link: link,
            type: type,
        },{
            headers:{
                "authorization": `Bearer ${token}`,
            }

        })
        if(response.data.created){
            setsubmitingcontent(false);
            
            onClose();
        }else if(response.data.error){
            setsubmitingcontent(false);
            alert(response.data.error);
            
        }else{
            setsubmitingcontent(false);
            alert(response.data.message);
        }
    }else{
        alert("Please login to create content");
        const navigate=useNavigate();
        navigate("/signin");
    }
    }



    
    return <div>
        {open && <div className="w-screen h-screen bg-slate-500 bg-opacity-60 fixed top-0 left-0 flex justify-center CreateContentclass">
            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
            <div className="flex flex-col justify-center">
                
                
                <span ref={wrapperRef} className="bg-white opacity-100 p-4 rounded-xl">
                    <div className="flex justify-end">
                    <div className="cursor-pointer" onClick={onClose}><CrossIcon/></div>
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <Input reference={titleRef} placeholder="title" labelname="Title" type="text"></Input>
                            <Input reference={linkRef} placeholder="url" labelname="Link" type="text"></Input>
                        </div>
                    </div>
                    <div className="text-center mt-4 font-sans text-lg">Select your Type of Content</div>
                    <div className="flex justify-between gap-2 mt-4">
                        <Button variant={type==ContentTypes.Youtube?"primary":"secondary"} text="Youtube" onClick={()=>{settype(ContentTypes.Youtube)}} startIcon={<Youtube/>}></Button>
                        <Button variant={type==ContentTypes.Instagram?"primary":"secondary"} text="Instagram" onClick={()=>{settype(ContentTypes.Instagram)}} startIcon={<Instagram/>}></Button>
                        <Button variant={type==ContentTypes.Twitter?"primary":"secondary"} text="Twitter" onClick={()=>{settype(ContentTypes.Twitter)}} startIcon={<Twitter/>}></Button>    
                    </div>
                    <div className="flex justify-center mt-4">
                    <Button text="Submit" variant="primary"  fullWidth={true} startIcon={<Submit/>}  loading={submitingcontent} onClick={onSubmit}></Button>
                    </div>

                </span>
            </div>
            </div>
            </div>}

    </div>
}