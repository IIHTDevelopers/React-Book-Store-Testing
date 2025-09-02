<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../../src/components/Admin Panel/AdminOrderList.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('AdminOrderListComponent boundary should contain "Order ID"', () => {
        expect(fileContent).toMatch(/Order ID/);
    });

    test('AdminOrderListComponent boundary should contain "User ID"', () => {
        expect(fileContent).toMatch(/User ID/);
    });

    test('AdminOrderListComponent boundary should contain "Total"', () => {
        expect(fileContent).toMatch(/Total/);
    });

    test('AdminOrderListComponent boundary should contain "Books"', () => {
        expect(fileContent).toMatch(/Books/);
    });
});
=======
const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../../src/components/Admin Panel/AdminOrderList.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('AdminOrderListComponent boundary should contain "Order ID"', () => {
        expect(fileContent).toMatch(/Order ID/);
    });

    test('AdminOrderListComponent boundary should contain "User ID"', () => {
        expect(fileContent).toMatch(/User ID/);
    });

    test('AdminOrderListComponent boundary should contain "Total"', () => {
        expect(fileContent).toMatch(/Total/);
    });

    test('AdminOrderListComponent boundary should contain "Books"', () => {
        expect(fileContent).toMatch(/Books/);
    });
});
>>>>>>> d3a88dcbfb8f63e877cb54f6523e0c85f8f9af1c
