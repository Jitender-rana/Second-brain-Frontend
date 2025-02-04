import { Logo } from "../icons/logo";
import {Link, useNavigate} from "react-router-dom";
import logo from "../assets/hero.png"
import { Button } from "../components/Button";
import { HeroCard } from "../components/herocards";
import { Submit } from "../icons/submit";
import pushpin from "../assets/pushpin.png";
import mentalhealth from "../assets/mental-health.png"
import link from "../assets/link.png"
import bolt from "../assets/electric.png"

const text1="Store and organize Instagram, Twitter, and YouTube links in one place. Your second brain keeps them visually accessible with rich embeds.";
const text2="No more lost links! Categorize, tag, and retrieve your favorite posts, videos, and tweets effortlessly. Your curated knowledge, always within reach.";
const text3="Let others explore your saved content without sharing your private token. Shareable links keep your knowledge open, yet secure";
const text4="Simple, fast, and designed for seamless browsing. Your second brain adapts to you—whether for research, inspiration, or just saving cool content.";


export function Home(){
    const navigate=useNavigate();
    return <div className="">
        <div className="bg-purple-500 min-h-24 p-6 w-full">
            <div className="flex justify-around">
                <div className="flex justify-between text-white text-lg mr-8 pr-24">
                    <Logo/>
                    <div className="ml-2 pt-1">Second brain</div>

                </div>
                <div>
                    <div className="flex text-white justify-between md:w-52">
                        <Link to="/aboutus">About us</Link>
                        <Link className="sm:block hidden"  to="/signin">signin</Link>
                        <Link className="sm:block hidden" to="/signup">signup</Link>
                    </div>

                </div>
            </div>

        </div>
        <div className="mb-0 animate-appear">
            <div className="sm:flex sm:justify-between sm:flex-row flex-col justify-center p-28 bottom-0 mb-0">
                <div className="sm:pl-36 pl-4 sm:pt-16">
                    <h1 className="text-3xl">Your Digital Memory for the Web</h1>
                    <h3 className="text-lg p-2 mt-4">Save, organize, and recall your favorite links effortlessly.</h3>
                    <div className="sm:max-w-52  mt-8"><Button variant="primary" text="Go to dashboard" onClick={()=>{
                        if(localStorage.getItem("token")){
                            navigate("/dashboard")
                        }else{
                            alert("Sign in first to access dashboard")
                            navigate("/signin")
                        }
                            
                            }} fullWidth={true} startIcon={<Submit/>}/></div>
                    <div className="flex justify-start gap-8 mt-12">
                        <Button variant="secondary" text="Sign up" onClick={()=>{navigate("/signup")}}/>
                        <Button variant="primary" text="Sign in" onClick={()=>{navigate("/signin")}} />

                    </div>
                </div>
                <div className="sm:block hidden h-96 animate-pulse">
                    <img  className="h-full mr-32"src={logo} alt="" />
                   


                </div>

            </div>


        </div>
        <div className="flex justify-center">
            <div className="grid sm:grid-cols-12 grid-cols-6 gap-12 min-h-72   sm:max-w-5xl max-w-xs animate-appear">
                <div className="sm:col-span-6 col-span-6 bg-purple-200 rounded-xl"><HeroCard title="Save & Embed Instantly" description={text1} icon={pushpin}/></div>
                <div className="sm:col-span-6 col-span-6 bg-purple-200 rounded-xl"><HeroCard title=" Your Personal Content Hub" description={text2} icon={mentalhealth}/></div>
                <div className="sm:col-span-6 col-span-6 bg-purple-200 rounded-xl"><HeroCard title="Share Your Brain, Securely" description={text3} icon={link}/></div>
                <div className="sm:col-span-6 col-span-6 bg-purple-200 rounded-xl"><HeroCard title="Built for Productivity" description={text4} icon={bolt}/></div>

            </div>
        </div>
        <div className="flex justify-center">
        <div className="bg-purple-500 w-full flex justify-center mt-24 min-h-48 p-16 gap-16">
            <div className="flex flex-col text-white gap-4">
                <p className="italic">@2025</p>
                <p>Terms of services</p>
                <p>Privacy policy</p>
                <p>Jitender rana</p>

            </div>
            
         <div className="flex flex-col text-white gap-4">
            <p className="italic">@2025</p>
            <p>Terms of services</p>
            <p>Privacy policy</p>
            <p>Jitender rana</p>
          </div>
            

        </div>
        </div>


        
    </div>
}