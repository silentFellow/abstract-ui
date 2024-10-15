import { useState } from "react";
import ImageInput from "./ImageInput";

export default {
  title: "Image Input",
  component: ImageInput,
};

export const DefaultImageInput = () => {
  const [val, setVal] = useState<string>("");
  console.log(val);

  return (
    <ImageInput
      showInput
      onChange={val => setVal(val)}
      styles={{
        imageContainer: "h-12 w-12",
      }}
    />
  );
};

export const ImageInputWithCustomStyles = () => {
  const [val, setVal] = useState<string>("");
  console.log(val);

  return (
    <ImageInput
      showInput
      styles={{
        container: "bg-gray-100 dark:bg-gray-900 p-4 rounded-lg",
        imageContainer: "border-2 rounded-lg",
        image: "rounded-lg object-fill",
        input: "ml-2",
      }}
      onChange={val => setVal(val)}
    />
  );
};

export const ImageInputWithDefaultImage = () => {
  const [val, setVal] = useState<string>("");
  console.log(val);

  return (
    <ImageInput
      defaultImage="https://images.unsplash.com/photo-1481883814866-f6e972dd8916?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFnbGV8ZW58MHx8MHx8fDA%3D"
      onChange={val => setVal(val)}
      styles={{
        imageContainer: "h-12 w-12",
      }}
    />
  );
};

export const ImageInputWithHiddenFileInput = () => {
  const [val, setVal] = useState<string>("");
  console.log(val);

  return (
    <ImageInput
      showInput={false}
      onChange={val => setVal(val)}
      styles={{
        imageContainer: "h-12 w-12",
      }}
    />
  );
};
