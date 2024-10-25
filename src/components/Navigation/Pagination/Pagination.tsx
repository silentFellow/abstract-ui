"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PaginationProps, PaginationStyles } from "./Pagination.types";
import { useMemo } from "react";

function Pagination({ pageNumber, hasNext, path, styles }: PaginationProps) {
  const style: PaginationStyles = useMemo(
    () => ({
      container: cn(
        "mt-10 flex w-full items-center justify-center gap-5",
        styles?.container || "",
      ),
      button: cn("", styles?.button || ""),
      test: cn("", styles?.test || ""),
    }),
    [styles],
  );

  const handleNavigation = (direction: "prev" | "next") => {
    const nextPageNumber = direction === "prev" ? Math.max(1, pageNumber - 1) : pageNumber + 1;
    window.location.href = `${path}?page-number=${nextPageNumber}`;
  };

  if (!hasNext && pageNumber === 1) return null;

  return (
    <nav className={style.container}>
      <Button
        className={style.button}
        onClick={() => handleNavigation("prev")}
        disabled={pageNumber === 1}
        aria-label="Previous Page"
      >
        Prev
      </Button>
      <span className={style.test} aria-live="polite">
        {pageNumber}
      </span>
      <Button
        className={style.button}
        onClick={() => handleNavigation("next")}
        disabled={!hasNext}
        aria-label="Next Page"
      >
        Next
      </Button>
    </nav>
  );
}

export default Pagination;
