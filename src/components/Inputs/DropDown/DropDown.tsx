"use client";

import { useState, useMemo } from "react";
import { DropDownProps } from "./DropDown.types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronUpIcon, ChevronDownIcon, CheckIcon, RadiobuttonIcon } from "@radix-ui/react-icons";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

const DropDown = ({
  label = "Select Items",
  styles,
  withSearch = true,
  options = {},
  radio = false,
  inputPlaceHolder = "search items...",
  value = radio ? "" : [],
  noResult = "No items found...",
  onChange,
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[] | string>(value);
  const [filter, setFilter] = useState<string>("");

  const style = useMemo(
    () => ({
      input: cn("no-focus", styles?.input || ""),
      button: cn("justify-between", styles?.button || ""),
      dropdown: cn(
        "w-64 flex flex-col shadow-xl",
        styles?.dropdown
          ?.replace("hover:", "data-[selected=true]")
          .replace("focus:", "data-[selected=true]") || "",
      ),
      noResult: cn("text-xs font-bold text-center p-3", styles?.noResult || ""),
      options: cn(
        "",
        styles?.options
          ?.replace("hover:", "data-[selected=true]:")
          .replace("focus:", "data-[selected=true]:"),
      ),
    }),
    [styles],
  );

  const handleChange = (value: string): void => {
    let newValue: string | string[];

    if (radio) {
      newValue = selected === value ? "" : value;
    } else {
      newValue = !selected?.includes(value)
        ? [...(selected as string[]), value]
        : (selected as string[]).filter(v => v !== value);
    }

    setSelected(newValue);
    if (onChange) onChange(newValue);
  };

  const filteredOptions = Object.keys(options).filter(key =>
    key.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild onClick={() => setFilter("")}>
        <Button variant="outline" role="combobox" className={style.button}>
          {label}
          {isOpen ? (
            <ChevronUpIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          ) : (
            <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="full p-0">
        <Command className={style.dropdown}>
          {withSearch && (
            <Input
              autoFocus
              value={filter}
              type="text"
              placeholder={inputPlaceHolder}
              className={style.input}
              onChange={e => setFilter(e.target.value)}
            />
          )}
          <CommandEmpty className={style.noResult}>{noResult}</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {filteredOptions.map((key: string) => {
                const label = key;
                const value = options[key];

                return (
                  <CommandItem
                    key={label}
                    value={label}
                    onSelect={() => handleChange(value)}
                    className={style.options}
                  >
                    {radio ? (
                      <RadiobuttonIcon
                        className={cn(
                          "h-4 w-4 mr-2",
                          selected?.includes(value) ? "opacity-100" : "opacity-0",
                        )}
                      />
                    ) : (
                      <CheckIcon
                        className={cn(
                          "h-4 w-4 mr-2",
                          selected?.includes(value) ? "opacity-100" : "opacity-0",
                        )}
                      />
                    )}
                    <span className="text-sm">{label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default DropDown;
