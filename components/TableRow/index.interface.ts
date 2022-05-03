import { DetailedHTMLProps, HTMLAttributes } from 'react';
import customData from '../../constants/customData';
export interface TableRowProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>{
    rowContent: typeof customData[0]
}