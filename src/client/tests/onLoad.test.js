const { onLoad } = require('../js/onLoad');

beforeEach(() => {
    document.body.classList.add('preload');
})

test('preload class should be removed', () => {
    onLoad();
    expect(document.body.classList.contains('preload')).toBe(false);
})
