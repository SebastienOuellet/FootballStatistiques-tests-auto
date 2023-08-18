Cypress.Commands.add('setWheelValue', (wheelEl, value) => {
  cy.get(wheelEl)
    .find('.picker-handle-layer .picker-middle')
    .dblclick()

  cy.get('app-wheel-selector-set-value-dialog input')
    .type(value)

  cy.get('app-wheel-selector-set-value-dialog [data-testid="ok"]')
    .click()
})
