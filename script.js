const inputsName = document.querySelectorAll('input');
const submit = document.querySelector('button[type="submit"]');

const response = [];

// const validation = {
//     'email': 
// }

function validationName(){
    inputsName.forEach(input => {
        const container = input.closest('label');
        if (input.value === "") {
            const p = document.createElement('p');
            p.classList.add('errorState');
            p.textContent = "The field is required";
            container.appendChild(p)
        }else{
            input.value = "";
            const successMessage = document.createElement('article');
            successMessage.classList.add('success-message')
            successMessage.innerHTML =`
            <h3 class="success-title">Message Sent!</h3>
            <p>Thanks for completing the form, We'll be in touch soon!</p>`
            document.body.appendChild(successMessage)
            
        }
    });
}
submit.addEventListener('click', e=>{
    e.preventDefault()
    validationName();
})

// function validation(input,container){
//     input.value = key;
//     switch (key) {
//         case "":
//             const p = document.createElement('p');
//             p.classList.add('errorState')
//             p.textContent = "The field is required"
//             container.appendChild(p)
//             break;
//         case "":
//             break
//         default:
//             break;
//     }
// }