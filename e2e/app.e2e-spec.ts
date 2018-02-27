import { ELearningPage } from './app.po';

describe('e-learning App', () => {
  let page: ELearningPage;

  beforeEach(() => {
    page = new ELearningPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
