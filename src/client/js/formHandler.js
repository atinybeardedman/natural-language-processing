export function handleSubmit(event) {
    event.preventDefault();


    // check what text was put into the form field
    const url = document.getElementById('url').value;
    // TODO: add validation

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/summarize?url='+url)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.sentences.join(' ');
    })
}

