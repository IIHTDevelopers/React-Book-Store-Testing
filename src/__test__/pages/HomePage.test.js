<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../src/pages/HomePage.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('HomePageComponent boundary should contain "Welcome to the Online Bookstore" heading', () => {
        expect(fileContent).toMatch(/Welcome to the Online Bookstore/);
    });

    test('HomePageComponent boundary should contain "BookList" component', () => {
        expect(fileContent).toMatch(/BookList/);
    });
});
=======
const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../src/pages/HomePage.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('HomePageComponent boundary should contain "Welcome to the Online Bookstore" heading', () => {
        expect(fileContent).toMatch(/Welcome to the Online Bookstore/);
    });

    test('HomePageComponent boundary should contain "BookList" component', () => {
        expect(fileContent).toMatch(/BookList/);
    });
});
>>>>>>> d3a88dcbfb8f63e877cb54f6523e0c85f8f9af1c
