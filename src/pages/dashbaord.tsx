

import { Sidebar } from "../components/Sidebar";
import { RightsideBar } from "./RightsideBar";
import { ReactNode,useState,createContext } from "react";

enum displaytypes{
    All= "All",
    Youtube = "Youtube",
    Instagram = "Instagram",
    Twitter = "Twitter",
    
}


interface TypesContextTypes{
    displaytype: displaytypes;
    setdisplaytype: React.Dispatch<React.SetStateAction<displaytypes>>;
    displaytypes: typeof displaytypes
}


export const TypesContext=createContext<TypesContextTypes>({
    displaytype: displaytypes.All, 
    setdisplaytype: () => {}, 
    displaytypes, 
});



function TypesContextProvider({children}:{children: ReactNode}){
    const [displaytype,setdisplaytype]=useState(displaytypes.All);

    return <TypesContext.Provider value={{displaytype,setdisplaytype,displaytypes}}>
        {children}
    </TypesContext.Provider>

}





export function Dashboard(){
    return <div>
        <TypesContextProvider>
        <Sidebar/>
        <RightsideBar/>
        </TypesContextProvider>   
    </div>
}