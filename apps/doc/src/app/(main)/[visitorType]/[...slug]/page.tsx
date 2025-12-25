import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { mdxToHtml } from "@fluctux/shared";

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
        <div className=" w-full h-full grid grid-cols-[1fr_300px]">
          <div className=" max-w-[650px] w-full mx-auto px-3 py-14">
            <article className="prose  prose-gray dark:prose-invert ">
              {MdxComponent}
            </article>
          </div>
          <div className="w-full h-full sticky top-0"></div>
        </div>
      </>
    );
  } catch (error) {
    console.log(error);

    return <div>error</div>;
  }
}
