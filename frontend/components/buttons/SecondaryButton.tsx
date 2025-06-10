import { ReactNode } from "react"

export const SecondaryButton = ({children,onClick,size = "small"}:{
    children:ReactNode,
    onClick: () => void,
    size?:"big" | "small"
}) =>{
    return <button
        type="button"
        onClick={onClick}
        className={`${size === "small" ? "text-sm font-semibold" : "text-xl"} ${size === "small" ? "px-6 py-2" : "px-10 py-4"} hover:shadow-md cursor-pointer border text-black rounded-full`}
    >
        {children}
    </button>
}