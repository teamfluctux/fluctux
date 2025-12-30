"use client"
import { usePathname } from "next/navigation";
import React from "react";

export default  function NotFound() {
    const path_name = usePathname()
    const splited_paths = path_name.split("/")
    const get_main_path = splited_paths.slice(2, splited_paths.length)

  return <div>Tata mahin {get_main_path.map((s) => `${s} `)} </div>;
}
