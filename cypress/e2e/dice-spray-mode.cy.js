describe('Dice / Spray Mode', () => {
  it('Checks the Spray Mode functionality', () => {
    cy.viewport(1366, 768)
    cy.visit('https://www.csgorolltr.com/en/dice')

    cy.get('[data-test="mode-batch"]').click() // Enable the Spray Mode
    cy.get('[data-test="rolls-per-click"]').should('be.visible').should('have.value', 2) // Check that If it's visible and have the default value
    cy.get('[data-test="rolls-per-click"]').clear().type(3) // Change the Value
    cy.contains('ROLL 3 TIMES').should('be.visible') // Check the presence of the Roll button with the updated text (Other ways are possible)
  })
})