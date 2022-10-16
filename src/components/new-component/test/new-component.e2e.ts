import { newE2EPage } from '@stencil/core/testing';

describe('new-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<new-component></new-component>');

    const element = await page.find('new-component');
    expect(element).toHaveClass('hydrated');
  });
});
