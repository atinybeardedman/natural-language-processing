function handleSubmit(e) {
    e.preventDefault();
    const resultsElement = document.getElementById('results');
    const alertElement = document.getElementById('alert');
    const inputElement = document.getElementById('url');
    const url = inputElement.value;

    inputElement.parentElement.classList.add('is-loading');
    return getSummary(url)
        .then(res => {
            if(!res.ok){
                return showError(alertElement);
            } else {
                return res.json()
                    .then(res => updateDOM(res, inputElement, resultsElement));
            }
        })
}

function updateDOM(res, inputElement, resultsElement) {
    inputElement.parentElement.classList.remove('is-loading');
    resultsElement.innerText = res.sentences.join(' ');
}

function getSummary(url){
    return fetch('http://localhost:8081/summarize?url=' + url);
}

function showError(alertElement){
    alertElement.classList.remove('hidden');
    setTimeout(() => {
        alertElement.classList.add('hidden')
    }, 5000);
}

module.exports = {
    handleSubmit,
    updateDOM,
    getSummary
};