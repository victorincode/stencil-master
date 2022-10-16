import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'menu-item',
  styleUrl: 'menu-item.css',
  shadow: true,
})
export class MenuItem {
  @Prop({ mutable: true }) item: any;
  @Prop({ mutable: true }) displayChildren: boolean;
  @Prop() showCheckbox = false;
  toggleDisplayChildren() {
    this.displayChildren = !this.displayChildren;
  }
  selectItem() {
    console.log(this);
    this.displayChildren = true;
    if (this.item.children) {
      this.item.children.forEach(child => {
        console.log(`Child: ${child.label}`);
        if (child.children) {
          console.log('It has children.');
          const childTime = this.selectItem.bind(child);
          childTime();
        }
      });
    }
  }
  render() {
    return (
      <Host>
        <li>
          {this.item.children ? <button onClick={() => this.toggleDisplayChildren.bind(this)}>{this.displayChildren ? '>' : 'v'}</button> : ''}
          {this.showCheckbox ? <input type="checkbox" onClick={() => this.selectItem()} /> : ''}
          {this.item.label}
          {this.item.children && this.displayChildren ? this.item.children.map(child => <menu-item item={child} class="child-item" showCheckbox={true}></menu-item>) : ''}
        </li>
        <slot></slot>
      </Host>
    );
  }
}
