import { CookncodePage } from './app.po';

describe('cookncode App', () => {
  let page: CookncodePage;

  beforeEach(() => {
    page = new CookncodePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
