import {homePage} from '../pageObjects/homePagePO';

/* Automated test cases
Scenario 1 -> Checking elements of the home page and functionality of the different action buttons
Scenario 2 -> Check and verify changing labels on the home page
Scenario 3 -> Checking elements of the remaining test scenarios

*/

describe('Plato - Automated Scenarios', () => {
  it('Verify elements of the home', () => {
    homePage.loadPage()
    homePage.verifyElementsHome1()
  })

  it('Changing page types', () => {
    homePage.changePageLabel()
  })

  it('hecking elements of the remaining labels ', () => {
    homePage.loadPage()
    homePage.changePageLabel();
  })
})