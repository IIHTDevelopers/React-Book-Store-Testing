<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../src/pages/LoginPage.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('LoginPageComponent boundary should contain "Login" heading', () => {
        expect(fileContent).toMatch(/Login/);
    });

    test('LoginPageComponent boundary should contain "Username" field', () => {
        expect(fileContent).toMatch(/Username/);
    });

    test('LoginPageComponent boundary should contain "Password" field', () => {
        expect(fileContent).toMatch(/Password/);
    });

    test('LoginPageComponent boundary should contain "Login" button', () => {
        expect(fileContent).toMatch(/Login/);
    });
});
=======
const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../src/pages/LoginPage.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('LoginPageComponent boundary should contain "Login" heading', () => {
        expect(fileContent).toMatch(/Login/);
    });

    test('LoginPageComponent boundary should contain "Username" field', () => {
        expect(fileContent).toMatch(/Username/);
    });

    test('LoginPageComponent boundary should contain "Password" field', () => {
        expect(fileContent).toMatch(/Password/);
    });

    test('LoginPageComponent boundary should contain "Login" button', () => {
        expect(fileContent).toMatch(/Login/);
    });
});
>>>>>>> d3a88dcbfb8f63e877cb54f6523e0c85f8f9af1c
