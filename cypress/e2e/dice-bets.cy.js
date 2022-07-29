describe('Dice / Bets', () => {
  it('Checks the functionality of the bet buttons', () => {
    cy.viewport(1366, 768)
    cy.visit('https://www.csgorolltr.com/en/dice')

    //Checks the bet changes by getting the potential profit on win (What is expected is to get the input value but I did it like that to handle the two tasks at the same time due to time constraints)
    cy.get('[data-test="plus-1"]').click()
    cy.get('[data-test="profit-on-win"]').should('have.text', '2.00') // +1

    cy.get('[data-test="plus-10"]').click()
    cy.get('[data-test="profit-on-win"]').should('have.text', '12.00') // +10

    cy.get('[data-test="1-div-2"]').click()
    cy.get('[data-test="profit-on-win"]').should('have.text', '6.00') // Half

    cy.get('[data-test="x2"]').click()
    cy.get('[data-test="profit-on-win"]').should('have.text', '12.00') // Double

    cy.get('[data-test="clear"]').click()
    cy.get('[data-test="profit-on-win"]').should('have.text', '0.00') // Clear
  })
})