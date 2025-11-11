describe("Home Page Simple Test", () => {
  beforeEach(() => {
    // Visit the page
    cy.visit("/", {
      onBeforeLoad(win) {
        // Stub window.alert and give it an alias
        cy.stub(win, "alert").as("alertStub");

        // FORCE THE "UNSUPPORTED" BRANCH:
        // By deleting the Notification API before the app loads,
        // we guarantee the app's logic will call our alert stub.
        delete win.Notification;
      },
    });

    // injectAxe can run after the page is loaded
    cy.injectAxe();
  });

  it("clicks notification and checks accessibility", () => {
    // Wait for the button to be ready
    cy.get('[data-testid="notify-button"]').should("be.enabled");

    // Click the button
    cy.get('[data-testid="notify-button"]').click();

    // Check the stub (the alias) to see if it was called correctly
    cy.get("@alertStub").should(
      "have.been.calledOnceWith",
      "This browser does not support desktop notification",
    );

    // Run the accessibility check
    cy.checkA11y(null, {
      rules: {
        "frame-tested": { enabled: false },
      },
    });
  });
});
