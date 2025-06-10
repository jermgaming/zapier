"use client";
import React from 'react';
export const LinkButton = ({children, onClick}:{children: React.ReactNode, onClick:()=>void}) =>{
        return <div className="px-4 py-2 cursor-pointer hover:bg-slate-200 rounded" onClick={onClick}>
            {children}
        </div>
}