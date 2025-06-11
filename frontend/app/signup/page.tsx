"use client";
import { Appbar } from "@/components/Appbar";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { CheckFeature } from "@/components/CheckFeature";
import { Input } from "@/components/Input";

export default function (){
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
                <div className="flex-1 pt-6 pb-6 mt-12 px-4 border rounded-xl">
                    <Input label="Name" onChange={e=>{}} type="text" placeholder="Your name"></Input>
                    <Input label="Email" onChange={e=>{}} type="text" placeholder="Your email"></Input>
                    <Input label="Password" onChange={e=>{}} type="password" placeholder="Password"></Input>

                    <div className="pt-3">
                        <PrimaryButton onClick={()=>{}} size="big">Get started free</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
}