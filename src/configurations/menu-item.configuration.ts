export interface TreeMenuItem{
    label: string;
    value: string;
    children: TreeMenuItem;
    selected: boolean;
    indeterminate: boolean;
    disabled: boolean;
}

