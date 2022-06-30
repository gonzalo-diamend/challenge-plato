import {homePage} from '../../cypress/pageObjects/homePagePO';

describe('empty spec', () => {
  it('Home Loading', () => {
    homePage.loadPage()
    homePage.verifyElementsHome1()
    homePage.changePageLabel()
  })
})