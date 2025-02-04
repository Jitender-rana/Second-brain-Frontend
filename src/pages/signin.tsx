import { useRef, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/input";
import { Auth } from "../icons/auth";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Backend_Url=import.meta.env.VITE_BACK_ULR;


export function Signin(){
    const [doingsignin,setdoingsignin]=useState(false);
    const emailRef=useRef<HTMLInputElement>();
    const passwordRef=useRef<HTMLInputElement>();
    const navigate=useNavigate();
    async function signin(){
        setdoingsignin(true);
        const email=emailRef.current?.value;
        const password=passwordRef.current?.value;
        const response= await axios.post(`${Backend_Url}/user/signin`,{
            email: email,
            password: password,
        })
        if(response.data.error){
            setdoingsignin(false);
            alert(response.data.error);
        }else if(response.data.wrongemail){
            setdoingsignin(false);
            alert(response.data.message);
        }else if(response.data.wrongpassword){
            setdoingsignin(false);
            alert(response.data.message);
        }else if(response.data.token){
            setdoingsignin(false);
            localStorage.setItem("token",response.data.token);
            navigate("/dashboard");
        }else{
            setdoingsignin(false);
            alert("An error occurred");
        }


    }
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center border">
        <div className="bg-white rounded-xl min-h-48 p-8">
            <div className="flex justify-center text-3xl text-gray-600 mb-4 font-sans"><h1>Signin</h1></div>
            <Input  reference={emailRef} marginleft={true} placeholder="xyz@gmail.com" labelname="Email" type="text"></Input>
            <Input reference={passwordRef} placeholder="******" labelname="Password" type="password"></Input>
            <div className="  flex justify-end text-purple-600 text-xs p-2  underline underline-offset-4 hover:no-underline"><Link to="/signup">Create account</Link></div>
            <div className="flex justify-center mt-6">
                <Button variant="primary" text="Signin" startIcon={<Auth/>} fullWidth={true} loading={doingsignin} onClick={signin}></Button>
            </div>
        </div>

    </div>
}