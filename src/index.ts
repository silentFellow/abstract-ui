// import css
import "@/index.css";

// Suppress console warnings, errors, and logs
// some components from shadcn have some warnings
// TODO: remove the warnings rather than Suppress it
const originalConsoleLog = console.log;
const originalConsoleWarn = console.warn;
const originalConsoleError = console.error;

console.log = console.warn = console.error = () => {};

// Exporting components
export * from "@/components/Actions/ThemeSwitcher";
export * from "@/components/Actions/ShowMore";
export * from "@/components/Actions/CommandPalette";
export * from "@/components/Actions/ContentCopy";

export * from "@/components/Inputs/ExpandableTextarea";
export * from "@/components/Inputs/ImageInput";
export * from "@/components/Inputs/DropDown";

export * from "@/components/Forms/SignUpForm";
export * from "@/components/Forms/LoginForm";

// Restore console methods
console.log = originalConsoleLog;
console.warn = originalConsoleWarn;
console.error = originalConsoleError;
