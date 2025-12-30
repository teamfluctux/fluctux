import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { mdxToHtml } from "@fluctux/shared";
import { notFound } from "next/navigation";

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
      <div className="max-w-[650px] mx-auto w-full h-fit py-16">
        <article className="prose  prose-gray dark:prose-invert w-full px-5 h-fit">
          {MdxComponent}
        </article>
      </div>
    );
  } catch (error) {
    console.log(error);
    return notFound();
  }
}
