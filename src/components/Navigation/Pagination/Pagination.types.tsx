export interface PaginationProps {
  pageNumber: number;
  hasNext: boolean;
  path: string;

  /** This is of PaginationStyles */
  styles?: {
    container?: string;
    button?: string;
    test?: string;
  };
}

export interface PaginationStyles {
  container?: string;
  button?: string;
  test?: string;
}
