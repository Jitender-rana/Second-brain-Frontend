import { Plusicon } from "../icons/plus"
import { Deleteicon } from "../icons/delete";
import { Shareicon } from "../icons/share";
interface Cardprops{
    title: string;
    url: string;
    type: "youtube" | "twitter" |"instagram";
}
export const Card=({title,url,type}: Cardprops)=>{
    return <div>
        <div className="p-4 bg-white rounded-md border-gray-200 max-w-72  border min-h-48 min-w-72">
                <div className="flex justify-between">
                    <div className="flex items-center text-md">
                        <div className="text-gray-500 pr-2"><Plusicon/></div>
                        {title}

                    </div>
                    <div className="flex items-center">
                        <div className="pr-2 text-gray-500"><Shareicon/></div>
                        <div className="text-gray-500"><Deleteicon/></div>

                    </div>

                </div>
                <div className="pt-4">
                {type === "youtube" && <iframe className="w-full" src={url.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                {type === "twitter" && <blockquote className="twitter-tweet">
                    <a href={url.replace("x.com", "twitter.com")}></a> 
                </blockquote>}
                {type === "instagram" && <iframe  className="w-full" width="320" height="440" src={`${url}embed/`} frameBorder="0"></iframe>}
            </div>
        </div>
    </div>
}













{/* <blockquote class="instagram-media" data-instgrm-version="7" >
<a href="https://www.instagram.com/p/BT8cmZRlkVJ/"></a> 
</blockquote>
<script async defer src="//platform.instagram.com/en_US/embeds.js"></script> */}

// https://www.instagram.com/p/DDluEq2RuAH/