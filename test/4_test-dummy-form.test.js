/*
global 
    dataLoaderFactory,
    dataSourceAccessFactory,
    pointOfSaleDataUtilsFactory,
    reportDataBuilderFactory,
    salesReporterFactory,
    transactionRecordUtilsFactory
*/

'use strict';

const assert = chai.assert;

function verifyOutput(actual, expected) {
    assert.equal(JSON.stringify(actual), JSON.stringify(expected));
}

function buildProductTypes() {
    return [
        {
            id: 1,
            name: 'Pirate Costume',
            price: 39.99
        },
        {
            id: 2,
            name: 'Robot Costume',
            price: 59.99
        }
    ];
}

function buildTransactionTypes() {
    return {
        Sale: 1,
        Return: 2
    };
}

describe('Test Dummy Form - Costume Shop Sales', function () {

    let pointOfSaleDataUtils;
    let salesReporter;
    let testData;

    beforeEach(function () {
        const transactionTypes = buildTransactionTypes();

        const dataSourceAccess = dataSourceAccessFactory();
        const dataLoader = dataLoaderFactory(dataSourceAccess);
        const transactionRecordUtils = transactionRecordUtilsFactory();
        const reportDataBuiler = reportDataBuilderFactory(transactionRecordUtils);

        pointOfSaleDataUtils = pointOfSaleDataUtilsFactory(transactionTypes);

        salesReporter = salesReporterFactory(dataLoader, reportDataBuiler);
    });

    describe('Point of Sale Data Utilities', function () {
        describe('get product count by sale status', function () {

            it('returns an empty object for sale counts if no sale data exists');

            it('returns an object with a single count of 1 when only one item, quantity 1 was purchased');

            it('returns an object with a single count of 2 when only one item, quantity 2 was purchased');

            it('returns an object with a two counts of 1 when two transactions of 1 qty each are passed');

            it('returns an object with a two counts when 4 transactions of two different items are passed');

            it('returns counts only for sales, ignoring returns');
        });

        describe('get product count by return status', function () {
            it('returns with counts only for return transactions');

        });
    });

    describe('sales report', function () {
        describe('get sales report', function () {
            it('should return a sales report with no sales');

            it('should return a sales report with one sale');

            it('should return a sales report with two sales of different products');

            it('should return a sales report with two sales of the same product');
        });
    });

});