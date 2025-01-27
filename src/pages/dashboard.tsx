import { useState } from 'react'
import { Button } from '../components/Button'
import { Plusicon } from '../icons/plus'
import { Shareicon } from '../icons/share'
import { Card } from '../components/Card'


import { CreateContent } from '../components/CreateContentModel'
import { Sidebar } from '../components/Sidebar'
import { Logout } from '../icons/Logout'

export function Dashboard() {
  const [showModal,setshowModal]=useState(false);
  
  

  return <div>
    <Sidebar/>
    <div className="ml-72 bg-gray-100 min-h-screen p-4 border-2">
    <CreateContent open={showModal} onClose={()=>{setshowModal(false)}}/>
    <div className="flex justify-end gap-4"> 
    <Button   onClick={()=>{
      console.log("the modal value is"+showModal);
      setshowModal(true);
      console.log("the modal value is"+showModal);
    }} variant='primary' text='Add content' startIcon={<Plusicon/>}></Button>
    <Button variant='secondary' text='Share' startIcon={<Shareicon/>}></Button>
    <Button variant='primary' text='logout' startIcon={<Logout/>}></Button>
    </div>
    <div className='flex gap-4 flex-wrap mt-4'>
    <Card title="youtube vedio" type='youtube' url='https://www.youtube.com/watch?v=mvhuyAuJOjY'></Card>
    <Card title="twitter post" type='twitter' url='https://x.com/jiostudios/status/1882501119571640690'></Card>
    <Card title='instagram post' type='instagram' url='https://www.instagram.com/p/DDluEq2RuAH/'></Card>
    </div>
    </div>
    
  </div>
        
   
  
}


