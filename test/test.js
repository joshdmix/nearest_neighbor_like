const assert = require('assert');
const chai = require('chai');
const jsc = require('jsverify');
const fc = require('fast-check');
const { distance, findSmallestTriangle, perimeter } = require('../nearest_neighbor.js');
const beacons = require('../beacons.js');
const expect = chai.expect;
const isOk = chai.isOk;





describe('distance', function() {
				it('should return 1', function () {
								assert.equal(distance(10, 0, 10, 1), 1);
				})

				it('distance, fastcheck', function () {
								fc.assert(fc.property(fc.integer(), fc.integer(), fc.integer(), fc.integer(), (a, b, c, d) => {
												assert.isOk(distance(a, b, c, d));
				}))})
})


describe('perimeter', function() {
				it('should return 1', function () {
								assert.equal(perimeter(10, 0, 10, 1, 10, 1), 2);
				})
})

describe('findSmallestTriangle', function () {
				it('should return [{(_id: 111, ...},{_id: 222, ...},{_id: 333, ...}]', function () {
								const test_data = [{"_id": 111, "x": 1, "y": 1}, {"_id": 222, "x": 2, "y": 2}, {"_id": 333, "x": 3, "y": 3}]
								expect(findSmallestTriangle(test_data)).to.eql([{ _id: 111, x: 1, y: 1 }, { _id: 222, x: 2, y: 2 }, { _id: 333, x: 3, y: 3 }])
				})
})
