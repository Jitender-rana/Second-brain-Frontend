import { useContext, useEffect, useRef, useState } from 'react'
import { Button } from '../components/Button'
import { Plusicon } from '../icons/plus'
import { Shareicon } from '../icons/share'
import { Card } from '../components/Card'
import {useNavigate } from 'react-router-dom'
import { TypesContext } from './dashbaord'
import { CreateContent } from '../components/CreateContentModel'
import axios from 'axios';
import { Logout } from '../icons/Logout'
import { useContent } from '../Hooks/useContent'
import { ShareBrainModal } from '../components/ShareBrainModal'
const Backend_Url=import.meta.env.VITE_BACK_ULR;
const front_url=import.meta.env.VITE_FRONT_URL;

export function RightsideBar() {
  const [showModal,setshowModal]=useState(false);
  const [showBrainModal,setshowBrainModal]=useState(false);
  let urlRef=useRef<string>("");
  const navigate=useNavigate();
  const { contents, setcontents,refresh } = useContent();    //////////getting content from 
  useEffect(()=>{
    refresh();
  },[showModal])
  console.log(`the contents array is : ${contents}`);

  const {displaytype}=useContext(TypesContext);


  
  
  
  function Deletethispost(id: string) {                          ////////deleting the post logic
    setcontents((currentcontents)=> {
      return currentcontents.filter((entry) => entry._id !== id); 
    });
  }




  async function shareBrain(){
    if(localStorage.getItem("token")){
    const response=await axios.post(`${Backend_Url}brain/share`,{
      share: true,
    },{
      headers:{
        authorization: `Bearer ${localStorage.getItem("token")}`
        
      }
    })
    if(response.data.error){
      console.log(response.data.message);
      return;
    }
    const hash: String=(response.data.hash);
    console.log(`the hash is: ${hash}`);
    const shareUrl=`${front_url}${hash}`;
    
    try {
      setshowBrainModal(true);
      // await window.navigator.clipboard.writeText(shareUrl);
      // alert("Copied to clipboard!");
      urlRef.current=shareUrl;
     } catch (err) {
      console.error(
          "Unable to copy to clipboard.",
          err
      );
      alert("Copy to clipboard failed.");
  }
  }else{
    alert("Please login to share");
    navigate("/signin");
  }
  }
  
  

  return <div>
    
    <div className="sm:ml-72 ml-16 block bg-gray-100 min-h-screen p-4 border-2 animate-appear">
    <CreateContent open={showModal} onClose={()=>{setshowModal(false)}}/>
    <ShareBrainModal open={showBrainModal} onClose={()=>{setshowBrainModal(false)}}  url={urlRef.current}/>
    <div className="flex justify-end gap-4 sm:ml-0 ml-16"> 
    <Button   onClick={()=>{
      console.log("the modal value is"+showModal);
      setshowModal(true);
      console.log("the modal value is"+showModal);
    }} variant='primary' text='Add content' startIcon={<Plusicon/>}></Button>
    <Button variant='secondary' text='Share' startIcon={<Shareicon/>}onClick={shareBrain}></Button>
    <Button  onClick={()=>{
      if(localStorage.getItem("token")){
      console.log("logout clicked");
      localStorage.removeItem("token");
      navigate("/");
    }else{
      alert("Signin first to logout");
      navigate("/signin");
    }

    }}variant='primary' text='logout' startIcon={<Logout/>}></Button>
    </div>
    <div className='flex gap-4 flex-wrap mt-4'>
      {displaytype==="All" && contents.map(({type,link,title,_id})=><Card key={_id} title={title} type={type} url={link} uniqueKey={_id} onDelete={()=>{Deletethispost(_id)}} canDelete={true}></Card>)}
      {displaytype!=="All" && contents.filter(content=>content.type===displaytype).map(({type,link,title,_id})=><Card key={_id} title={title} type={type} url={link} uniqueKey={_id} onDelete={()=>{Deletethispost(_id)}} canDelete={true}></Card>)}


    
    

    </div>
    </div>
    
  </div>
        
   
  
}


