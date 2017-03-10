import { PiaAppPage } from './app.po';

describe('pia-app App', () => {
  let page: PiaAppPage;

  beforeEach(() => {
    page = new PiaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
