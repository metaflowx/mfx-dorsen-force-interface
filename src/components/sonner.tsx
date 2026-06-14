"use client";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
    return (
        <Sonner
            className="toaster group"
            style={
                {
                    "--normal-bg": "#000",        // background
                    "--normal-text": "#e5e7eb",      // text color
                    "--normal-border": "#A79CFF",    // border
                } as React.CSSProperties
            }
            {...props}
        />
    );
};

export { Toaster };
