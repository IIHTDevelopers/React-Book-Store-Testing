<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../../src/components/Admin Panel/AdminUserList.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('AdminUserListComponent boundary should contain "Username"', () => {
        expect(fileContent).toMatch(/Username/);
    });

    test('AdminUserListComponent boundary should contain "Role"', () => {
        expect(fileContent).toMatch(/Role/);
    });
});
=======
const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../../src/components/Admin Panel/AdminUserList.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('AdminUserListComponent boundary should contain "Username"', () => {
        expect(fileContent).toMatch(/Username/);
    });

    test('AdminUserListComponent boundary should contain "Role"', () => {
        expect(fileContent).toMatch(/Role/);
    });
});
>>>>>>> d3a88dcbfb8f63e877cb54f6523e0c85f8f9af1c
