const formFeedback = document.querySelector('.feedback-form');
const emailInput = formFeedback.querySelector('input[name="email"]');
const messageTextarea = formFeedback.querySelector('textarea[name="message"]');
let formData = { email: "", message: "" }

function saveFormData(formData) { 
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
function loadFormData() { 
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) { 
        const parseData = JSON.parse(savedData);
        formData.email = parseData.email || "";
        formData.message = parseData.message || "";
        emailInput.value = formData.email; 
        messageTextarea.value = formData.message
    }
}
loadFormData();

function updateFormData() { 
    formData.email = emailInput.value
    formData.message = messageTextarea.value
    saveFormData(formData)
}

formFeedback.addEventListener("input", function (evt) { 
     if (evt.target === emailInput || evt.target === messageTextarea) {
       updateFormData();
     }
})
formFeedback.addEventListener("submit", function (evt) { 
    evt.preventDefault();
    if (formData.email === '' || formData.message === "") { 
        alert('Fill please all fields');
        return
    }
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData = { email: '', message: '' };
    emailInput.value = "";
    messageTextarea.value = ""
})