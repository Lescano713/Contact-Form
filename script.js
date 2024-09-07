const inputsName = document.querySelectorAll('input[type="text"]')

validationName();
function validationName(){
    console.log('a')
    inputsName.forEach(input => {
        console.log(input.value)
        if (input.value === "") {
            const container = input.closest('label');
            const p = document.createElement('p');
            p.textContent = "The field is required"
            container.appendChild(p)
        }
    });
}
