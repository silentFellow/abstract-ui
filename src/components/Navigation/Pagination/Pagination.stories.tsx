import Pagination from "./Pagination";

export default {
  title: "Pagination",
  component: Pagination,
};

export const BasicExample = () => {
  return <Pagination pageNumber={1} hasNext={true} path="#" />;
};

export const NoNextPage = () => {
  return <Pagination pageNumber={1} hasNext={false} path="#" />;
};

export const CustomStyles = () => {
  return (
    <Pagination
      pageNumber={2}
      hasNext={true}
      path="#"
      styles={{
        button: "bg-[rgb(33,33,33)] text-white",
        text: "text-red-700",
        container: "border border-black p-1 rounded-md opacity-90",
      }}
    />
  );
};

export const LastPage = () => {
  return <Pagination pageNumber={5} hasNext={false} path="#" />;
};
