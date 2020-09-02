const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner

} = require("../challenges/exercise007");

describe("sumDigits", () => {
    test("it throws an error if not passed a number", () => {
        expect(() => {
            sumDigits();
        }).toThrow("n is required");

    });

    test("it throws an error if number is not an integer", () => {
        expect(() => {
            sumDigits(65.4);
        }).toThrow("n should be an integer");

    });

    test("it returns the number itself when the number is of 1 digit", () => {
        expect(sumDigits(6)).toBe(6);
        expect(sumDigits(1)).toBe(1);
        expect(sumDigits(7)).toBe(7);
    });

    test("it returns the sum of all the digits of a number when the number is of 2 digits", () => {
        expect(sumDigits(65)).toBe(11);
        expect(sumDigits(78)).toBe(15);
        expect(sumDigits(34)).toBe(7);
    });

    test("it returns the sum of all the digits of a number when the number is of n digits", () => {
        expect(sumDigits(653)).toBe(14);
        expect(sumDigits(7845)).toBe(24);
        expect(sumDigits(34123)).toBe(13);
    });
});


describe("createRange", () => {
    test("it throws an error if not passed an integer number for start, end or step", () => {
        expect(() => { createRange(1.2, 7, 2); }).toThrow("introduce only integers numbers");
        expect(() => { createRange(1, 7.2, 2); }).toThrow("introduce only integers numbers");
        expect(() => { createRange(1, 7, 2.1); }).toThrow("introduce only integers numbers");

    });

    test("it returns an array of numbers without provinding the step between them ( step is 1 by default)", () => {
        expect(createRange(1, 6)).toEqual([1, 2, 3, 4, 5, 6]);
        expect(createRange(10, 13)).toEqual([10, 11, 12, 13]);

    });

    test("it returns an array of numbers using a step given between them", () => {
        expect(createRange(1, 7, 2)).toEqual([1, 3, 5, 7]);
        expect(createRange(11, 15, 2)).toEqual([11, 13, 15]);
        expect(createRange(10, 19, 3)).toEqual([10, 13, 16, 19]);
        expect(createRange(1, 28, 9)).toEqual([1, 10, 19, 28]);
        expect(createRange(10, 50, 10)).toEqual([10, 20, 30, 40, 50]);
        expect(createRange(10, 70, 15)).toEqual([10, 25, 40, 55, 70]);
    });

    test("it returns an empty array of numbers if it is not possible that the start and the end numbers are inclusive", () => {
        expect(createRange(11, 15, 3)).toEqual([]);
        expect(createRange(0, 11, 5)).toEqual([]);
        expect(createRange(5, 12, 2)).toEqual([]);
    });
});
describe("getScreentimeAlertList", () => {
    test("return an empty array if all users have used less than 100 minutes of screentime for a given date", () => {
        const obj = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 50, facebook: 30 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            }
        ]
        expect(getScreentimeAlertList(obj, "2019-05-04")).toEqual([]);
        expect(getScreentimeAlertList(obj, "2019-06-14")).toEqual([]);
    });

    test("return an empty array if none of users use the screen for a given date", () => {
        const obj = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 50, facebook: 30 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            }
        ]
        expect(getScreentimeAlertList(obj, "2019-03-04")).toEqual([]);
    });

    test("return an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
        const obj = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                    { date: "2019-05-05", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-05-05", usage: { mapMyRun: 40, whatsApp: 30, facebook: 40, safari: 10 } },
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            }
        ]
        expect(getScreentimeAlertList(obj, "2019-05-04")).toEqual(["beth_1234"]);
        expect(getScreentimeAlertList(obj, "2019-05-05")).toEqual(["beth_1234", "sam_j_1989"]);
    });

    test("return an array of usernames of users who have used exactly 100 minutes of screentime for a given date", () => {
        const obj = [
            {
                username: "josh_546",
                name: "Josh David",
                screenTime: [
                    { date: "2020-08-26", usage: { IE: 34, instagram: 22, facebook: 40 } },
                    { date: "2020-08-25", usage: { IE: 56, instagram: 40, facebook: 31 } },
                    { date: "2020-08-27", usage: { IE: 15, instagram: 80, facebook: 5 } },
                    { date: "2020-08-28", usage: { IE: 50, instagram: 50, facebook: 0 } },
                ]
            },
            {
                username: "edward21",
                name: "Edward Smith",
                screenTime: [
                    { date: "2020-08-26", usage: { dropbox: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2020-08-27", usage: { dropbox: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2020-08-28", usage: { dropbox: 30, whatsApp: 10, facebook: 10, safari: 50 } },
                ]
            },
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2020-08-28", usage: { twitter: 15, instagram: 25, facebook: 60 } },
                ]
            }
        ]
        expect(getScreentimeAlertList(obj, "2020-08-28")).toEqual(["josh_546", "edward21", "beth_1234"]);
        expect(getScreentimeAlertList(obj, "2020-08-27")).toEqual(["josh_546"]);
    });
});

describe("hexToRGB", () => {
    test("it throws an error if not passed a right colour code format", () => {
        expect(() => {
            hexToRGB("0xFFAE33");
        }).toThrow("this is not a right color code format");
        expect(() => {
            hexToRGB("#CA34679");
        }).toThrow("this is not a right color code format");
        expect(() => {
            hexToRGB("#CA346");
        }).toThrow("this is not a right color code format");

    });

    test("it returns a hexadecimal color code into an RGB code in the format rgb(255,17,51)", () => {
        expect(hexToRGB("#FFAE33")).toBe("rgb(255,174,51)");
        expect(hexToRGB("#3392FF")).toBe("rgb(51,146,255)");
        expect(hexToRGB("#33FF7F")).toBe("rgb(51,255,127)");
    });
});

