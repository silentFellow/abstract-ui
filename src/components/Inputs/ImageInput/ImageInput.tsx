"use client";

import { useState, useEffect, ChangeEvent, forwardRef } from "react";
import { Input } from "@/components/ui/input";
import type { ImageInputProps, ImageInputStyles } from "./ImageInput.types";
import { cn } from "@/lib/utils";
import { Profile } from "@/assets";
import { Label } from "@/components/ui/label";

const ImageInput = forwardRef<HTMLInputElement, ImageInputProps>(
  (
    {
      styles,
      defaultImage = Profile,
      showInput = false,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [style, setStyle] = useState<ImageInputStyles>({});
    const [image, setImage] = useState<string>("");

    useEffect(() => {
      setStyle({
        container: cn("flex items-center gap-2 p-2", styles?.container || ""),
        input: cn(
          `cursor-pointer border-none bg-transparent outline-none file:text-[rgb(33,33,33)] dark:file:text-[#f5f5f5] ${!showInput && "hidden"}`,
          styles?.input || "",
        ),
        image: cn("rounded-full full object-cover", styles?.image || ""),
        imageContainer: cn(
          "flex h-24 w-24 shadow-xl items-center justify-center rounded-full",
          styles?.imageContainer || "",
        ),
      });
    }, [styles, showInput]);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();

      const fileReader = new FileReader();

      if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];

        if (!file.type.includes("image")) return;

        fileReader.onload = async (event) => {
          const imageUrl = event.target?.result?.toString() || "";
          setImage(imageUrl);

          if (onChange) onChange(imageUrl);
        };

        fileReader.readAsDataURL(file);
      }
    };

    return (
      <section className={style.container}>
        <Label className={style.imageContainer} htmlFor="imageUpload">
          <img
            src={image || defaultImage}
            alt="image"
            className={style.image}
          />
        </Label>

        <Input
          type="file"
          accept="image/*"
          className={style.input}
          id="imageUpload"
          onChange={handleImageChange}
          ref={ref}
          {...props}
        />
      </section>
    );
  },
);

// Add displayName property
ImageInput.displayName = "ImageInput";

export default ImageInput;
