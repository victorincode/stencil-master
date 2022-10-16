import { Component, h, Host, Prop } from '@stencil/core';
import { TreeMenuItem } from '../../interfaces/menu-item.interface';

@Component({
  tag: 'menu-item',
  styleUrl: 'menu-item.css',
  shadow: true,
})
export class MenuItem {
  @Prop({ mutable: true }) item: TreeMenuItem;
  @Prop() showCheckbox = true;
  @Prop() label = '';
  @Prop() isDisabled = false;
  @Prop() emitTree = false;
  @Prop() compactCheckbox = false;
  @Prop() hideCaret = false;
  @Prop() showChildCount = false;
  @Prop({ mutable: true }) displayChildren = false;
  toggleDisplayChildren = () => {
    this.displayChildren = !this.displayChildren;
  };

  isParent() {
    return this.item.children ? true : false;
  }

  selectItem() {
    this.item.selected = !this.item.selected;
    this.isParent() ? this.selectParent() : this.selectChild();
    this.item = { ...this.item };
  }

  private selectParent() {
    if (this.item.indeterminate) this.item.indeterminate = false;
    if (!this.displayChildren) this.displayChildren = true;
    console.log('Selecting parent.');
    if (this.item.children.length === 1) {
      this.item.children[0].selected = this.item.selected;
      console.log('Only one child, so setting same as parent.');
    } else {
      this.item.children.map(child => {
        child.selected = true;
        console.log(`${child.label} selected: ${child.selected}`);
        if (child.children) {
          console.log(`${child.label} has children, so do them too.`);
        }
      });
    }
  }

  selectChild() {
    if (!this.item.parent || !this.item.parent.children) return;
    let allChildrenSelected = true;
    this.item.parent.children.forEach(child => {
      if (!child.selected) {
        allChildrenSelected = false;
        return;
      }
    });
    this.item.parent.selected = allChildrenSelected;
    this.item.parent.indeterminate = !this.item.parent.selected;
    console.log(`Parent ${this.item.parent.selected ? 'SHOULD' : 'should NOT'} be selected!`);
    console.log(`Parent ${this.item.parent.label} - indeterminate: ${this.item.parent.indeterminate}`);
  }

  render() {
    return (
      <Host checked={this.item.selected ? true : false}>
        <li>
          {this.item.children ? <button onClick={this.toggleDisplayChildren}>{this.displayChildren ? 'v' : '>'}</button> : ''}
          {this.showCheckbox ? <input type="checkbox" checked={this.item.selected} onClick={() => this.selectItem()} /> : ''}
          {this.item.label}
        </li>
        {this.item.children && this.displayChildren
          ? this.item.children.map(child => {
              child.parent = this.item;
              return <menu-item item={child} class="child-item"></menu-item>;
            })
          : ''}
      </Host>
    );
  }
}

/*
import { Component, h, Prop } from '@stencil/core';
import { TreeMenuItem } from '../../interfaces/menu-item.interface';

@Component({
  tag: 'menu-item',
  styleUrl: 'menu-item.css',
  shadow: true,
})
export class MenuItem {
  
  @Prop({ mutable: true }) item: TreeMenuItem;
  @Prop({ mutable: true }) displayChildren = false;
  @Prop() showCheckbox = false;
  @Prop() label = '';
  @Prop() isDisabled = false;
  @Prop() emitTree = false;
  @Prop() compactCheckbox = false;
  @Prop() hideCaret = false;
  @Prop() showChildCount = false;

  toggleDisplayChildren() {
    this.displayChildren = !this.displayChildren;
    console.log(`Displaying children for ${this.item.label}: ${this.displayChildren}`);
  }
  selectItem(item: TreeMenuItem) {
    console.log(`START_LOOP for ${item.label}`);
    console.log('This:', this);
    if (item.children) {
      this.displayChildren = true;
      item.children.map(child => {
        child.selected = true;
        console.log(`Child: ${child.label}, selected:${child.selected}`);
      });
      this.item = { ...this.item };

      item.children.forEach(child => {
        if (child.children) {
          this.selectItem(child);
        }
      });
    }
  }

  render() {
    return (
      <li>
        {this.showCheckbox ? (
          <div class="item-container">
            <div>
              {this.item.children ? (
                <button onClick={() => this.toggleDisplayChildren()}>{this.displayChildren ? 'v' : '>'}</button>
              ) : (
                <input type="checkbox" name={this.item.label} id={this.item.label} checked={this.item.selected} />
              )}
            </div>
            {this.item.children ? (
              <input type="checkbox" name={this.item.label} id={this.item.label} checked={this.item.selected} onClick={() => this.selectItem(this.item)} />
            ) : (
              ''
            )}
            <label htmlFor={this.item.label}>{this.item.label}</label>
          </div>
        ) : (
          ''
        )}
        {this.item.children && this.displayChildren ? (
          <div>
            {this.item.children.map(child => (
              <menu-item item={child} class="child-item"></menu-item>
            ))}
          </div>
        ) : (
          ''
        )}
      </li>
    );
  }
}

*/
