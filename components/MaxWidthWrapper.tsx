import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
  className?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const MaxWidthWrapper = ({
  className = "",
  fullWidth = false,
  children,
}: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        !fullWidth && "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;