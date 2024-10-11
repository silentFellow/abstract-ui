import { useState } from "react";

import DropDown from "./DropDown";

export default {
  title: "Filter drop-down",
  component: DropDown,
};

export const DropDownSearch = () => {
  const [val, setVal] = useState<string[]>([]);
  console.log(val);

  return (
    <DropDown
      onChange={(val) => setVal(val as string[])}
      options={[
        {
          label: "google",
          value: "google.com",
        },
        {
          label: "github",
          value: "github.com",
        },
      ]}
    />
  );
};

export const DropDownWithoutSearch = () => {
  const [val, setVal] = useState<string[]>([]);
  console.log(val);

  return (
    <DropDown
      withSearch={false}
      onChange={(val) => setVal(val as string[])}
      options={[
        {
          label: "google",
          value: "google",
        },
        {
          label: "github",
          value: "github",
        },
      ]}
    />
  );
};

export const DropDownAsRadio = () => {
  const [val, setVal] = useState<string>("");
  console.log(val);

  return (
    <div>
      <DropDown
        radio
        onChange={(val) => setVal(val as string)}
        options={[
          {
            label: "google",
            value: "google",
          },
          {
            label: "google",
            value: "google",
          },
          {
            label: "github",
            value: "github",
          },
        ]}
      />
    </div>
  );
};
