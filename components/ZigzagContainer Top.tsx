"use client"
import { cn } from "@/lib/utils";

interface ZigzagContainerProps {
    height?: string;
    className?: string;
    children?: React.ReactNode;
}

const ZigzagContainerTop = ({ height, className }: ZigzagContainerProps) => {
    return (
        <div 
            className={cn(
                "relative w-full",
                className
            )}
            style={{ height }}
        >
            {/* Top zigzag border */}
            <div className="absolute top-[50px] left-0 w-full h-[50px] bg-transparent">
                <div className="absolute inset-0 clip-path-zigzagTop bg-[#6e00b3] opacity-80" />
            </div>
            

       
        
        </div>
    );
};

export default ZigzagContainerTop; 