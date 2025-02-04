import { Instagram } from "../icons/instagram";
import { Deleteicon } from "../icons/delete";
import { Shareicon } from "../icons/share";
import axios from "axios";
import { Twitter } from "../icons/twitter";
import { Youtube } from "../icons/youtube";
const Backend_Url=import.meta.env.VITE_BACK_ULR;
interface Cardprops{
    title: string;
    url: string;
    type: "Youtube" | "Twitter" |"Instagram";
    uniqueKey: string;
    onDelete?: ()=>void;
    canDelete?: boolean;
}
export const Card=({title,url,type,uniqueKey,onDelete,canDelete}: Cardprops)=>{
    
    async function deletefun() {
        try {
            console.log(uniqueKey);
            const response = await axios.put(`${Backend_Url}/content/delete-content`, {
                contentId: uniqueKey,

            },{
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`}
            });
            if(response.data.deleted){
                //refresh(); 
                console.log(response.data.message)
                if(onDelete)onDelete();
                

            }
        } catch (error) {
            
        }
    }

    return <div>
        <div className="p-4 bg-white rounded-md border-gray-200 max-w-72  border min-h-48 min-w-72 transition delay-150 duration-300 ease-in-out hover:-translate-y-1">
                <div className="flex justify-between">
                    <div className="flex items-center text-lg font-sans ">
                        <div className=" text-gray-500 pr-2">{type=="Instagram" && <Instagram/>}{type=="Twitter" && <Twitter/>}{type=="Youtube" && <Youtube/>}</div>
                        {title}

                    </div>
                    <div className="flex items-center">
                        <div className="pr-2 text-gray-500 cursor-pointer"><a href={url}><Shareicon/></a></div>
                        {canDelete && <div onClick={()=>{deletefun();}} className="text-gray-500 cursor-pointer"><Deleteicon/></div>}

                    </div>

                </div>
                <div className="pt-4">
                {type === "Youtube" && <iframe className="w-full rounded" src={url.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                {type === "Twitter" && <blockquote className="twitter-tweet h-full">
                    <a href={url.replace("x.com", "twitter.com")}></a> 
                </blockquote>}
                {type === "Instagram" && <iframe  className="w-full" width="320" height="440" src={`${url}embed/`} frameBorder="0"></iframe>}
            </div>
        </div>
    </div>
}













{/* <blockquote class="instagram-media" data-instgrm-version="7" >
<a href="https://www.instagram.com/p/BT8cmZRlkVJ/"></a> 
</blockquote>
<script async defer src="//platform.instagram.com/en_US/embeds.js"></script> */}

// https://www.instagram.com/p/DDluEq2RuAH/