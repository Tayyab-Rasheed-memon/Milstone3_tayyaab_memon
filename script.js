"use strict";
var _a;
// listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    const profilePictureInput = document.getElementById('profilePicture');
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const educationElement = document.getElementById('education');
    const experienceElement = document.getElementById('experience');
    const skillsElement = document.getElementById('skills');
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        // picture elements
        const profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        //create resume output
        const resumeOutput = `
       <h2>Resume</h2>
       ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
       <p> <strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span> </p>
       <p> <strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span> </p>
       <p> <strong>Phone Number:</strong> <span id="edit-phone" class="editable"> ${phone} </span> </p> 
       
       <h3>Education<h3>
       <p <span id="edit-education" class="editable"> >${education}</p> 
       
       <h3>Experience<h3>
       <p <span id="edit-experience" class="editable"> >${experience}</p>                                                                         
       
       <h3>Skills<h3>
       <p <span id="edit-skills" class="editable"> >${skills}</p> 
        `;
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('one or more element are missing');
    }
});
function makeEditable() {
    const editableElemets = document.querySelectorAll('.editable');
    editableElemets.forEach(element => {
        element.addEventListener('click', function () {
            var _a;
            const currentElement = element;
            const currentValue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = currentValue;
                input.classList.add('editing-input');
                input.addEventListener('blur', function () {
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline';
                    input.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}