import { Button } from "../components/Button";
import { Input } from "../components/input";
import { Auth } from "../icons/auth";

export function Signin(){
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center border">
        <div className="bg-white rounded-xl min-h-48 p-8">
            <Input placeholder="xyz@gmail.com" labelname="Email"></Input>
            <Input placeholder="******" labelname="Password"></Input>
            <div className="flex justify-center mt-6">
                <Button variant="primary" text="Signin" startIcon={<Auth/>} fullWidth={true} loading={true}></Button>
            </div>
        </div>

    </div>
}