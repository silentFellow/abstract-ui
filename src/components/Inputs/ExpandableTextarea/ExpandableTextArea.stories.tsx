import ExpandableTextArea from './ExpandableTextArea';

export default {
  title: 'Expandable Text Area',
  component: ExpandableTextArea,
};

export const DefaultExpandableTextArea = () => {
  return (
    <div className="w-[42rem]">
      <ExpandableTextArea />
    </div>
  );
};

export const ExpandableTextAreaWithCharLimit = () => {
  return (
    <div className="w-[42rem]">
      <ExpandableTextArea maxCharLimit={100} />
    </div>
  );
};

export const ExpandableTextAreaWithCustomStyles = () => {
  const customStyles = {
    input: "bg-blue-100 p-4 rounded-lg",
    charLimit: "text-red-500",
  };

  return (
    <div className="w-[42rem]">
      <ExpandableTextArea styles={customStyles} maxCharLimit={150} />
    </div>
  );
};
