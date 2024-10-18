"use client";

import { cn } from "@/lib/utils";
import React, { useMemo } from "react";
import { BreadcrumbsProps } from "./Breadcrumbs.types";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const renderDropdownMenuItems = (
  value: { [key: string]: string | boolean | undefined },
  isLast: boolean,
  activeStyle: string,
) => {
  return Object.keys(value).map((item, index) => {
    if (value[item] === undefined || typeof value[item] === "boolean") return null;

    const dropDownIsLast = index === Object.keys(value).length - 1;

    return (
      <DropdownMenuItem key={item} className="focus:outline-none">
        {isLast && dropDownIsLast ? (
          <BreadcrumbPage className={activeStyle}>{item}</BreadcrumbPage>
        ) : (
          <BreadcrumbLink className="full" href={value[item]}>
            {item}
          </BreadcrumbLink>
        )}
      </DropdownMenuItem>
    );
  });
};

const Breadcrumbs = ({ styles, separator, path }: BreadcrumbsProps) => {
  const style = useMemo(
    () => ({
      text: cn("", styles?.text || ""),
      active: cn("", styles?.active || ""),
      dropdown: cn("focus:outline-none", styles?.dropdown || ""),
    }),
    [styles],
  );

  const keys = useMemo(() => Object.keys(path), [path]);

  return (
    <Breadcrumb className="focus:outline-none">
      <BreadcrumbList className={style.text}>
        {keys.map((key, index) => {
          const value = path[key];
          const isLast = index === keys.length - 1;
          const isDropdown = typeof value === "object";

          return (
            <React.Fragment key={key}>
              <BreadcrumbItem className="focus:outline-none">
                {isDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 focus:outline-none">
                      {value.showHeader ? (
                        <>
                          {key}
                          <ChevronDownIcon />
                        </>
                      ) : (
                        <>
                          <BreadcrumbEllipsis className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </>
                      )}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className={style.dropdown}>
                      {renderDropdownMenuItems(value, isLast, style.active)}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : isLast ? (
                  <BreadcrumbPage className={style.active}>{key}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={value} className="focus:outline-none">
                    {key}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
