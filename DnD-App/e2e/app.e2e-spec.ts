import { DnDAppPage } from './app.po';

describe('dn-d-app App', () => {
  let page: DnDAppPage;

  beforeEach(() => {
    page = new DnDAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
