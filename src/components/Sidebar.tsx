import { Twitter } from "../icons/twitter";
import { Sidebaritem } from "./sidebaritem";
import { Logo } from "../icons/logo";
import { Instagram } from "../icons/instagram";
import { Youtube } from "../icons/youtube";

export function Sidebar(){
    return <div className="h-screen fixed bg-white w-72  border-gray-300 border-r-2 top-0 left-0 pl-6">
        <div className="flex text-2xl pt-8 items center">
            <div className="pr-2 text-purple-600">
                <Logo/>

            </div>
            Brainly
        </div>
        <div className="pt-8 pl-4">
        <Sidebaritem text="Twitter" icon={<Twitter/>}></Sidebaritem>
        <Sidebaritem text="Instagram" icon={<Instagram/>}></Sidebaritem>
        <Sidebaritem text="Youtube" icon={<Youtube/>}></Sidebaritem>
        </div>
    </div>
}