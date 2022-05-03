
import { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

export interface DashboardMenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hideText?: boolean;
  showBg?: boolean;
  active?: boolean;
  title: string;
  icon: IconType;
  extentClassName?: string;
}