import { errorMessageTexts, submitFormLocators, submitFormTexts, whereDidYouHearOptions } from "../../pages/submitForm"

const randomText = crypto.randomUUID().substring(0, 5)

const randomData = {
    email: `email${randomText}@test.com`,
    firstName: `firstName ${randomText}`,
    lastName: `lastName ${randomText}`,
    explanation: `explanation ${randomText}`,
}
// Console
function inputFormFields(infoSource: string, servicesOfInterest: string, typeOfAssociation: string, isExplanation = true) {
    cy.get(submitFormLocators.emailInput).type(randomData.email)
    cy.get(submitFormLocators.lastNameInput).type(randomData.lastName)
    cy.get(submitFormLocators.firstNameInput).type(randomData.firstName)
    cy.get(submitFormLocators.infoSourceInput).click()
    cy.get(submitFormLocators.infoSourceField).get(submitFormLocators.selectItem).contains(infoSource).click()
    // Select Services of Interest
    cy.get(submitFormLocators.servicesOfInterestField).contains(servicesOfInterest).click()
    // Select Type of Association
    cy.get(submitFormLocators.typeOfAssociationField).contains(typeOfAssociation).click()
    if (isExplanation) {
        cy.get(submitFormLocators.explanation).type(randomData.explanation)
    }
}

function defaultFields() {
    cy.get(submitFormLocators.emailInput).should('be.empty')
    cy.get(submitFormLocators.lastNameInput).should('be.empty')
    cy.get(submitFormLocators.firstNameInput).should('be.empty')
    cy.get(submitFormLocators.infoSourceInput).should('be.empty')
    cy.get(submitFormLocators.checkBoxItem).should('not.be.checked')
    cy.get(submitFormLocators.radioItem).should('not.be.checked')
    cy.get(submitFormLocators.explanation).should('be.empty')
}

