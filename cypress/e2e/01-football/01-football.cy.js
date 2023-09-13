describe('Football', () => {
  before(() => {
    cy.visit('http://localhost:4200/')
    cy.get('[data-testid="game-list"] .demo')
      .click()
  })

  it('Test game play', () => {
    gamePlay1KickOff();
    gamePlay2RunRush();
    gamePlay3CompletePass();
    gamePlay4IncompletePass();
    gamePlay5RunRush();
  })

  // FIXME conserver la route
  it.skip('222', () => {
    // gamePlay1KickOff();
    gamePlay2RunRush();
    gamePlay3CompletePass();
    gamePlay4IncompletePass();
    gamePlay5RunRush();
  })

  function gamePlay1KickOff() {
    cy.get('[data-testid="homeKickoff"]')
      .click()

    cy.get('app-select-kicker [data-testid="player-7"]')
      .click()

    cy.get('app-select-returner [data-testid="player-13"]')
      .click()

    cy.setWheelValue('[data-testid="caughtOn"]', 22)
    cy.setWheelValue('[data-testid="returnedTo"]', 39)

    cy.get('app-select-hash [data-testid="hashR"]')
      .click()

    cy.get('[data-testid="finishTagging"]')
      .click()

    validateDump(0, {
      odk: "K",
      down: 0,
      distance: 0,
      hash: "R",
      gnLs: 0,
      yardLine: "-45",
      qtr: 1,
      kickYards: 0,
      playType: "KO",
      result: "Good",
      kicker: 7,
      oppReturner: 13
    })
  }

  function gamePlay2RunRush() {
    cy.get('[data-testid="run"]')
      .click()

    cy.get('app-select-rusher [data-testid="player-8"]')
      .click()

    // cy.setWheelValue('app-select-gain app-wheel-selector', 6)
    // FIXME n'ajuste pas automatiquement le spot

    cy.get('app-select-hash [data-testid="hashR"]')
      .click()

    cy.get('[data-testid="finishTagging"]')
      .click()

    validateDump(1, {
      odk: "O",
      gnLs: 0,
      down: 1,
      hash: "R",
      yardLine: "-45",
      qtr: 1,
      distance: 10,
      playType: "Run",
      rusher: 8,
      result: "Rush"
    })
  }

  function gamePlay3CompletePass() {
    cy.get('[data-testid="completePass"]')
      .click()

    cy.get('app-select-passer [data-testid="player-3"]')
      .click()

    cy.get('app-select-receiver [data-testid="player-21"]')
      .click()

    // cy.setWheelValue('app-select-gain app-wheel-selector', 12)

    cy.get('app-select-hash [data-testid="hashL"]')
      .click()

    cy.get('[data-testid="finishTagging"]')
      .click()

    validateDump(2, {
      odk: "O",
      gnLs: 0,
      down: 2,
      hash: "L",
      yardLine: "-45",
      qtr: 1,
      distance: 10,
      playType: "Pass",
      result: "Complete",
      passer: 3,
      receiver: 21
    })
  }

  function gamePlay4IncompletePass() {
    cy.get('[data-testid="incompletePass"]')
      .click()

    cy.get('app-select-passer [data-testid="player-3"]')
      .click()

    cy.get('app-select-batted-down [data-testid="player-37"]')
      .click()

    cy.get('app-select-hash [data-testid="hashM"]')
      .click()

    cy.get('[data-testid="finishTagging"]')
      .click()

    validateDump(3, {
      odk: "O",
      gnLs: 0,
      down: 3,
      hash: "M",
      yardLine: "-45",
      qtr: 1,
      distance: 10,
      playType: "Pass",
      result: "Incomplete",
      passer: 3,
      oppBattedDown: 37
    })
  }

  function gamePlay5RunRush() {
    cy.get('[data-testid="run"]')
      .click()

    cy.get('app-select-rusher [data-testid="player-8"]')
      .click()

    // cy.setWheelValue('app-select-gain app-wheel-selector', 2)

    cy.get('app-select-hash [data-testid="hashM"]')
      .click()

    cy.get('[data-testid="finishTagging"]')
      .click()

    validateDump(4, {
      odk: "O",
      // gnLs: 2, // FIXME!!!
      // down: 5, // FIXME!!!
      hash: "M",
      yardLine: "-45",
      qtr: 1,
      distance: 10,
      playType: "Run",
      rusher: 8,
      result: "Rush"
    })
  }


  function validateDump(indexGamePlay, expectedData) {
    cy.get('[data-testid="dump"]')
      .click()

    cy.getAllLocalStorage()
      .then(allLocalStorage => {
        const dump = JSON.parse(allLocalStorage['http://localhost:4200'].dump)
        expectGamePlay(
          dump[indexGamePlay],
          expectedData
        )
      })
  }

  function expectGamePlay(gamePlayData, expectData) {
    for (const key in expectData) {
      if (gamePlayData[key] !== expectData[key]) {
        // FIXME ne s'affiche pas
        cy.log('Erreur dans ' + key)
        // Cypress.log('Erreur dans ' + key)
      }

      // FIXME ajouter un message?
      expect(gamePlayData[key]).equal(expectData[key])
    }
  }
})
