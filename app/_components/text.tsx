import localFont from "next/font/local";
import React from "react";

const alibabaHeavy = localFont({
    src: '../../public/font/heavy.ttf'
});

const alibabaRegular = localFont({
    src: '../../public/font/regular.ttf'
});

// Define the type styles
const typeStyles = {
    p: { tag: 'p', className: `${alibabaRegular.className} text-base` },
    h1: { tag: 'h1', className: `${alibabaHeavy.className} text-4xl` },
    h2: { tag: 'h2', className: `${alibabaHeavy.className} text-3xl` },
    h3: { tag: 'h3', className: `${alibabaHeavy.className} text-2xl` },
    h4: { tag: 'h4', className: `${alibabaHeavy.className} text-xl` },
    'special-huge': { tag: 'h1', className: `${alibabaHeavy.className} text-7xl` },
    'special-title': { tag: 'h2', className: `${alibabaHeavy.className} text-4xl` },
    'special-text': { tag: 'p', className: `${alibabaRegular.className} text-2xl font-normal` },
};

// Define the props
interface TextProps {
    children?: React.ReactNode;
    type?: keyof typeof typeStyles;
    className?: string;
    [key: string]: any; // allow any other props
}

export default function Text({children, type = 'p', className = '', ...props}: TextProps) {
    const style = typeStyles[type] || typeStyles.p; // default to p if type is not found

    return React.createElement(
        style.tag,
        { className: `${style.className} ${className}`, ...props },
        children
    );
}