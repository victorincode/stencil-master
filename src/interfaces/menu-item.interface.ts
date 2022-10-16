export class MenuItem {
  label: string;
  value?: any;
  disabled?: boolean;
  selected?: boolean;
  indeterminate?: boolean;
  hideCheckbox?: boolean;
}

export class TreeMenuItem extends MenuItem {
  parent?: TreeMenuItem;
  children?: TreeMenuItem[];
  important?: boolean;
  hideCheckbox?: boolean;
  showChildCount?: boolean;
}
