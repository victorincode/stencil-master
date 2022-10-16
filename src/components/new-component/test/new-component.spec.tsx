import { newSpecPage } from '@stencil/core/testing';
import { NewComponent } from '../new-component';

describe('new-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NewComponent],
      html: `<new-component></new-component>`,
    });
    expect(page.root).toEqualHtml(`
      <new-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </new-component>
    `);
  });
});
