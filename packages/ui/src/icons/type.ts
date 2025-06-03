export interface SvgType extends React.SVGAttributes<SVGElement> {
  size?: number;
  className?: string;
  color?: string;
}

export enum SvgSizeInSQR {
  PRIMARY = 20,
}
