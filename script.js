const inputsName = document.querySelectorAll('input[type="text"]')
const submit = document.querySelector('button[type="submit"]')

function validationName(){
    console.log('a')
    inputsName.forEach(input => {
        console.log(input.value)
        if (input.value === "") {
            alert('falla')
            const container = input.closest('label');
            const p = document.createElement('p');
            p.textContent = "The field is required"
            container.appendChild(p)
        }
    });
}
submit.addEventListener('click', e=>{
    e.preventDefault()
    validationName();
})