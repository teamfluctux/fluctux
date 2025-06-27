import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { mdxToHtml } from "@fluctux/shared";

export default async function Page({
  params,
  children,
}: {
  params: Promise<{ visitorType: string; slug: string[] }>;
  children: React.ReactNode;
}) {
  const { visitorType, slug } = await params;

  const filePath = `src/content/${visitorType}/${slug.join("/")}.mdx`;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(fileContent);
  const MdxComponent = await mdxToHtml(content);
  
  return (
    <div className="border w-full h-full overflow-y-scroll grid grid-cols-[1fr_300px]">
      <div className="w-full">
        <article className="prose max-w-[600px] w-full mx-auto prose-gray dark:prose-invert ">
          {MdxComponent}
        </article>
      </div>
      <div className="w-full h-full sticky top-0 border"></div>
    </div>
  );
}
