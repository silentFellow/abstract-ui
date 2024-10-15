import ContentCopy from "./ContentCopy";

export default {
  title: "Content copy",
  component: ContentCopy,
};

export const ContentCopyWithHeading = () => {
  const multiLineString = `
<ContentCopy
  content={multiLineString}
/>
  `;

  return <ContentCopy heading="Multi-line string" content={multiLineString} />;
};

export const ContentCopyWithoutHeading = () => {
  const multiLineString = `
<ContentCopy
  content={multiLineString}
/>
  `;

  return <ContentCopy content={multiLineString} />;
};

export const ContentCopyWithCustomStyles = () => {
  const multiLineString = `
<ContentCopy
  content={multiLineString}
/>
  `;

  const customStyles = {
    content: "text-gray-700 dark:text-gray-300",
    button: "bg-blue-500 text-white p-2 rounded hover:opacity-90 hover:bg-blue-500",
    container: "p-4 border border-gray-300 dark:border-gray-700 rounded",
    seperator: "h-px w-full bg-gray-300 dark:bg-gray-700 shadow-xl",
    heading: "text-lg font-bold mb-2",
  };

  return (
    <ContentCopy heading="Multi-line string" content={multiLineString} styles={customStyles} />
  );
};
