type ScrollAreaPropsType = {
  children: React.ReactNode;
  className: string;
};

export const ScrollArea = ({ children, className }: ScrollAreaPropsType) => {
  return (
    <div
      className={`overflow-y-auto overflow-x-hidden [scrollbar-width:thin]
  [scrollbar-color:transparent_transparent]
  hover:[scrollbar-color:var(--background-color-800C)_transparent]
  transition-all ${className}`}
    >
      {children}
    </div>
  );
};
