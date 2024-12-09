import { submitFormLocators, submitFormTexts, whereDidYouHearOptions } from "../pages/submitForm"

const randomText = crypto.randomUUID()

const randomData = {
    email: `email${randomText}@test.com`,
    firstName: `firstName${randomText}`,
    lastName: `lastName${randomText}`,
    explanation: `explanation${randomText}`,
}

describe('Submit Form Tests', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('WORK_SAMPLE_URL'))
    })

    it('Validate submit form is displayed correctly', () => {
        const submitFormData = [
            { label: submitFormLocators.emailLabel, text: submitFormTexts.emailLabel, inputField: submitFormLocators.email },
            { label: submitFormLocators.lastNameLabel, text: submitFormTexts.lastNameLabel, inputField: submitFormLocators.lastName },
            { label: submitFormLocators.firstNameLabel, text: submitFormTexts.firstNameLabel, inputField: submitFormLocators.firstName },
            { label: submitFormLocators.whereDidYouHearLabel, text: submitFormTexts.whereDidYouHearLabel, inputField: submitFormLocators.whereDidYouHear },
            { label: submitFormLocators.serVicesOfInterestLabel, text: submitFormTexts.serVicesOfInterestLabel, inputField: submitFormLocators.checkBoxOption },
            { label: submitFormLocators.typeOfAssociationLabel, text: submitFormTexts.typeOfAssociationLabel, inputField: submitFormLocators.radioOptions },
            { label: submitFormLocators.explanationLabel, text: submitFormTexts.explanationLabel, inputField: submitFormLocators.explanation },
        ]
        submitFormData.forEach((data) => {
            cy.get(data.label).should('be.visible').and('have.text', data.text)
            cy.get(data.inputField).should('be.visible')
        })
    })

    it.only('Submit form with valid data', () => {
        cy.get(submitFormLocators.email).type(randomData.email)
        cy.get(submitFormLocators.lastName).type(randomData.lastName)
        cy.get(submitFormLocators.firstName).type(randomData.firstName)
        cy.get(submitFormLocators.whereDidYouHear).click()
        cy.contains(whereDidYouHearOptions.searchEngine).click()
        cy.get(submitFormLocators.checkBoxItem).eq(0).click()
        cy.get(submitFormLocators.radioItem).eq(0).click()
        cy.get(submitFormLocators.explanation).type(randomData.explanation)
        cy.contains('button', submitFormTexts.submit).click()
        cy.get(submitFormLocators.successMessage).should('be.visible').and('have.text', submitFormTexts.successMessage)
    })
})