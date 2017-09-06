import { AlliedTelesisAppPage } from './app.po';

describe('allied-telesis-app App', () => {
  let page: AlliedTelesisAppPage;

  beforeEach(() => {
    page = new AlliedTelesisAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
