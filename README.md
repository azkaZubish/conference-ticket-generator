# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview
This project is a conference ticket generator that collects user information through a form. The form includes fields for the user's avatar (photo), name, email, and GitHub username. After validating the input, the data is stored in the browser's local storage. The application then renders a separate HTML page that retrieves this data and displays a personalized conference ticket.

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: https://github.com/azkaZubish/conference-ticket-generator
- Live Site URL: https://azkazubish.github.io/conference-ticket-generator/

## My process

- Structured the layout using HTML, ensuring semantic tags were used for better accessibility and maintainability.

- Styled the interface with CSS, aiming to closely match the intended design and ensure responsive behavior.

- Implemented interactivity with JavaScript, including form validation, local storage handling, and rendering a personalized ticket on a new page.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned
 - Drag and Drop for a form field (avatar)

 - Windows Local Storage. Storing and retrieving data using setItem and getItem
   ```js 
      const formData = {
            name: form.elements.name.value,
            gmail: form.elements.email.value,
            gitname: form.elements.gitname.value,
            avatar : preview.src,
            ticketNo : ticketId
        };
        localStorage.setItem('ticketData', JSON.stringify(formData));
        window.location.href = 'ticket.html';
   ```
   ```js 
       const data = JSON.parse(localStorage.getItem('ticketData'));
   ```
 
 - Learned how to handle and read files(JPG or PNG)
   ```js
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
        } 
     }
   ```
  - Learned about merging of multiple background using single background-image property
   ```CSS
     background-image:
        url(./assets/images/background-desktop.png),
        url(./assets/images/pattern-circle.svg),
        url(./assets/images/pattern-circle.svg),
        url(./assets/images/pattern-lines.svg),
        url(./assets/images/pattern-squiggly-line-bottom-desktop.svg),
        url(./assets/images/pattern-squiggly-line-top.svg);
   ```

  - Learned CSS grid

  - Learned how to use @font-face
   ```CSS
    @font-face {
       font-family: 'Inconsolata';
       src: url('./assets/fonts/Inconsolata-VariableFont_wdth,wght.ttf') format('truetype');
       font-weight: 100 900;  /* Variable font supports a range of weights */
       font-style: normal;
     }
   ```

### Continued development

 - Explore various ways of storing and retrieving data other than local storage
 - Shift to ReactJS while learning about core Javascript
 - Implement CSS using modern frameworks
 - Write cleaner, structured and modular code 

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/) - This helped me to look upto the syntax of various HTML tags and CSS properties.
- [FrontEnd Mentor](https://www.frontendmentor.io/) - Amazing website from where I got the template of the website and was able to build something.
- [Stack Overflow](https://stackoverflow.com/) - Guided me in debugging code, resolve issues and fix errors.

## Author

- Frontend Mentor - [azkaZubish](https://www.frontendmentor.io/profile/azkaZubish)
- Github -[azkaZubish](https://github.com/azkaZubish)
