const rsvpButton = document.getElementsByClassName('call-to-action')[0];
const mobrspv = document.getElementsByClassName('call-to-action')[1];
const closeButton = document.getElementById('close');
const formContainer = document.querySelector('.step-container');

rsvpButton.addEventListener('click', () => {
    formContainer.style.display = 'block';
});

mobrspv.addEventListener('click', () => {
    formContainer.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    formContainer.style.display = 'none';
});


let currentStep = 1;

function showStep(stepNumber) {
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => step.classList.remove('active'));
    document.getElementById(`step${stepNumber}`).classList.add('active');
}

function nextStep() {
    if (currentStep < 6) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

function submitForm() {

    alert('Form submitted successfully!');
    formContainer.style.display = 'none';

}

showStep(currentStep);

function closeForm() {
    formContainer.style.display = 'none';
}