<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../src/App.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('AppComponent boundary should contain "HomePage" route for /', () => {
        expect(fileContent).toMatch(/HomePage/);
    });

    test('AppComponent boundary should contain "LoginPage" route for /login', () => {
        expect(fileContent).toMatch(/LoginPage/);
    });

    test('AppComponent boundary should contain "AdminPage" route for admin user', () => {
        expect(fileContent).toMatch(/AdminPage/);
    });

    test('AppComponent boundary should contain "CartPage" route for non-admin user', () => {
        expect(fileContent).toMatch(/CartPage/);
    });

    test('AppComponent boundary should contain "OrderPage" route for admin user', () => {
        expect(fileContent).toMatch(/OrderPage/);
    });
});
=======
const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../src/App.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('AppComponent boundary should contain "HomePage" route for /', () => {
        expect(fileContent).toMatch(/HomePage/);
    });

    test('AppComponent boundary should contain "LoginPage" route for /login', () => {
        expect(fileContent).toMatch(/LoginPage/);
    });

    test('AppComponent boundary should contain "AdminPage" route for admin user', () => {
        expect(fileContent).toMatch(/AdminPage/);
    });

    test('AppComponent boundary should contain "CartPage" route for non-admin user', () => {
        expect(fileContent).toMatch(/CartPage/);
    });

    test('AppComponent boundary should contain "OrderPage" route for admin user', () => {
        expect(fileContent).toMatch(/OrderPage/);
    });
});
>>>>>>> d3a88dcbfb8f63e877cb54f6523e0c85f8f9af1c
