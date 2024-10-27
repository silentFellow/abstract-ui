import DatePicker from "./DatePicker";

export default {
  title: "Date Picker",
  component: DatePicker,
};

export const DefaultDatePicker = () => {
  return <DatePicker onChange={date => console.log(date)} placeholder="Select a date" />;
};

export const DatePickerWithTime = () => {
  return (
    <DatePicker
      onChange={date => console.log(date)}
      withTime={true}
      placeholder="Select a date and time"
    />
  );
};

export const DatePickerWithoutTime = () => {
  return (
    <DatePicker
      onChange={date => console.log(date)}
      withTime={false}
      placeholder="Select a date"
    />
  );
};

export const DatePickerWithCustomStyles = () => {
  return (
    <DatePicker
      onChange={date => console.log(date)}
      styles={{
        container: "bg-gray-100 dark:bg-gray-900 p-4 rounded-lg",
        button: "bg-blue-500 text-white",
      }}
      placeholder="Select a date"
    />
  );
};

export const DatePickerWithDisabledFutureDates = () => {
  return (
    <DatePicker
      onChange={date => console.log(date)}
      disableFuture={true}
      placeholder="Select a date"
    />
  );
};
