import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import {
  transformerNotationHighlight,
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationWordHighlight,
  transformerNotationFocus,
} from "@shikijs/transformers";
import rehypeSlug from "rehype-slug";
import React, { type ComponentProps, type ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { CopyCodeButton } from "../components/code";
import type { FileType } from "@fluctux/types";
import { ExternalLink } from "lucide-react";
import { GetIconByLanguage } from "./get-icons";

type AnchorProps = ComponentPropsWithoutRef<"a"> 
type PreTagProps = ComponentPropsWithoutRef<"pre">;

type CodeElementProps = {
  children?: React.ReactNode;
  className?: string;
  ["data-language"]?: string;
};

export const mdxToHtml = async (content: string) => {
  const { content: MdxComponent } = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [
            rehypePrettyCode,
            {
              theme: {
                dark: "github-dark-high-contrast",
                light: "github-light-high-contrast",
              },
              transformers: [
                transformerNotationDiff(),
                transformerNotationHighlight(),
                transformerNotationErrorLevel(),
                transformerNotationWordHighlight(),
                transformerNotationFocus(),
              ],
            },
          ],
        ],
      },
    },
    components: {
      a: ({ href, children, ...props }: AnchorProps ) => {
        const className =
          "text-text-color_1 hover:text-text-color_2 underline underline-offset-2 decoration-text-color_1 transition-colors hover:decoration-text-color_2";
        if (typeof href === "string" && href.startsWith("/")) {
          return (
            <Link href={href} className={className}>
              {children}
            </Link>
          );
        }
        return (
          <a
            href={typeof href === "string" ? href : undefined}
            target="_blank"
            rel="noopener noreferrer group"
            className={`${className} inline-flex`}
            {...props}
          >
            {children}

            <ExternalLink
              size={14}
              className="pl-0.5 group-hover:!text-blue-600"
            />
          </a>
        );
      },
      pre: ({ children, ...props }: PreTagProps) => {
        const codeElement = React.Children.only(
          children
        ) as React.ReactElement<CodeElementProps>;
        const language = codeElement?.props?.["data-language"] ?? "bash";
        const Icon =
          GetIconByLanguage[language as FileType] ?? GetIconByLanguage["text"];
        return (
          <div className="border overflow-hidden h-full w-full pt-0 my-[1.71429em] rounded-rounded_10C bg-background-color_925C border-border-color_1 next-mdx-remote-codeblock">
            <div className="h-[45px] w-full flex justify-center items-center gap-3 px-4 py-0.5">
              <div className="w-full flex justify-start items-center gap-5">
                <div className="w-full flex justify-start items-center gap-1.5 ">
                  {Icon && <Icon width={16} height={16} />}
                  <span className="text-text-color_2 text-workspace_3 ">
                    {language}
                  </span>
                </div>
              </div>
              <CopyCodeButton />
            </div>
            <pre
              {...props}
              className="my-0 border-t border-border-color_1 dark:bg-[var(--shiki-dark-bg)] light:var(--shiki-light-bg)"
            >
              {children}
            </pre>
          </div>
        );
      },
    },
  });

  return MdxComponent;
};
