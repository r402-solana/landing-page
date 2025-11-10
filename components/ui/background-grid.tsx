import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundGrid = ({
  className,
  containerClassName,
}: {
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div className={cn("absolute inset-0 pointer-events-none", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
          className
        )}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

export const BackgroundGridSmall = ({
  className,
  containerClassName,
}: {
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div className={cn("absolute inset-0 pointer-events-none", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
          className
        )}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
};

export const BackgroundDots = ({
  className,
  containerClassName,
}: {
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div className={cn("absolute inset-0 pointer-events-none", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
          className
        )}
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

