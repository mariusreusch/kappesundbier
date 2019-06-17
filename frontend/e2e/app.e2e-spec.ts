import { KappesUndBierPage } from './app.po';

describe('kappesundbier App', () => {
  let page: KappesUndBierPage;

  beforeEach(() => {
    page = new KappesUndBierPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
