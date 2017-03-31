import { NgxFillHeightPage } from './app.po';

describe('ngx-fill-height App', () => {
  let page: NgxFillHeightPage;

  beforeEach(() => {
    page = new NgxFillHeightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
