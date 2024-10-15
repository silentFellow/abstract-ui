"use client";

import { useState, useEffect } from "react";
import { DropDownStyles, DropDownProps, DropDownOptions } from "./DropDown.types";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const DropDown = ({
  label = "Select Items",
  styles,
  withSearch = true,
  options = [],
  radio = false,
  inputPlaceHolder = "search items...",
  onChange,
}: DropDownProps) => {
  const [style, setStyle] = useState<DropDownStyles>({});

  const [selected, setSelected] = useState<string[] | string>(() => {
    return radio ? "" : [];
  });

  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    setStyle({
      button: cn(
        "bg-[#f5f5f5] dark:bg-[rgb(33,33,33)] full rounded-md no-focus",
        styles?.button || "",
      ),
      dropdown: cn(
        "mt-1 w-64 flex flex-col px-3 bg-[#f5f5f5] dark:bg-[rgb(33,33,33)] shadow-xl",
        styles?.dropdown || "",
      ),
      input: cn("no-focus", styles?.input || ""),
      text: cn("", styles?.text || ""),
      noResult: cn("text-xs font-bold text-center p-3", styles?.noResult || ""),
    });
  }, [styles]);

  const filteredOptions = options.filter((option: DropDownOptions) =>
    option.label.includes(filter),
  );

  const handleChange = (value: string, checked: boolean) => {
    let newValue: string | string[];

    if (radio) {
      newValue = selected === value ? "" : value;
    } else {
      newValue = checked
        ? [...(selected as string[]), value]
        : (selected as string[]).filter(v => v !== value);
    }

    setSelected(newValue);

    // Ensure onChange is called with the correct type
    if (onChange) onChange(newValue);
  };

  return (
    <DropdownMenu onOpenChange={() => setFilter("")}>
      <DropdownMenuTrigger asChild className={style.button}>
        <Button variant="outline">{radio && selected ? selected : label}</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className={style.dropdown}>
        <DropdownMenuSeparator />

        {/* search */}
        {withSearch && (
          <Input
            value={filter}
            type="text"
            placeholder={inputPlaceHolder}
            className={style.input}
            onChange={e => setFilter(e.target.value)}
          />
        )}

        {/* drop-down */}
        {filteredOptions.length === 0 ? (
          <p className={style.noResult}>No result found</p>
        ) : (
          filteredOptions.map((option: DropDownOptions) =>
            !radio ? (
              <DropdownMenuCheckboxItem
                key={option.value}
                checked={(selected as string[]).includes(option.value)}
                onCheckedChange={checked => handleChange(option.value, checked)}
              >
                {option.label}
              </DropdownMenuCheckboxItem>
            ) : (
              <DropdownMenuRadioGroup
                key={option.value}
                value={selected as string}
                onValueChange={value => handleChange(value, true)}
              >
                <DropdownMenuRadioItem value={option.value}>{option.label}</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            ),
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
