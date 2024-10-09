import { ReactNode, useState } from "react";

export interface Props {
  name: string;
}

const Button = ({ name }: Props): JSX.Element => {
  const [val, setVal] = useState<string>('');
  return (
    <div className="bg-white">{name}</div>
  )
}

export default Button;
