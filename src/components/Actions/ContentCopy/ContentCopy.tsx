"use client";

import { cn } from "@/lib/utils";
import { useState, useMemo } from "react";
import { ContentCopyProps } from "./ContentCopy.types";
import { CheckCircledIcon, ClipboardCopyIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const ContentCopy = ({ styles, content, heading }: ContentCopyProps) => {
  const [copied, setCopied] = useState<boolean>(false);

  const style = useMemo(
    () => ({
      content: cn(
        "whitespace-pre-wrap break-keep text-justify font-mono px-6",
        styles?.content || "",
      ),
      button: cn(
        "cursor-pointer shadow-xl text-[rgb(33,33,33)] dark:text-[#f5f5f5] bg-transparent hover:bg-transparent hover:opacity-50",
        styles?.button || "",
      ),
      container: cn(
        "full flex flex-col gap-3 bg-[#f5f5f5] dark:bg-[rgb(33,33,33)] shadow-xl p-2 rounded-lg overflow-hidden",
        styles?.container || "",
      ),
      seperator: cn("h-px w-full bg-gray-400 dark:bg-gray-800 shadow-xl", styles?.seperator || ""),
      heading: cn("p-2 px-6 font-bold", styles?.heading || ""),
    }),
    [styles],
  );

  if (!content) return null;

  const handleClick = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <section className={style.container}>
      <div className={`${heading ? "justify-between" : "justify-end"} "w-full flex items-center"`}>
        {heading && <h2 className={style.heading}>{heading}</h2>}

        <Button className={style.button} disabled={copied} onClick={handleClick}>
          {!copied ? (
            <div className="flex gap-2 items-center uppercase font-bold">
              <ClipboardCopyIcon />
              <span>Copy</span>
            </div>
          ) : (
            <div className="flex gap-2 items-center uppercase font-bold">
              <CheckCircledIcon />
              <span>Copied</span>
            </div>
          )}
        </Button>
      </div>

      <hr className={style.seperator} />

      <pre className={style.content}>{content}</pre>
    </section>
  );
};

export default ContentCopy;
