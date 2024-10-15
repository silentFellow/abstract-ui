"use client";

import { cn } from "@/lib/utils";
import { ExpandableTextAreaProps, ExpandableTextAreaStyles } from "./ExpandableTextArea.types";
import { useRef, useEffect, useState, forwardRef } from "react";
import { Textarea } from "@/components/ui/textarea";

const ExpandableTextArea = forwardRef<HTMLTextAreaElement, ExpandableTextAreaProps>(
  (
    { styles, placeholder = "Enter text here...", minRows = 1, maxCharLimit, onChange, ...props },
    ref,
  ) => {
    const [style, setStyle] = useState<ExpandableTextAreaStyles>({});
    const [val, setVal] = useState<string>("");
    const textInputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
      setStyle({
        input: cn(
          "full bg-[#f5f5f5] dark:bg-[rgb(33,33,33)] p-2 rounded-md resize-none no-focus hide-scrollbar",
          styles?.input || "",
        ),
        charLimit: cn("text-xs text-gray-500 dark:text-gray-400", styles?.charLimit || ""),
      });
    }, [styles]);

    useEffect(() => {
      const currentRef = ref && typeof ref !== "function" ? ref : textInputRef;
      if (!currentRef.current) return;

      currentRef.current.style.height = "auto";
      currentRef.current.style.height = currentRef.current?.scrollHeight + "px";
    }, [textInputRef, ref, val]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      let newValue = e.target.value;
      if (maxCharLimit && newValue.length > maxCharLimit) {
        newValue = newValue.substring(0, maxCharLimit);
      }
      setVal(newValue);
      if (onChange) onChange(e);
    };

    return (
      <section className="full">
        <Textarea
          value={val}
          ref={ref ? ref : textInputRef}
          className={style.input}
          placeholder={placeholder}
          rows={minRows}
          onChange={handleChange}
          {...props}
        />

        {maxCharLimit && (
          <span className={style.charLimit}>
            {val.length}/{maxCharLimit}
          </span>
        )}
      </section>
    );
  },
);

ExpandableTextArea.displayName = "ExpandableTextArea";

export default ExpandableTextArea;
