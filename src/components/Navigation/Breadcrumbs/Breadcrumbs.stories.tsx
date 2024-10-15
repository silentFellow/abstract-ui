import Breadcrumbs from "./Breadcrumbs";

export default {
  title: "Breadcrumbs",
  component: Breadcrumbs,
};

export const BasicExample = () => {
  return (
    <Breadcrumbs
      path={{
        "Home": "/",
        "Page": "/page"
      }}
    />
  );
};

export const WithDropdown = () => {
  return (
    <Breadcrumbs
      path={{
        "Home": "/",
        "Section": {
          showHeader: true,
          "Subpage1": "/section/subpage1",
          "Subpage2": "/section/subpage2",
        },
        "Page": "/page",
      }}
    />
  );
};

export const CustomSeparator = () => {
  return (
    <Breadcrumbs
      separator=">>"
      path={{
        "Home": "/",
        "Page": "/page"
      }}
    />
  );
};

export const CustomStyles = () => {
  return (
    <Breadcrumbs
      styles={{
        text: "text-blue-500",
        active: "font-bold",
        dropdown: "",
      }}
      path={{
        "Home": "/",
        "Page": "/page",
        "sub": {
          "hi": "/hello",
          "hello": "/hello"
        }
      }}
    />
  );
};
