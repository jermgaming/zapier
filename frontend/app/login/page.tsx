"use client";
import { Appbar } from "@/components/Appbar";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { CheckFeature } from "@/components/CheckFeature";
import { Input } from "@/components/Input";
import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import { useRouter } from "next/navigation";

export default function (){
    const router = useRouter();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    return  <div>
        <Appbar/>
        <div className="flex justify-center">
            <div className="flex pt-8 max-w-4xl">
                <div className="flex-1 pt-20 px-4">
                    <div className="font-semibold text-3xl  pb-4">
                        Join millions worldwide who automate their work using zapier
                    </div>
                    <div className="pb-6">
                        <CheckFeature lable="Easy setup, no coding required "></CheckFeature>
                    </div>
                    <div className="pb-6">
                        <CheckFeature lable="Free Forever for core features "></CheckFeature>
                    </div>
                    <CheckFeature lable="14-day trial for premium features and apps "></CheckFeature>
                </div>
                <div className="flex-1 pt-6 pb-6 mt-12 px-4 border-1 border-amber-200 rounded-xl">
                    <Input label="Email" onChange={e=>{
                        setEmail(e.target.value);
                    }} type="text" placeholder="Your email"></Input>
                    <Input label="Password" onChange={e=>{
                        setPassword(e.target.value)
                    }} type="password" placeholder="Password"></Input>

                    <div className="flex justify-start pt-5">
                        <PrimaryButton onClick={async()=>{
                            const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`,{
                                username:email,
                                password,
                            });
                            localStorage.setItem("token",res.data.token);
                            router.push("/dashboard")
                        }} size="big">Login</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
}