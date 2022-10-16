import { Component, h } from '@stencil/core';
import { TreeMenuItem } from '../../interfaces/menu-item.interface';

@Component({
  tag: 'tree-list',
  styleUrl: 'tree-list.css',
  shadow: true,
})
export class TreeList {
  items: TreeMenuItem[] = [
    {
      label: 'Plants',
      value: 'plants',
      children: [
        {
          label: 'Mono-Cotyledons',
          value: 'monocotyledons',
          children: [
            {
              label: 'Coconut',
              value: 'coconut',
              selected: false,
              indeterminate: false,
              disabled: false,
            },
            { label: 'Banana', value: 'banana', selected: false, indeterminate: false, disabled: false },
          ],
          selected: false,
          indeterminate: false,
          disabled: false,
        },
        {
          label: 'Di-Cotyledons',
          value: 'dicotyledons',
          children: [{ label: 'Mango', value: 'mango', selected: false, indeterminate: false, disabled: false }],
          selected: false,
          indeterminate: false,
          disabled: false,
        },
      ],
      selected: false,
      indeterminate: false,
      disabled: false,
    },
  ];

  render() {
    return (
      <div class="tree-list-container">
        <ul class="tree-list">
          {this.items.map(menuItem => (
            <div>
              <menu-item item={menuItem}></menu-item>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
