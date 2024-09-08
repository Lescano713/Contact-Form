const inputsName = document.querySelectorAll('input')
const submit = document.querySelector('button[type="submit"]')

function validationName(){
    inputsName.forEach(input => {
        const container = input.closest('label');
        if (input.value === "") {
            const p = document.createElement('p');
            p.classList.add('errorState')
            p.textContent = "The field is required"
            container.appendChild(p)
        }else{
            alert('good')
        }
    });
}
submit.addEventListener('click', e=>{
    e.preventDefault()
    validationName();
})