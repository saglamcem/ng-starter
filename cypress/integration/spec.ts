it('loads examples', () => {
  cy.visit('/');
  cy.contains('app is running');
  cy.contains('Next Steps');

  cy.get('h2').should(($h2) => {
    const text = $h2.text()

    expect(text.toLowerCase()).to.match(/steps/);
    expect(text.toLowerCase()).to.include('next steps');
    expect(text).not.to.include('random sequence');
  })
});
