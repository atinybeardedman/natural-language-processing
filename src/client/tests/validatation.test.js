const {
    onBlur,
    validate
} = require('../js/validation');


test("valid url should return true", () => {
    const url = "https://www.example.com"
    expect(validate(url)).toBe(true)
});

test("invalid url should be return false", () => {
    const url = "Hello there"
    expect(validate(url)).toBe(false);
});

describe('checking DOM manipulation', () => {
    let el;
    let button;
    beforeEach(() => {
        document.body.innerHTML =
            `<form>
                <div class="field">
                    <label for="" class="label">Link To Article</label>
                    <div class="control">
                        <input class="input" id="url" type="text" name="input" value=""
                            onblur="Client.onBlur(this)" placeholder="www.example.com/article">
                        <p id="warning-text" class="help is-danger is-hidden">
                            Must be a valid url
                        </p>
                    </div>
                </div>
                <div class="control">
                    <button disabled class="button is-primary" id="submit"
                        onclick="return Client.handleSubmit(event)">Submit</button>
                </div>
            </form>`;
            el = document.getElementById('url');
            button = document.getElementById('submit');
    });

    test("empty input should add invalid class", () => {
        onBlur(el);
        expect(el.classList.contains('is-danger')).toBe(true);
    });

    test("invalid input should add invalid class", () => {
        el.value = 'Hi';
        onBlur(el);
        expect(el.classList.contains('is-danger')).toBe(true);
    });

    test("valid input should add valid class", () => {
        el.value = 'https://www.example.com';
        onBlur(el);
        expect(el.classList.contains('is-success')).toBe(true);
    });

    test("invalid input should disable button", () => {
        el.value = 'blah';
        onBlur(el);
        expect(button.disabled).toBe(true);
    });

    test("valid input should enable button", () => {
        button.disabled = true;
        el.value = 'www.example.com';
        onBlur(el);
        expect(button.disabled).toBe(false);
    });
})