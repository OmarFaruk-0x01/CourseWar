import { DetailedHTMLProps, HTMLAttributes } from "react";

export type StatusStateType = "Alright" | "In Progress" | "Out of Stock"  

export interface StatusViewPorps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    showText?: boolean
    state: string | StatusStateType
}