import { ReactElement } from "react";

interface ButtonProps{
    variant: "primary" | "secondary";
    text: string;
    startIcon?: ReactElement;
    onClick?: ()=>void;
    fullWidth?: boolean;
    loading?: boolean;
    
    
}
const VariantStyle={
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-600",
}
const defaultStyles="px-4 py-2 rounded-md font-light flex items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1";

export const Button=(props: ButtonProps)=>{
    return <button onClick={props.onClick} className={`${VariantStyle[props.variant]} ${defaultStyles}  ${props.fullWidth ? " w-full flex justify-center items-center" : ""} ${props.loading ? "opacity-45	" : ""}`} >
        <div className="pr-2">{props.startIcon}</div>
        {props.text}
        </button>
}