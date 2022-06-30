Cypress.Commands.add('visibleElement', (container, element, path1, path2) => {
    cy.get(container).then((container) => {
        if (container.find(element).is(":visible")) {
            path1();
        }else{
            path2();
        }
    })
})

Cypress.Commands.add('iframeVisible', (iframeLocator, elementLocator) => {
    cy.wrap(iframeLocator)
        .its('0.contentDocument.body')
        .find(elementLocator)
        .should('be.visible');
})

Cypress.Commands.add('iframeContain', (iframeLocator, elementLocator, string) => {
    cy.wrap(iframeLocator)
        .its('0.contentDocument.body')
        .find(elementLocator)
        .and('contain', string);
})

Cypress.Commands.add('iframeClick', (iframeLocator, elementLocator) => {
    cy.wrap(iframeLocator)
        .its('0.contentDocument.body')
        .find(elementLocator)
        .click({force:true, multiple:true});
})

Cypress.Commands.add('iframeClickContain', (iframeLocator, elementLocator, string) => {
    cy.wrap(iframeLocator)
        .its('0.contentDocument.body')
        .find(elementLocator)
        .and('contain', string)
        .click({force:true, multiple:true});
    cy.wait(750);
})

Cypress.Commands.add('iframeType', (iframeLocator, elementLocator, string) => {
    cy.wrap(iframeLocator)
        .its('0.contentDocument.body')
        .find(elementLocator)
        .type(string, {force:true});
})

Cypress.Commands.add('doSelect', (locator, value) => {
    cy.get(locator)
        .select(value, {force: true});
})

Cypress.Commands.add('doClear', (locator) => {
    cy.get(locator).clear({force:true});
})

Cypress.Commands.add('doType', (locator, string, error) => {
    cy.get(locator).clear({force:true}).type(string, {force:true});
    /* const command = 'cy.get(locator).clear({force:true}).type("' + string + '", {force:true})';
    error = error + '" no es escribible.';
    basePage.manejoErrores(locator, command, error); */
})

Cypress.Commands.add('itContain', (locator, string) => {
    cy.get(locator) 
        .should('contain', string);
})

Cypress.Commands.add('doClick', (locator) => {
    cy.get(locator).click({force:true});
    /* const command = '';
    error = error + '" no se pudo clickear.';
    basePage.waitProduccion();
    basePage.manejoErrores(locator, command, error, force); */
})

Cypress.Commands.add('doMultipleClick', (locator) => {
    cy.get(locator)
        .click({multiple:true, force:true});
})

Cypress.Commands.add('beVisible', (locator, error) => {
    cy.get(locator).should('be.visible');
    /* const command = 'cy.get(locator).should(\'be.visible\')';
    error = error + '" no se encuentra visible.';
    basePage.manejoErrores(locator, command, error, true) */
})

Cypress.Commands.add('retryVisible', (locator, error, i) => {
    let foundElement = false;
    if(i == undefined){i = 0;}

    cy.get(container).then((container) => {
        foundElement = container.find(locator).is(":visible");
        if(!foundElement && i < 3) {
            cy.wait(1500)
            i = i + 1;
            cy.retryVisible(locator, error, i);
        }
    })
    cy.beVisible(locator, error, i);
})

Cypress.Commands.add('notVisible', (locator) => {
    cy.get(locator).should('not.be.visible')
})

Cypress.Commands.add('itExist', (locator) => {
    cy.get(locator).should('exist')
})

Cypress.Commands.add('notExist', (locator) => {
    cy.get(locator).should('not.exist')
})

Cypress.Commands.add('containHref', (locator, label, href) => {
    cy.get(locator).should('contain', label).and('have.attr', 'href').and('include', href);
})

Cypress.Commands.add('hrefIs', (locator, href) => {
    cy.get(locator).should('be.visible').and('have.attr', 'href').and('include', href);
})

Cypress.Commands.add('findSon', (locator1, locator2) => {
    cy.wrap(locator1)
        .find(locator2)
            .should('be.visible');
})
Cypress.Commands.add('typeSon', (locator1, locator2, string) => {
    cy.wrap(locator1)
        .find(locator2)
            .type(string, {force:true});
})
Cypress.Commands.add('clickSon', (locator1, locator2) => {
    cy.wrap(locator1)
        .find(locator2)
            .click({force:true});
}) 
Cypress.Commands.add('containSon', (locator1, locator2, string) => {
    cy.wrap(locator1)
        .find(locator2)
            .should('contain', string);
})
Cypress.Commands.add('containHrefSon', (locator1, locator2, label, href) => {
    cy.wrap(locator1)
        .find(locator2)
            .should('be.visible').and('contain', label).and('have.attr', 'href').and('include', href);
})

Cypress.Commands.add("closeDrawer", () => {
    const drawerCloseButton = ".menu_close > svg > #Rounded > path";
    cy.doClick(drawerCloseButton);
})