describe('Submit Form Tests', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('WORK_SAMPLE_URL'))
    })

    it('Validate submit form is displayed correctly', () => {
        const submitFormData = [
            { label: submitFormLocators.emailLabel, text: submitFormTexts.emailLabel, inputField: submitFormLocators.emailInput },
            { label: submitFormLocators.lastNameLabel, text: submitFormTexts.lastNameLabel, inputField: submitFormLocators.lastNameInput },
            { label: submitFormLocators.firstNameLabel, text: submitFormTexts.firstNameLabel, inputField: submitFormLocators.firstNameInput },
            { label: submitFormLocators.infoSourceLabel, text: submitFormTexts.whereDidYouHearLabel, inputField: submitFormLocators.infoSourceInput },
            { label: submitFormLocators.servicesOfInterestLabel, text: submitFormTexts.serVicesOfInterestLabel, inputField: submitFormLocators.checkBoxOption },
            { label: submitFormLocators.typeOfAssociationLabel, text: submitFormTexts.typeOfAssociationLabel, inputField: submitFormLocators.radioOptions },
            { label: submitFormLocators.explanationLabel, text: submitFormTexts.explanationLabel, inputField: submitFormLocators.explanation },
        ]
        submitFormData.forEach((data) => {
            cy.get(data.label).should('be.visible').and('have.text', data.text)
            cy.get(data.inputField).should('be.visible')
        })
        cy.contains('button', submitFormTexts.submit).should('be.enabled')
    })

    it('Submit form with valid data', () => {
        cy.get(submitFormLocators.emailInput).type(randomData.email)
        cy.get(submitFormLocators.lastNameInput).type(randomData.lastName)
        cy.get(submitFormLocators.firstNameInput).type(randomData.firstName)
        cy.get(submitFormLocators.infoSourceInput).click()
        cy.contains(whereDidYouHearOptions.searchEngine).click()
        cy.get(submitFormLocators.checkBoxItem).eq(0).click()
        cy.get(submitFormLocators.radioItem).eq(0).click()
        cy.get(submitFormLocators.explanation).type(randomData.explanation)
        cy.contains('button', submitFormTexts.submit).click()
        cy.get(submitFormLocators.successMessage).should('be.visible').and('have.text', submitFormTexts.successMessage)
    })

    it('Submit form with all fields are empty', () => {
        cy.contains('button', submitFormTexts.submit).click()
        const submitFormData = [
            { field: submitFormLocators.emailField, text: 'email' },
            { field: submitFormLocators.lastNameField, text: 'lastName' },
            { field: submitFormLocators.firstNameField, text: 'firstName' },
            { field: submitFormLocators.infoSourceField, text: 'infoSource' },
            { field: submitFormLocators.servicesOfInterestField, text: 'servicesOfInterest' },
            { field: submitFormLocators.typeOfAssociationField, text: 'typeOfAssociation' },
        ]
        submitFormData.forEach((data) => {
            cy.get(data.field).get(submitFormLocators.inlineError).contains(errorMessageTexts.inlineRequiredError(data.text))
        })
    })

    it('Submit form with invalid email format', () => {
        cy.get(submitFormLocators.emailInput).type('invalidEmail')
        cy.contains('button', submitFormTexts.submit).click()
        cy.get(submitFormLocators.emailField).get(submitFormLocators.inlineError).contains(errorMessageTexts.emailFormatError)
    })

    it('Validate there are 3 Services of Interest Options', () => {
        cy.get(submitFormLocators.servicesOfInterestField).get(submitFormLocators.checkBoxItem).should('have.length', 3)
        const servicesOfInterest = [
            {index: 0, text: submitFormTexts.printing},
            {index: 1, text: submitFormTexts.logistics},
            {index: 2, text: submitFormTexts.advertisement},
        ]
        servicesOfInterest.forEach(({index, text}) => {
            cy.get(submitFormLocators.servicesOfInterestField).get(submitFormLocators.checkBoxOption).find('label').eq(index).should('have.text', text)
        })
    })

    it('Validate there are 5 Type of Association Options', () => {
        cy.get(submitFormLocators.typeOfAssociationField).get(submitFormLocators.radioItem).should('have.length', 5)
        const typeOfAssociation = [
            {index: 0, text: submitFormTexts.prospect},
            {index: 1, text: submitFormTexts.partner},
            {index: 2, text: submitFormTexts.reseller},
            {index: 3, text: submitFormTexts.vendor},
            {index: 4, text: submitFormTexts.other},
        ]
        typeOfAssociation.forEach(({index, text}) => {
            cy.get(submitFormLocators.servicesOfInterestField).get(submitFormLocators.radioOptions).find('label').eq(index).should('have.text', text)
        })
    })

    it('Validate there are 5 info source Options', () => {
        cy.get(submitFormLocators.infoSourceInput).click()
        const infoSourceList = [
            {index: 0, text: whereDidYouHearOptions.searchEngine},
            {index: 1, text: whereDidYouHearOptions.recommendation},
            {index: 2, text: whereDidYouHearOptions.socialMedia},
            {index: 3, text: whereDidYouHearOptions.emailMarketing},
            {index: 4, text: whereDidYouHearOptions.others},
        ]
        infoSourceList.forEach(({index, text}) => {
            cy.get(submitFormLocators.infoSourceField).get(submitFormLocators.selectItem).eq(index).should('have.text', text)
        })
    })

    it('Can submit the form with only required fields filled (email, first name, last name, infoSource, Services of Interest, type of association)', () => {
        inputFormFields(whereDidYouHearOptions.searchEngine, submitFormTexts.printing, submitFormTexts.prospect, false)
        cy.contains('button', submitFormTexts.submit).click()
        cy.get(submitFormLocators.successMessage).should('be.visible').and('have.text', submitFormTexts.successMessage)
    })

    it('Can submit form with "Other" selected for "Type of Association"', () => {
        inputFormFields(whereDidYouHearOptions.searchEngine, submitFormTexts.printing, submitFormTexts.other, true)
        cy.contains('button', submitFormTexts.submit).click()
        cy.get(submitFormLocators.successMessage).should('be.visible').and('have.text', submitFormTexts.successMessage)
    })

    it('Form correctly resets after reload successful submission screen', () => {
        inputFormFields(whereDidYouHearOptions.searchEngine, submitFormTexts.printing, submitFormTexts.other, true)
        cy.contains('button', submitFormTexts.submit).click()
        cy.get(submitFormLocators.successMessage).should('be.visible').and('have.text', submitFormTexts.successMessage)
        cy.reload()
        defaultFields()
    })

    it('Form correctly handles long text input for "Explanation"', () => {
        const longText = 'a'.repeat(1000)
        inputFormFields(whereDidYouHearOptions.searchEngine, submitFormTexts.printing, submitFormTexts.other, true)
        cy.get(submitFormLocators.explanation).clear().type(longText)
        cy.contains('button', submitFormTexts.submit).click()
        cy.get(submitFormLocators.successMessage).should('be.visible').and('have.text', submitFormTexts.successMessage)
    })

    it('Form can handle special characters in the "Explanation" field', () => {
        const specialCharacters = '!@#$%^&*()_+'
        inputFormFields(whereDidYouHearOptions.searchEngine, submitFormTexts.printing, submitFormTexts.other, true)
        cy.get(submitFormLocators.explanation).type(specialCharacters)
        cy.contains('button', submitFormTexts.submit).click()
        cy.get(submitFormLocators.successMessage).should('be.visible').and('have.text', submitFormTexts.successMessage)
    })

    it('Form layout is responsive on mobile devices	', () => {
        cy.viewport('iphone-6')
        inputFormFields(whereDidYouHearOptions.searchEngine, submitFormTexts.printing, submitFormTexts.other, true)
        cy.contains('button', submitFormTexts.submit).click()
        cy.get(submitFormLocators.successMessage).should('be.visible').and('have.text', submitFormTexts.successMessage)
    })

    it('Form prevents multiple submissions', () => {
        inputFormFields(whereDidYouHearOptions.searchEngine, submitFormTexts.printing, submitFormTexts.other, true)
        cy.contains('button', submitFormTexts.submit).dblclick()
        cy.get(submitFormLocators.successMessage).should('be.visible').and('have.text', submitFormTexts.successMessage)
    })
})