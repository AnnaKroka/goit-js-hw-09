const feedbackFormEl = document.querySelector(".feedback-form");
const feedbackEmail = document.querySelector(".feedback-input");
const feedbackTextarea = document.querySelector(".feedback-textarea");

let formData = {
    email: '',
    message: '',
};


const fillFormFields = () => {
    const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

    formData = formDataFromLS;

console.dir(feedbackFormEl.elements);

for (const key in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(key)) {
        feedbackFormEl.elements[key].value = formDataFromLS[key];
    }
}

};



const onFormFieldInput = event => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    formData[fieldName] = fieldValue;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};  


const onFeedbackFormSubmit = event => {
    event.preventDefault();

    if (formData.email.trim() === '' || formData.message.trim() === '') {
        alert ("Fill please all fields");
        return;
    } else {
        console.log(formData);
    }

    event.target.reset();
    localStorage.removeItem('feedback-form-state');

};

feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);

