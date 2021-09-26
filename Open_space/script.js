const correctPassword  = "TrustNo1";
const buttonOk = document.querySelector('.botton-ok');
const buttonCheckboxes= document.querySelectorAll('.check-b');
const buttonRanges = document.querySelectorAll('.lever');
const buttonLaunch = document.querySelector('.botton-L');

function disable () {
    buttonLaunch.setAttribute('disabled','true');
    buttonCheckboxes.forEach(button => {
        button.setAttribute("disabled", "true");
    });
    buttonRanges.forEach(button => {
        button.setAttribute("disabled", "true");
    });
}

function enable() {
    buttonCheckboxes.forEach(button => {
        button.removeAttribute("disabled");
    });
    buttonRanges.forEach(button => {
        button.removeAttribute("disabled");
    });
    buttonLaunch.removeAttribute('disabled');
}
function pas_check (){
    let password = document.querySelector('.pass').value;
    if(correctPassword === password) {
        enable();
    } else {
        console.log("incorrect password");
    }
}
function control(){
    disable();
    buttonOk.addEventListener('click', () => pas_check());
}
control();