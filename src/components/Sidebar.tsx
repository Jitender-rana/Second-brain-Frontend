import { Twitter } from "../icons/twitter";
import { Sidebaritem } from "./sidebaritem";
import { Logo } from "../icons/logo";
import { Instagram } from "../icons/instagram";
import { Youtube } from "../icons/youtube";
import { All } from "../icons/all";
import { useContext } from "react";
import { TypesContext } from "../pages/dashbaord";
import { useNavigate } from "react-router-dom";



export function Sidebar(){
    const navigate=useNavigate();
    const {setdisplaytype,displaytypes}=useContext(TypesContext);
    return <div className=" transition-all delay-100 duration-300  h-screen fixed  bg-white sm:w-72 w-16  border-gray-300 border-r-2 top-0 left-0 pl-6">
            <div className="sm:hidden  flex flex-col gap-6 pr-8 pt-8 mr-4 text-slate-700">
            <div  className=" hover:bg-slate-200 cursor-pointer" onClick={()=>{navigate("/");}}><Logo small={true}/></div>
            <div  className=" hover:bg-slate-200 cursor-pointer" onClick={()=>{setdisplaytype(displaytypes.All);}}><All/></div>
            <div className=" hover:bg-slate-200 cursor-pointer"onClick={()=>{setdisplaytype(displaytypes.Twitter);}}><Twitter/></div>
            <div className=" hover:bg-slate-200 cursor-pointer" onClick={()=>{setdisplaytype(displaytypes.Instagram);}}><Instagram/></div>
            <div  className=" hover:bg-slate-200 cursor-pointer" onClick={()=>{setdisplaytype(displaytypes.Youtube);}}><Youtube/></div>
            </div>
        <div onClick={()=>{navigate("/")}}className="text-2xl pt-8 items center sm:flex hidden cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1">
            <div className="pr-2 text-purple-600">
                <Logo/>

            </div>
            <p>Brainly</p>
        
        </div>

        <div className="pt-8 pl-4 sm:block hidden">

        <Sidebaritem text="All" icon={<All/>} largetext={true} onClick={()=>{setdisplaytype(displaytypes.All);}}></Sidebaritem>
        <Sidebaritem text="Twitter" icon={<Twitter/>}   onClick={()=>{setdisplaytype(displaytypes.Twitter);}}></Sidebaritem>
        <Sidebaritem text="Instagram" icon={<Instagram/>}   onClick={()=>{setdisplaytype(displaytypes.Instagram);}}></Sidebaritem>
        <Sidebaritem text="Youtube" icon={<Youtube/>}   onClick={()=>{setdisplaytype(displaytypes.Youtube);}}></Sidebaritem>
        </div>
    </div>
}