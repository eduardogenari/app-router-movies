import { cn } from '@/lib/utils';
import React from 'react'

type SideBarProps = {
    className: string;
    options: string[];
}
export default function SideBar({className, options}: SideBarProps) {
  return (
    <div className={cn("", className)}> 
        {options.map((option, index) => (<div key={index}>{option}</div>))}
    </div>
  );
}
