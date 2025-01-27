import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button";
import { Input } from "./input";
import { Submit } from "../icons/submit";
import { useEffect, useRef } from "react";
type CreateContentprops={
    open: boolean;
    onClose: ()=>void;
}
export function CreateContent({open,onClose}: CreateContentprops){
    console.log(`the value for open in create content is ${open}`);
    const wrapperRef=useRef<HTMLDivElement>(null);
    let Classname=document.getElementsByClassName("CreateContentclass");
    useEffect(()=>{
        if(open){
        Classname[0].addEventListener("click",handleClickOutside,false);
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
    
    return <div>
        {open && <div className="w-screen h-screen bg-slate-500 bg-opacity-60 fixed top-0 left-0 flex justify-center CreateContentclass">
            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
            <div className="flex flex-col justify-center">
                
                
                <span ref={wrapperRef} className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end">
                    <div className="cursor-pointer" onClick={onClose}><CrossIcon/></div>
                    </div>
                    <div>
                        <Input placeholder="title" labelname="Title"></Input>
                        <Input placeholder="url" labelname="Link"></Input>
                    </div>
                    <div className="flex justify-center mt-4">
                    <Button text="Submit" variant="primary" startIcon={<Submit/>}></Button>
                    </div>

                </span>
            </div>
            </div>
            </div>}

    </div>
}