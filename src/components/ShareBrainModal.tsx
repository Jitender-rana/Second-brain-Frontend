import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";

type ShareBrainModalpropstypes={
    open: boolean;
    onClose: ()=>void;
    url: string;
}

export function ShareBrainModal({open,onClose,url}: ShareBrainModalpropstypes){
    async function shareBrain(){
        await window.navigator.clipboard.writeText(url);
        alert("Copied to clipboard!");
        onClose();
    }
    return <div>
        {open && <div className="w-screen h-screen bg-slate-500 bg-opacity-60 fixed top-0 left-0 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white p-6 rounded-xl">
                    <div  onClick={onClose} className="flex justify-end cursor-pointer"><CrossIcon/></div>
                    <div className="mt-2 text-lg font-sans ml-4 flex justify-center"><div className="p-1">Share this link with your friends to share your brain</div></div>
                    <div className="mt-4 text text-center flex justify-center"><div className="bg-purple-200 rounded p-2">{url}</div></div>
                    <div className="flex justify-center mt-4">
                    <Button variant="primary" onClick={()=>{shareBrain();}} text="Copy to Clipboard"></Button>
                    </div>


                </span>
            </div>
            
            
            
            </div>}
    </div>
}