// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Functions$Exercises = require("../src/Functions.bs.js");

Jest.describe("Exercise 1", (function (param) {
        return Jest.test("should sum 1 + 2", (function (param) {
                      return Jest.Expect.toBe(3, Jest.Expect.expect(Functions$Exercises.sum(1, 2)));
                    }));
      }));

Jest.describe("Exercise 2", (function (param) {
        Jest.test("should convert 10 meters to 10000 millimiters", (function (param) {
                return Jest.Expect.toBe(10000.0, Jest.Expect.expect(Functions$Exercises.meterToMillimeter(10.0)));
              }));
        return Jest.test("should convert 5.5 meters to 5500 millimiters", (function (param) {
                      return Jest.Expect.toBe(5500.0, Jest.Expect.expect(Functions$Exercises.meterToMillimeter(5.5)));
                    }));
      }));

Jest.describe("Exercise 3", (function (param) {
        Jest.test("should return how many seconds has in a day", (function (param) {
                return Jest.Expect.toBe(86400, Jest.Expect.expect(Functions$Exercises.DaysToSeconds.convert(1, 0, 0, 0)));
              }));
        return Jest.test("should return how many seconds has in a 1:05:42:55", (function (param) {
                      return Jest.Expect.toBe(106975, Jest.Expect.expect(Functions$Exercises.DaysToSeconds.convert(1, 5, 42, 55)));
                    }));
      }));

Jest.describe("Exercise 4", (function (param) {
        Jest.test("should return the salary raise of 9000", (function (param) {
                return Jest.Expect.toBe(3900.0, Jest.Expect.expect(Functions$Exercises.getSalaryRaise(3000.0, 30.0)));
              }));
        return Jest.test("should not increase salary", (function (param) {
                      return Jest.Expect.toBe(1000.0, Jest.Expect.expect(Functions$Exercises.getSalaryRaise(1000.0, 0.0)));
                    }));
      }));

Jest.describe("Exercise 5", (function (param) {
        Jest.test("should return price with the discount of 10%", (function (param) {
                return Jest.Expect.toBe(900.0, Jest.Expect.expect(Functions$Exercises.getDiscount(1000.0, 10.0)));
              }));
        return Jest.test("should return the discount of 32.5%", (function (param) {
                      return Jest.Expect.toBe(2362.5, Jest.Expect.expect(Functions$Exercises.getDiscount(3500.0, 32.5)));
                    }));
      }));

Jest.describe("Exercise 6", (function (param) {
        return Jest.test("trip should take 0.5 hours", (function (param) {
                      return Jest.Expect.toBe(0.5, Jest.Expect.expect(Functions$Exercises.getTripTime(50000.0, 100.0)));
                    }));
      }));

Jest.describe("Exercise 7", (function (param) {
        return Jest.test("convert 32 celsius to fahrenheit", (function (param) {
                      return Jest.Expect.toBe(89.6, Jest.Expect.expect(Functions$Exercises.celsiusToFahreinheit(32.0)));
                    }));
      }));

Jest.describe("Exercise 8", (function (param) {
        return Jest.test("convert 89.6 fahrenheit to celsius", (function (param) {
                      return Jest.Expect.toBe(32.0, Jest.Expect.expect(Functions$Exercises.fahreinheitToCelsius(89.6)));
                    }));
      }));

Jest.describe("Exercise 9", (function (param) {
        return Jest.test("convert 89.6 fahrenheit to celsius", (function (param) {
                      return Jest.Expect.toBe(435.0, Jest.Expect.expect(Functions$Exercises.calcCarRentalPrice(100.0, 7.0)));
                    }));
      }));

Jest.describe("Exercise 10", (function (param) {
        return Jest.test("convert 89.6 fahrenheit to celsius", (function (param) {
                      return Jest.Expect.toBe(2.53, Jest.Expect.expect(Functions$Exercises.calcSmokerLife(1.0, 1.0)));
                    }));
      }));

/*  Not a pure module */
