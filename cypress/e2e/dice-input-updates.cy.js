describe('Dice / Input Updates', () => {
  it('Checks the relation between inputs', () => {
    cy.viewport(1366, 768)
    cy.visit('https://www.csgorolltr.com/en/dice')

    // Slider
    /* Needs working on the slider. Traditional slider approach on Cypress didn't work, it may require Mouse gestures or deep xpath
    cy.get('[formcontrolname="underOver"]').as('range').invoke('val', 65).trigger('change') // Updated the Slider value
    cy.get('[data-test="threshold"]').should('have.value', 65) // Assertion
    */

    // Inputs
    //Note: Best practice is to use random values and the formula to calculate and check the values of related inputs. Due to time constraints, I just added some hard-coded values
    cy.get('[data-test="threshold"]').clear().type(78) // Entered Roll Value
    cy.get('[data-test="multiplier"]').should('have.value', 1.22) // Calculated Multiplier
    cy.get('[data-test="chance"]').should('have.value', 78) // Calculated Win Chance

    // Other relations between inputs
    cy.get('[data-test="multiplier"]').clear().type(1.22)
    cy.get('[data-test="threshold"]').should('have.value', 78)
    cy.get('[data-test="chance"]').should('have.value', 78) 

    cy.get('[data-test="chance"]').clear().type(78)
    cy.get('[data-test="threshold"]').should('have.value', 78)
    cy.get('[data-test="multiplier"]').should('have.value', 1.22)
  })
})