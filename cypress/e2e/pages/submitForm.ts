export const submitFormLocators = {
    emailField: '#field_email',
    emailLabel: '[for="form_item_email"]',
    emailInput: '#form_item_email',
    lastNameField: '#field_lastName',
    lastNameLabel: '[for="form_item_lastName"]',
    lastNameInput: '#form_item_lastName',
    firstNameField: '#field_firstName',
    firstNameLabel: '[for="form_item_firstName"]',
    firstNameInput: '#form_item_firstName',
    infoSourceField: '#field_infoSource',
    infoSourceLabel: '[for="form_item_infoSource"]',
    infoSourceInput: '.ant-select-selection-item',
    selectItem: '[class="ant-select-item-option-content"]',
    servicesOfInterestField: '#field_servicesOfInterest',
    servicesOfInterestLabel: '[for="form_item_servicesOfInterest"]',
    checkBoxOption: '#form_item_servicesOfInterest',
    checkBoxItem: 'input[class="ant-checkbox-input"]',
    typeOfAssociationField: '#field_typeOfAssociation',
    typeOfAssociationLabel: '[for="form_item_typeOfAssociation"]',
    radioOptions: '#form_item_typeOfAssociation',
    radioItem: 'input[class="ant-radio-input"]',
    explanationField: '#field_explanation',
    explanationLabel: '[for="form_item_explanation"]',
    explanation: '#form_item_explanation',
    successMessage: '[class="ant-alert-message"]',
    inlineError: '[class="ant-form-item-explain-error"]'
}

export const submitFormTexts = {
    emailLabel: 'Email',
    lastNameLabel: 'Last Name',
    firstNameLabel: 'First Name',
    whereDidYouHearLabel: 'Where did you hear about us?',
    serVicesOfInterestLabel: 'Services of Interest',
    printing: 'Printing',
    logistics: 'Logistics',
    advertisement: 'Advertisement',
    typeOfAssociationLabel: 'Type of Association',
    prospect: 'Prospect',
    partner: 'Partner',
    reseller: 'Reseller',
    vendor: 'Vendor',
    other: 'Other',
    explanationLabel: 'Explanation',
    submit: 'Submit',
    successMessage: 'Your inquiry has been submitted successfully!',
}

export const whereDidYouHearOptions = {
    searchEngine: 'Search engines',
    recommendation: 'Recommended by friend',
    socialMedia: 'Social media',
    emailMarketing: 'Email marketing',
    others: 'Other',
}

export const errorMessageTexts = {
    inlineRequiredError: (fieldName: string) => `'${fieldName}' is required`,
    emailFormatError: `'email' is not a valid email`,
}