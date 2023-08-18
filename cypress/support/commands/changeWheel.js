Cypress.Commands.add('changeWheel', (wheelEl, modificator) => {
  let clickSection
  if (modificator < 0) {
    clickSection = '.picker-bottom'
    modificator *= -1
  } else {
    clickSection = '.picker-top'
  }

  cy.get(wheelEl)
    .find(clickSection)
    .within(section => {
      for (let i = 0; i < modificator; i++) {
        cy.wrap(section, { log: false })
          .click({ force: true, log: false })
      }
    })
})