describe("findWinner", () => {
    test("it returns X if X player has the row complete", () => {
        const obj1 = [
            [null, null, "0"],
            ["X", "0", "0"],
            ["X", "X", "X"]
        ];
        const obj2 = [
            [null, null, "0"],
            ["X", "X", "X"],
            ["X", "0", "0"]
        ];
        const obj3 = [
            ["X", "X", "X"],
            ["X", "0", "0"],
            ["X", "0", "0"]
        ];

        expect(findWinner(obj1)).toBe("X");
        expect(findWinner(obj2)).toBe("X");
        expect(findWinner(obj3)).toBe("X");
    });

    test("it returns 0 if 0 player has the row complete", () => {
        const obj1 = [
            [null, null, "0"],
            ["X", "0", "0"],
            ["0", "0", "0"]
        ];
        const obj2 = [
            [null, null, "0"],
            ["0", "0", "0"],
            ["X", "0", "0"]
        ];
        const obj3 = [
            ["0", "0", "0"],
            ["X", "0", "0"],
            ["X", "0", "0"]
        ];

        expect(findWinner(obj1)).toBe("0");
        expect(findWinner(obj2)).toBe("0");
        expect(findWinner(obj3)).toBe("0");
    });

    test("it returns X if X player has the column complete", () => {
        const obj1 = [
            ["X", "0", "0"],
            ["X", null, "0"],
            ["X", "0", "X"]
        ];
        const obj2 = [
            [null, "X", "0"],
            ["X", "X", "null"],
            ["X", "X", "0"]
        ];
        const obj3 = [
            ["X", "X", "X"],
            ["X", "0", "X"],
            [null, "0", "X"]
        ];

        expect(findWinner(obj1)).toBe("X");
        expect(findWinner(obj2)).toBe("X");
        expect(findWinner(obj3)).toBe("X");
    });

    test("it returns 0 if 0 player has the column complete", () => {
        const obj1 = [
            ["0", "0", "0"],
            ["0", null, "0"],
            ["0", "0", "X"]
        ];
        const obj2 = [
            [null, "0", "0"],
            ["X", "0", "null"],
            ["X", "0", "0"]
        ];
        const obj3 = [
            ["X", "X", "0"],
            ["X", "0", "0"],
            [null, "0", "0"]
        ];

        expect(findWinner(obj1)).toBe("0");
        expect(findWinner(obj2)).toBe("0");
        expect(findWinner(obj3)).toBe("0");
    });

    test("it returns X if X player has the diagonal complete", () => {
        const obj1 = [
            ["X", "0", "0"],
            [null, "X", "0"],
            ["X", "0", "X"]
        ];
        const obj2 = [
            [null, "0", "X"],
            ["X", "X", "null"],
            ["X", "X", "0"]
        ];
        expect(findWinner(obj1)).toBe("X");
        expect(findWinner(obj2)).toBe("X");
    });

    test("it returns 0 if 0 player has the diagonal complete", () => {
        const obj1 = [
            ["0", "0", "X"],
            [null, "0", "0"],
            ["X", "X", "0"]
        ];
        const obj2 = [
            [null, "X", "0"],
            ["X", "0", "null"],
            ["0", "X", "0"]
        ];

        expect(findWinner(obj1)).toBe("0");
        expect(findWinner(obj2)).toBe("0");
    });

    test("it returns the winner of the game", () => {
        const obj1 = [
            ["X", "0", "0"],
            [null, null, "0"],
            ["0", "0", "X"]
        ];
        const obj2 = [
            ["0", "X", "0"],
            ["0", "0", "null"],
            ["0", null, "0"]
        ];
        const obj3 = [
            ["X", "0", "X"],
            [null, "X", null],
            [null, "0", "X"]
        ];
        expect(findWinner(obj1)).toBe("no winner");
        expect(findWinner(obj2)).toBe("0");
        expect(findWinner(obj3)).toBe("X");
    });

    test("it returns no winner if none of the player has still won", () => {
        const obj1 = [
            ["X", "0", "0"],
            ["X", null, "0"],
            ["0", "0", "X"]
        ];
        const obj2 = [
            [null, "X", "0"],
            ["X", "0", "null"],
            ["X", "X", "0"]
        ];
        const obj3 = [
            ["X", "0", "X"],
            ["X", null, null],
            [null, "0", "X"]
        ];
        expect(findWinner(obj1)).toBe("no winner");
        expect(findWinner(obj2)).toBe("no winner");
        expect(findWinner(obj3)).toBe("no winner");
    });

    test("it returns the winner for a board 4*4", () => {
        const obj1 = [
            ["0", "0", "0", "0"],
            ["X", null, "0", null],
            ["0", "0", "X", "0"],
            ["0", "0", "X", "0"]
        ];
        const obj2 = [
            ["X", "0", "0", "0"],
            ["X", null, "0", null],
            ["0", "0", "X", "0"],
            ["0", "0", "X", "X"]
        ];
        const obj3 = [
            ["X", "0", "0", "X"],
            ["X", null, "0", "X"],
            ["X", "0", "X", "X"],
            ["0", "0", "X", "X"]
        ];
        expect(findWinner(obj1)).toBe("0");
        expect(findWinner(obj2)).toBe("0");
        expect(findWinner(obj3)).toBe("X");
    });
});