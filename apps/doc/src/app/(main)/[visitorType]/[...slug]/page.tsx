import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { mdxToHtml } from "@fluctux/shared";
import { generateTocFromMdx } from "react-mdxutils";
import { ContentAside } from "./content-aside";


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

    return (
      <>
    
        <div className=" w-full h-full overflow-y-auto scroll-smooth grid grid-cols-[1fr_320px]">
          <div className="max-w-[650px] w-full mx-auto px-3 py-14 ">
            <div className="w-full text-workspace_2 h-[50px] z-40 sticky top-0 bg-background-color_925C flex justify-start items-center gap-2 mb-6 font-weight_450">
              <span>Getting Started</span>
              <span>/</span>
              <span>Hello world</span>
            </div>
            <article className="prose  prose-gray dark:prose-invert ">
              {MdxComponent}
            </article>
          </div>
          <div className=" h-[calc(100vh-13px)] overflow-hidden sticky top-0">
            <ContentAside matterContent={content} />
          </div>
        </div>
  
      </>
    );
  } catch (error) {
    return <div>error</div>;
  }
}
