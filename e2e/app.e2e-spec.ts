import { EssPage } from './app.po';

describe('ess App', () => {
  let page: EssPage;

  beforeEach(() => {
    page = new EssPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
