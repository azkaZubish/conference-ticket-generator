let dropBox = document.querySelector('.avatar-accept-box');
let fileInput = document.querySelector('.avatar-input');
let preview = document.querySelector('.upload-image');
let uploadInstruction = document.querySelector('.avatar-upload-instruction');
let avatarRemove = document.querySelector('.avatar-remove');
let resetImage = document.querySelector('.remove-img');
let changeImage = document.querySelector('.change-img');
let formButton = document.querySelector('.form-submit-button');
let form = document.querySelector('.form');
let errorMessage = document.querySelector('.img-info');
let avatar = document.querySelector('.avatar-input');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let gitname = document.querySelector('#gitname');

dropBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropBox.style.background = 'rgba(135, 132, 164, .17)';
});
dropBox.addEventListener('dragleave', () => {
    dropBox.style.background = '';
});
dropBox.addEventListener('drop', (e) => {
    e.preventDefault();
    dropBox.style.background = 'none';
    
    let file = e.dataTransfer.files[0];
    handleFile(file);
});

// dropBox.addEventListener('change', () => {
//     handleFile(fileInput.files[0]);
// });

fileInput.addEventListener('change', () => {
    handleFile(fileInput.files[0]);
});

resetImage.addEventListener('click', (e) => {
    e.preventDefault();
    preview.src = './assets/images/icon-upload.svg';
    preview.classList.add('upload-image');
    preview.style = '';
    uploadInstruction.style.display = 'block';
    resetImage.style.display = 'none';
    changeImage.style.display = 'none';
    fileInput.value = '';
});

changeImage.addEventListener('click', (e) => {
    e.preventDefault();
    fileInput.click();
});

function handleFile(file) {
    if (!file) return;
    if (file.type === 'image/png' || file.type === 'image/jpeg') {
        
        if (file.size <= 512000) {
            let reader = new FileReader();
            reader.onload = function (e) {
                preview.src = e.target.result;
                preview.style.width = '25px';
                preview.style.height = '25px';
                preview.style.objectFit = 'cover';
                preview.style.padding = '0px';
                uploadInstruction.style.display = 'none';
                resetImage.style.display = 'inline-block';
                changeImage.style.display = 'inline-block';
            }
            reader.readAsDataURL(file);
            clearErrors();
        } else {
            DisplayError(form.elements.avatar,'File size must be less than 500KB');
        }
    } else {
        DisplayError(form.elements.avatar, "Only PNG and JPG file are accepted");
    }
}

function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function DisplayError(InputElement, message) {
    InputElement.style.border = '1px solid hsl(245, 15%, 58%)';

    let errorContainer;

    if (InputElement.type === 'file') {
         errorContainer = document.querySelector('#avatar-error');
    } else {
        let parentDiv = InputElement.closest('div');
        errorContainer = parentDiv ? parentDiv.querySelector('.img-info') : null;
    }
    if (errorContainer) {
        const spanElement = errorContainer.querySelector('span');
        if (spanElement) spanElement.textContent = message;
        
        errorContainer.hidden = false;
        errorContainer.style.color = 'red';
    }
}

function clearErrors() {
    document.querySelectorAll('.img-info').forEach(div => {
        div.hidden = true;
        const span = div.querySelector('span');
        if (span) span.textContent = '';
    });
    document.querySelectorAll('.form-input, .avatar-input').forEach(input => {
        input.style.border = '0.05px solid hsl(252, 6%, 83%)';
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();
     let isValid = true;
    Array.from(form.elements).forEach(element => {
        if (element.tagName !== 'INPUT') return;

        if (element.type === 'file') {
            if (element.files.length === 0) {
                isValid = false;
                DisplayError(element, 'Please upload a file');
            }
            return;
        }

        if (element.type === 'email') {
            if (element.value.trim() === '') {
                isValid = false;
                DisplayError(element, 'Please enter a required field');
            } else if (!isValidEmail(element.value)) {
                isValid = false;
                DisplayError(element, 'Please enter a valid Email address');
            }
            return;
        }

        if (element.value.trim() === '') {
            isValid = false;
            DisplayError(element, 'Please enter a required field');
        }
    });
    if (isValid) {
        clearErrors();
        const formData = {
            name: form.elements.name.value,
            gmail: form.elements.gmail.value,
            gitname: form.elements.gitname.value,
            avatar : 
        };
        form.submit();
    }
});