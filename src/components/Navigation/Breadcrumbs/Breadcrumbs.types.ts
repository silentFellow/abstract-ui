export type BreadcrumbsProps = {
  /**
   * The styles of the BreadcrumbsStyles
   */
  styles?: {
    text?: string;
    active?: string;
    dropdown?: string;
  };

  separator?: React.ReactNode;

  path: {
    [key: string]: string | {
      showHeader?: boolean;
      [key: string]: string | boolean | undefined;
    };
  };
};

export type BreadcrumbsStyles = {
  text?: string;
  active?: string;
  dropdown?: string;
};
