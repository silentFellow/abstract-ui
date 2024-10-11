import { useState } from "react";

import ShowMore from "./ShowMore";

export default {
  title: "Show More",
  component: ShowMore,
};

export const ShowMoreExample = () => {
  const [val, setVal] = useState<boolean>(false);

  return (
    <div className="w-96">
      <ShowMore
        expanded={val}
        onClick={() => setVal(!val)}
      />
    </div>
  );
};
