import { AngApp2Page } from './app.po';

describe('ang-app2 App', function() {
  let page: AngApp2Page;

  beforeEach(() => {
    page = new AngApp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
