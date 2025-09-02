<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../../src/components/Order/OrderDetail.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('OrderDetailComponent boundary should contain "Order Detail" heading', () => {
        expect(fileContent).toMatch(/Order Detail/);
    });

    test('OrderDetailComponent boundary should contain "Order ID" label for order id data', () => {
        expect(fileContent).toMatch(/Order ID/);
    });

    test('OrderDetailComponent boundary should contain "User ID" label for user id data', () => {
        expect(fileContent).toMatch(/User ID/);
    });

    test('OrderDetailComponent boundary should contain "Total" label for total data', () => {
        expect(fileContent).toMatch(/Total/);
    });

    test('OrderDetailComponent boundary should contain "Status" for status data', () => {
        expect(fileContent).toMatch(/Status/);
    });

    test('OrderDetailComponent boundary should contain "Books" heading', () => {
        expect(fileContent).toMatch(/Books/);
    });
});
=======
const fs = require('fs');
const path = require('path');

describe('boundary', () => {
    let fileContent;

    beforeAll(() => {
        const filePath = path.resolve(__dirname, '../../../../src/components/Order/OrderDetail.js');
        fileContent = fs.readFileSync(filePath, 'utf8');
    });

    test('OrderDetailComponent boundary should contain "Order Detail" heading', () => {
        expect(fileContent).toMatch(/Order Detail/);
    });

    test('OrderDetailComponent boundary should contain "Order ID" label for order id data', () => {
        expect(fileContent).toMatch(/Order ID/);
    });

    test('OrderDetailComponent boundary should contain "User ID" label for user id data', () => {
        expect(fileContent).toMatch(/User ID/);
    });

    test('OrderDetailComponent boundary should contain "Total" label for total data', () => {
        expect(fileContent).toMatch(/Total/);
    });

    test('OrderDetailComponent boundary should contain "Status" for status data', () => {
        expect(fileContent).toMatch(/Status/);
    });

    test('OrderDetailComponent boundary should contain "Books" heading', () => {
        expect(fileContent).toMatch(/Books/);
    });
});
>>>>>>> d3a88dcbfb8f63e877cb54f6523e0c85f8f9af1c
