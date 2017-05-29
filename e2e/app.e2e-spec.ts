import { FreyaPage } from './app.po';

describe('freya App', () => {
  let page: FreyaPage;

  beforeEach(() => {
    page = new FreyaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
