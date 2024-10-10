import { useState } from 'react';
import ImageInput from './ImageInput';

export default {
  title: 'Image Input',
  component: ImageInput,
};

export const DefaultImageInput = () => {
  const [val, setVal] = useState<string>("");
  console.log(val);

  return (
    <ImageInput
      showInput
      onChange={(val) => setVal(val)}
      styles={{
        imageContainer: "h-12 w-12"
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
        input: "ml-2"
      }}
      onChange={(val) => setVal(val)}
    />
  );
};

export const ImageInputWithDefaultImage = () => {
  const [val, setVal] = useState<string>("");
  console.log(val);

  return (
    <ImageInput
      defaultImage="/assets/providers/github.svg"
      onChange={(val) => setVal(val)}
      styles={{
        imageContainer: "h-12 w-12"
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
      onChange={(val) => setVal(val)}
      styles={{
        imageContainer: "h-12 w-12"
      }}
    />
  );
};
