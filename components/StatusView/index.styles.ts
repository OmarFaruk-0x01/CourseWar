import { StatusStateType } from "./index.interface";

export function getStateColor(state: string | StatusStateType): string {
    switch (state) {
        case "Alright":
            return "after:bg-green-400";
        case "In Progress":
            return "after:bg-yellow-400";
        case "Out of Stock":
            return "after:bg-red-400";
    }
    return ""
}