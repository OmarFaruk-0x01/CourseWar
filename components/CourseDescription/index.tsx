import { FC } from "react";

interface CourseDescriptionProps{
    text: string
    isHtml: boolean
}

const CourseDescription: FC<CourseDescriptionProps> = ({text,isHtml}) => {
    if (isHtml) {
        return <p dangerouslySetInnerHTML={{__html: text}}></p>
    }
    return <p className="text-sm font-medium text-slate-500">{text}</p>
}

export default CourseDescription;