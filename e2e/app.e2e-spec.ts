import { ToastCliPage } from './app.po';

describe('toast-cli App', () => {
  let page: ToastCliPage;

  beforeEach(() => {
    page = new ToastCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
