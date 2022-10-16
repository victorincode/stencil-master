import { newSpecPage } from '@stencil/core/testing';
import { MenuItem } from '../menu-item';

describe('menu-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MenuItem],
      html: `<menu-item></menu-item>`,
    });
    expect(page.root).toEqualHtml(`
      <menu-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </menu-item>
    `);
  });
});
