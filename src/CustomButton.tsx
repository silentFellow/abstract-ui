import { ReactNode, useState } from "react";
import { Button } from "./components/ui/button";

export interface Props {
  name: string;
}

const CustomButton = ({ name }: Props): JSX.Element => {
  return (
    <Button>Hello world</Button>
  )
}

export default CustomButton;
