const {
    getSummary,
    handleSubmit,
    updateDOM
} = require('../js/formHandler');
let mockResults = {
    sentences: ['a', 'b', 'c']
};
let resultsElement;
let alertElement;
let inputElement;

beforeEach(() => {
    fetch.resetMocks();
    document.body.innerHTML =
        `<form onsubmit="handleSubmit(event)">
            <input id="url" type="text" name="input" value="https://www.example.com" onblur="onBlur(this)" placeholder="Url">
            <button id="submit" onclick="return handleSubmit()">Submit</button>
        </form>
        <div id="results"></div>`;
        resultsElement = document.getElementById('results');
        alertElement = document.getElementById('alert');
        inputElement = document.getElementById('url');

});

test('successful fetch should update DOM with results', () => {
    expect.assertions(1);
    fetch.mockResponseOnce(JSON.stringify(mockResults));

    return getSummary('www.example.com')
        .then(res => res.json())
        .then(res => {
            updateDOM(res, inputElement, resultsElement);
            expect(document.getElementById('results').innerText).toBe('a b c');
        })
       
        

});


test('fetch should return summary', () => {
    expect.assertions(1);
    fetch.mockResponseOnce(JSON.stringify(mockResults));

    return getSummary('www.example.com')
        .then(res => res.json())
        .then(data =>
        expect(data.sentences).toEqual(['a', 'b', 'c'])
    );

});