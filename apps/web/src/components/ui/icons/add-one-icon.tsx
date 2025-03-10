import React from "react";
import { SvgSizeInSQR, SvgType } from "./type";

export const AddOneIcon: React.FC<SvgType> = ({
    width = SvgSizeInSQR.PRIMARY,
    height = SvgSizeInSQR.PRIMARY,
    className,
    ...props
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width}
        height={height} viewBox="0 0 24 24" fill="none" className={className} xmlnsXlink="http://www.w3.org/1999/xlink" color="#b1b1b1" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2.75C12.6904 2.75 13.25 3.30964 13.25 4V20C13.25 20.6904 12.6904 21.25 12 21.25C11.3096 21.25 10.75 20.6904 10.75 20V4C10.75 3.30964 11.3096 2.75 12 2.75Z" fill="#b1b1b1"></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M2.75 12C2.75 11.3096 3.30964 10.75 4 10.75H20C20.6904 10.75 21.25 11.3096 21.25 12C21.25 12.6904 20.6904 13.25 20 13.25H4C3.30964 13.25 2.75 12.6904 2.75 12Z" fill="#b1b1b1"></path>
    </svg>
)