import CommandPalette from './CommandPalette';
import { CommandPaletteOption, CommandPaletteStyles } from './CommandPalette.types';
import { MagnifyingGlassIcon, FileIcon, GitHubLogoIcon } from '@radix-ui/react-icons';

export default {
  title: 'Command Palette',
  component: CommandPalette,
};

const options: CommandPaletteOption[] = [
  {
    heading: "File",
    contents: [
      {
        icon: <FileIcon className='h-4 w-4 mr-2' />,
        label: "New File",
        onSelect: () => console.log("New File"),
      },
      {
        icon: <GitHubLogoIcon className='h-4 w-4 mr-2' />,
        label: "Save File",
        onSelect: () => console.log("Save File"),
      },
    ],
  },
  {
    heading: "Edit",
    contents: [
      {
        // icon: <MagnifyingGlassIcon className='h-4 w-4 mr-2' />,
        label: "Find",
        onSelect: () => console.log("Find"),
      },
    ],
  },
];

const customStyles: CommandPaletteStyles = {
  input: "data-[selected=true]:shadow-xl",
  options: "",
  heading: "",
};

export const BasicExample = () => (
  <div className="w-96">
    <CommandPalette
      options={options}
      triggerKeys={{
        leaders: ["metaKey", "ctrlKey"],
        keys: ["p"]
      }}
    />
  </div>
);

export const WithCustomStyles = () => (
  <div className="w-96">
    <CommandPalette
      options={options}
      styles={customStyles}
      triggerKeys={{
        leaders: ["metaKey", "ctrlKey"],
        keys: ["p"]
      }}
    />
  </div>
);

export const WithDifferentTriggerKeys = () => (
  <div className="w-96 center">
    <p className="text-sm text-muted-foreground">
      Press{" "}
      <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        <span className="text-xs">⌘</span>J
      </kbd>
    </p>
    <CommandPalette
      options={options}
      show={false}
      triggerKeys={{
        leaders: ["ctrlKey"],
        keys: ["j"]
      }}
    />
  </div>
);

export const WithMultipleGroups = () => {
  const multipleGroupsOptions: CommandPaletteOption[] = [
    ...options,
    {
      heading: "View",
      contents: [
        {
          icon: <MagnifyingGlassIcon className='h-4 w-4 mr-2' />,
          label: "Toggle Sidebar",
          onSelect: () => console.log("Toggle Sidebar"),
        },
      ],
    },
  ];

  return (
    <div className="w-96">
      <CommandPalette
        options={multipleGroupsOptions}
        triggerKeys={{
          leaders: ["metaKey", "ctrlKey"],
          keys: ["p"]
        }}
      />
    </div>
  );
};
