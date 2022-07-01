//Locators
const headerComponent = '.z-20 > .flex'
const homeTitle ='.no-underline > .mr-2';
const homeSubtitle ='.no-underline > .text-gray-600';
const homeSearcher ='.hidden > .nextra-search > .appearance-none';
const homeBackgroundCheck ='.cursor-pointer';
const homeGithubIcon ='[href="https://github.com/shuding/nextra"] > svg';
const bodyDescription ='.max-w-screen-md';
const bodyTitle ='h1';
const bodySubtitle ='.max-w-screen-md > p';
const bodyChangeLabel ='.text-lg';
const bodyEditText ='.text-sm';
const bodyCopyright ='.mt-24 > .text-gray-600';
const descriptionPage2 = '.max-w-screen-md > :nth-child(2)';
const subtitlePage2 = 'h3 > .text-current'
const subtitleDescriptionPage2 = '.max-w-screen-md > :nth-child(4)';
const backButtonPage2 = ':nth-child(1) > .text-lg';
const nextButtonPage2 = ':nth-child(2) > .text-lg';
const subtitlePage3 = 'max-w-screen-md > :nth-child(2)';
const descriptionPage3 = 'max-w-screen-md > :nth-child(2)';
const subDescriptionPage3 = 'max-w-screen-md > :nth-child(2)';

//Data

const url = 'https://very-important.vercel.app/';
const githubUrl = 'https://github.com/shuding/nextra'

    export class homePage{
    static loadPage(){    
        cy.visit(url)
    }

    static verifyElementsHome1(){  
        cy.beVisible(headerComponent)
        cy.beVisible(homeTitle)
        cy.beVisible(homeSubtitle)
        cy.beVisible(homeSearcher)
        cy.doType(homeSearcher, 'Page');
        cy.beVisible(homeBackgroundCheck)
        cy.doClick(homeBackgroundCheck);
        cy.beVisible(homeGithubIcon);
        cy.beVisible(bodyTitle);
        cy.beVisible(bodySubtitle);
        cy.beVisible(bodyDescription);
        cy.beVisible(bodyChangeLabel);
        cy.beVisible(bodyEditText);
        cy.beVisible(bodyCopyright);
    }

    static changePageLabel(){    
        cy.beVisible(bodyChangeLabel);
        cy.beVisible(bodyTitle);
        cy.beVisible(bodySubtitle);
        cy.doClick(bodyChangeLabel);
        cy.beVisible(bodyTitle);
        cy.beVisible(subtitlePage2);
        cy.beVisible(descriptionPage2);
        cy.beVisible(subtitleDescriptionPage2);
        cy.beVisible(backButtonPage2);
        cy.doClick(backButtonPage2);
        cy.doClick(bodyChangeLabel);
        cy.beVisible(nextButtonPage2);
        cy.doClick(nextButtonPage2);
    }
}
