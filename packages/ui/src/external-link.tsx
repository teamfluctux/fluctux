import { ExternalLinkIcon } from "lucide-react";

type ExternalLinkPropsType = {
  linkLabel: string;
  slug?: string;
  className?: string;
  showExternalIcon?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const ExternalLink = ({
  linkLabel,
  slug,
  className,
  showExternalIcon,
  ...props
}: ExternalLinkPropsType) => {
  return (
    <a
      href={`${slug ?? "#"}`}
      target="_blank"
      rel="noopener noreferrer group"
      className={`${className} inline-flex`}
      {...props}
    >
      {linkLabel}

{showExternalIcon ?
      <ExternalLinkIcon
      size={14}
      className="pl-0.5 group-hover:text-blue-600!"
      />: null
    }
    </a>
  );
};
