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
      onChange={val => setVal(val as string[])}
      options={{
        Google: "/google",
        Github: "/github",
      }}
    />
  );
};

export const DropDownWithoutSearch = () => {
  const [val, setVal] = useState<string[]>([]);
  console.log(val);

  return (
    <DropDown
      withSearch={false}
      onChange={val => setVal(val as string[])}
      options={{
        Google: "/google",
        Github: "/github",
      }}
      value={["/google"]}
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
        onChange={val => setVal(val as string)}
        options={{
          Google: "/google",
          Goagle: "/goagle",
          Github: "/github",
          Linkedin: "/kitty",
        }}
      />
    </div>
  );
};
