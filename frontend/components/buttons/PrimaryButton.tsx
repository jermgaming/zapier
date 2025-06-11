import { ReactNode } from "react"

export const PrimaryButton = ({children,onClick,size = "small"}:{
    children:ReactNode,
    onClick: () => void,
    size?:"big" | "small"
}) =>{
    return <button
        type="button"
        onClick={onClick}
        className={`${size === "small" ? "text-sm font-semibold" : "text-xl font-semibold"} ${size === "small" ? "px-6 py-2" : "px-12 py-1.5"} hover:shadow-md cursor-pointer bg-amber-600 text-white text-center rounded-full`}
    >
        {children}
    </button>
}