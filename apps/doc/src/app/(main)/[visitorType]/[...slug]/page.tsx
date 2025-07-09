import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { mdxToHtml } from "@fluctux/shared";
import { generateTocFromMdx } from "react-mdxutils";
import { ContentAside } from "./content-aside";
import { FxButton, LUCIDE_WORKSPACE_ICON_SIZE } from "@fluctux/ui";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Content } from "./content";

export default async function Page({
  params,
}: {
  params: Promise<{ visitorType: string; slug: string[] }>;
}) {
  const { visitorType, slug } = await params;

  try {
    const filePath = `src/content/${visitorType}/${slug.join("/")}.mdx`;
    console.log(filePath);

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content } = matter(fileContent);
    const MdxComponent = await mdxToHtml(content);
    const toc = generateTocFromMdx(content);
    return (
      <>
        <Content MdxComponent={MdxComponent as any} toc={toc} />
      </>
    );
  } catch (error) {
    return <div>error</div>;
  }
}
