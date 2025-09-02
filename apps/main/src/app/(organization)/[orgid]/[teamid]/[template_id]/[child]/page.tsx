import React from "react";

type TemplateChildPagePropsType = {
  params: Promise<{ child: string }>;
};

export default async function TemplateChildPage({
  params,
}: TemplateChildPagePropsType) {
  const { child } = await params;

//   first get the template_type from mobx and render the component based on template_type

/**
 * if student 
 *      render student_template
 * else if software
 *      render software_template
 */

/**
 * in child single the data will be fetched when the component will be render
 */
  return <div>{child}</div>;
}
