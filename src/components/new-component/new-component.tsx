import { Component, Host, h, Prop } from '@stencil/core';
@Component({
  tag: 'new-component',
  styleUrl: 'new-component.css',
  shadow: true,
})
export class NewComponent {
  @Prop() someProp: string;
  items: any = [
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
      <Host>
        <ul>
          {this.items.map(menuItem => (
            <menu-item item={menuItem} showCheckbox={true}></menu-item>
          ))}
        </ul>
      </Host>
    );
  }
}
