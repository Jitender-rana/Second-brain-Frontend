import { useRef, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/input";
import { Auth } from "../icons/auth";
import { useNavigate , Link } from "react-router-dom";
import axios from "axios";
const Backend_Url=import.meta.env.VITE_BACK_ULR;

export function Signup(){
    const [doingsignin,setdoingsignin]=useState(false);
    const usernameRef=useRef<HTMLInputElement>();
    const passwordRef=useRef<HTMLInputElement>();
    const navigate=useNavigate();
    async function signup(){
        setdoingsignin(true);
        const username=usernameRef.current?.value;
        const password=passwordRef.current?.value;
        console.log(username)
        
        const response=await axios.post(`${Backend_Url}/user/signup`,{
            email: username,
            password: password,
        })
        console.log(`the response sent is: ${response.data}`);
        if(response.data.error){
            alert(response.data.error);
            setdoingsignin(false);
        }else if(response.data.exist){
            alert("Userwith this email already exist , try another one");
            setdoingsignin(false);
        }else if(response.data.data){
            setdoingsignin(false);
            navigate("/signin");
            alert("user created successfully");
            

        }

    }
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center border">
        <div className="bg-white rounded-xl min-h-48 p-8">
            <div className="flex justify-center text-3xl text-gray-600 mb-4 font-sans"><h1>Signup</h1></div>
            <Input marginleft={true} reference={usernameRef} placeholder="xyz@gmail.com" labelname="Email" type="text"></Input>
            <Input reference={passwordRef} placeholder="******" labelname="Password" type="password"></Input>
            <div className="  flex justify-end text-purple-600 text-xs p-2  underline underline-offset-4 hover:no-underline"><Link to="/signin">Already have account</Link></div>
            <div className="flex justify-center mt-6">
                <Button  variant="primary" text="Signup" startIcon={<Auth/>} fullWidth={true} loading={doingsignin} onClick={signup} ></Button>
            </div>
        </div>

    </div>
}