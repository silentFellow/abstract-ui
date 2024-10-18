"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { ShowMoreProps } from "./ShowMore.types";
import { Button } from "@/components/ui/button";
import { DoubleArrowDownIcon, DoubleArrowUpIcon } from "@radix-ui/react-icons";

const ShowMore = ({ styles, expanded = false, onClick }: ShowMoreProps) => {
  const style = useMemo(
    () => ({
      line: cn("w-full h-px bg-gray-400 dark:bg-gray-800", styles?.line || ""),
      button: cn(
        "font-bold rounded-full border-px border-inherit absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
        styles?.button || "",
      ),
    }),
    [styles],
  );

  return (
    <section className="w-full relative ">
      <div className={style.line} />

      <Button onClick={onClick} className={style.button}>
        {expanded ? "Show Less" : "Show More"}
        <span className="ml-2">{expanded ? <DoubleArrowDownIcon /> : <DoubleArrowUpIcon />}</span>
      </Button>
    </section>
  );
};

export default ShowMore;
