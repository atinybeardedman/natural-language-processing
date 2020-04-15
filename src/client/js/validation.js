function onBlur(el) {
    const invalid = !el.value || !validate(el.value);
    const button = document.getElementById('submit');
    const warningText = document.getElementById('warning-text');
    if (invalid) {
        el.classList.add('is-danger');
        warningText.classList.remove('is-hidden');
        button.disabled = true;

    } else {
        el.classList.remove('is-danger');
        el.classList.add('is-success');
        warningText.classList.add('is-hidden');
        button.disabled = false;
    }
}

function validate(input){
    const urlRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;
    return urlRegex.test(input);
}

module.exports = { onBlur, validate}