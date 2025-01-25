"use client"
import { cn } from "@/lib/utils";

interface ZigzagContainerProps {
    height?: string;
    className?: string;
    children?: React.ReactNode;
}

const ZigzagContainer = ({ height, className, children }: ZigzagContainerProps) => {
    return (
        <div 
            className={cn(
                "relative w-full",
                className
            )}
            style={{ height }}
        >

            {/* Bottom zigzag border */}
            <div className="-mt-[0px] bottom-0 left-0 w-full h-[50px] bg-transparent">
                <div className="absolute inset-0 clip-path-zigzag bg-[#6e00b3] opacity-80" />
            </div>
        </div>
    );
};

export default ZigzagContainer; 