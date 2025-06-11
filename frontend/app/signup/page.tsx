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
    const [name,setName] = useState("");
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
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
                <div className="flex-1 pt-6 pb-6 mt-12 px-4 border border-amber-200 rounded-xl">
                    <Input label="Name" onChange={e=>{
                        setName(e.target.value)
                    }} type="text" placeholder="Your name"></Input>
                    <Input label="Email" onChange={e=>{
                        setEmail(e.target.value)
                    }} type="text" placeholder="Your email"></Input>
                    <Input label="Password" onChange={e=>{
                        setPassword(e.target.password)
                    }} type="password" placeholder="Password"></Input>

                    <div className="pt-3 flex justify-start">
                        <PrimaryButton onClick={async ()=>{
                            const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,{
                                username:email,
                                password,
                                name
                            });
                            router.push("/login")
                        }} size="big">Get started free</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
}