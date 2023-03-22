const userEmailRef = document.querySelector('#inputEmail');
const userSenhaRef = document.querySelector('#inputPassword');

function validaInput (input) {

    const inputValidacao = input.checkValidity();
    const elementFatherRef = input.parentElement;

    if(inputValidacao) {
        elementFatherRef.classList.remove('error');
    } else {
        elementFatherRef.classList.add('error');
    }
    
}


userEmailRef.addEventListener('keyup', () => validaInput(userEmailRef));
userSenhaRef.addEventListener('keyup', () => validaInput(userSenhaRef));