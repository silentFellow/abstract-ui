'use client';

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils"
import { CommandPaletteProps, CommandPaletteStyles } from "./CommandPalette.types";
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"

const CommandPalette = ({
  styles,
  options,
  show = true,
  placeholder = "Type a command or search...",
  triggerKeys = {
    leaders: [],
    keys: []
  }
}: CommandPaletteProps) => {
  const [style, setStyle] = useState<CommandPaletteStyles>({});

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setStyle({
      input: cn("", styles?.input || ""),
      heading: cn("", styles?.heading || ""),
      options: cn("", styles?.input || ""),
    })
  }, [styles])

  useEffect(() => {
    if(triggerKeys.leaders.length === 0 || triggerKeys.keys.length === 0) return;

    const down = (e: KeyboardEvent) => {
      if(
        (triggerKeys.keys.includes(e.key)) &&
        (
          (e.metaKey && triggerKeys.leaders.includes("metaKey")) ||
          (e.ctrlKey && triggerKeys.leaders.includes("ctrlKey")) ||
          (e.shiftKey && triggerKeys.leaders.includes("shiftKey")) ||
          (e.altKey && triggerKeys.leaders.includes("altKey"))
        )
      ) {
        e.preventDefault()
        setIsOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [triggerKeys])

  return (
    <>
      {show && (
        <Command className="rounded-lg border shadow-md md:min-w-[450px]">
          <CommandInput
            className={`${style.input} caret-transparent`}
            placeholder="Type a command or search..."
            onClick={() => setIsOpen(true)}
          />
        </Command>
      )}

      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput
          placeholder={placeholder}
          className={style.input}
        />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {options.map((option) => (
            option.heading ? (
              <CommandGroup
                heading={option.heading}
                key={option.heading}
                className={style.heading}
              >
                {option.contents.map((item) => (
                  <CommandItem
                    // to modify style of currently selected use data-[selected=true]: pseudo class
                    className={style.options}
                    key={item.label}
                    onSelect={() => {
                      setIsOpen(false);
                      item.onSelect();
                    }}
                  >
                    {item.icon && item.icon}
                    <span>{item.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            ) : (
              option.contents.map((item) => (
                <CommandItem
                  key={item.label}
                  onSelect={() => {
                    setIsOpen(false);
                    item.onSelect();
                  }}
                >
                  {item.icon && item.icon}
                  <span>{item.label}</span>
                </CommandItem>
              ))
            )
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default CommandPalette;
