import { DetailedHTMLProps, ReactHTML } from 'react';
import { HTMLAttributes } from 'react';

export interface TextViewProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    title: string,

}