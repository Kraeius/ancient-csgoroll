describe('Dice / Roll Switch', () => {
  it('Checks the functionality of the roll switch button', () => {
    cy.viewport(1366, 768)
    cy.visit('https://www.csgorolltr.com/en/dice')

    cy.get('[data-test="threshold"]').should('have.value', 47.5) // Default Value
    cy.get('[data-test="choice-switch"]').click()
    cy.get('[data-test="threshold"]').should('have.value', 52.49) // Updated Value
    cy.get('[data-test="choice-switch"]').click() // Return to Default Value
    cy.get('[data-test="threshold"]').should('have.value', 47.5) // Default Value Recheck

  })
})