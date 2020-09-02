const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    areWeCovered,
    createMatrix
} = require("../challenges/exercise006");

describe("sumMultiples", () => { // It is a function. We  use it because we are using the programme jest to run the tests. describe (string,function). String= describe what the test is doing. Ex: Funtion name
    test("it throws an error if not passed an array", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples("foo");
        }).toThrow("an Array is requiered");
    });

    test("it returns the sum of any numbers that are a multiple of 3 or 5", () => { // Function test("describe the test it is going to do it"), function)
        const result = sumMultiples([1, 3, 5]); // Variable to take the result of the function
        const expected = 8; // Variable with the exepected results of the function
        expect(result).toBe(expected);// Function which jest give that compare 2 values. the sumMultiples returns an object as seeing in exercise006.js>module exports. toBe is a function of an object
        expect(sumMultiples([1, 2, 3, 5, 9, 10, 15])).toBe(42);
    });

    test("it works okay with decimal numbers", () => {
        expect(sumMultiples([1, 3, 5.0, 2, 12, 10])).toBe(30); // Check toBe to check a basic value: string, number, boolean
        expect(sumMultiples([1, 3.20, 5.85, 2, 12, 10])).toBe(22);
    });

    test("it returns 0 if there are no multiples of 3 or 5", () => {
        expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
    });
});

describe("isValidDNA", () => {
    test("it throws an error if not passed an string", () => {
        expect(() => {
            isValidDNA();
        }).toThrow("str is required");
    });

    test("it returns false if the DNA string contains any character different from C, G, T or A ", () => {
        expect(isValidDNA("AGTUGAT")).toBe(false);
        expect(isValidDNA("ATGBCAT")).toBe(false);
        expect(isValidDNA("GCFTACG")).toBe(false);
    });

    test("it returns true if the DNA string contains only C, G, T or A ", () => {
        expect(isValidDNA("AGTCGATCGTA")).toBe(true);
        expect(isValidDNA("CGTACGTACGT")).toBe(true);
        expect(isValidDNA("TCGACGTACGT")).toBe(true);
    });

    test("it returns false if the DNA string contains only C, G, T or A but some of them are in lower case ", () => {
        expect(isValidDNA("aGTCGaTCGTa")).toBe(false);
        expect(isValidDNA("TCgACgTACgT")).toBe(false);

    });

    test("it returns false if the DNA string contains a number ", () => {
        expect(isValidDNA("TCG89GTACGT")).toBe(false);
        expect(isValidDNA("TCGACGTA56T")).toBe(false);
        expect(isValidDNA("TCGACGTACG3")).toBe(false);
    });
});

describe("getComplementaryDNA", () => {
    test("it throws an error if the string is not a valid DNA", () => {
        expect(() => {
            getComplementaryDNA("GCFTACG");
        }).toThrow("the string is not a valid DNA");
    });

    test("it returns the complementary base pair for each letter: T pairs with A, A pairs with T, G pairs with C and C pairs with G", () => {
        expect(getComplementaryDNA("T")).toBe("A");
        expect(getComplementaryDNA("A")).toBe("T");
        expect(getComplementaryDNA("C")).toBe("G");
        expect(getComplementaryDNA("G")).toBe("C");
    });
    
    test("it returns a string of the complementary base pairs for a validDNA", () => {
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
        expect(getComplementaryDNA("CGTAC")).toBe("GCATG");
        expect(getComplementaryDNA("TCGAC")).toBe("AGCTG");
    });
});

describe("isItPrime", () => {
    test("it throws an error if the number is equal or less than 1", () => {
        expect(() => {
            isItPrime(0.5);
        }).toThrow("The prime number should be higher than 1");

        expect(() => {
            isItPrime(-1);
        }).toThrow("The prime number should be higher than 1");
        expect(() => {
            isItPrime(1);
        }).toThrow("The prime number should be higher than 1");
    });

    test("it returns false if the number is NOT a prime", () => {
        expect(isItPrime(4)).toBe(false);
        expect(isItPrime(75)).toBe(false);
        expect(isItPrime(168)).toBe(false);
        expect(isItPrime(799)).toBe(false);
    });

    test("it returns true if the number IS a prime", () => {
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(3)).toBe(true);
        expect(isItPrime(5)).toBe(true);
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(53)).toBe(true);
        expect(isItPrime(103)).toBe(true);
        expect(isItPrime(839)).toBe(true);
    });
});

describe("createMatrix", () => {
    test("it returns an empty matrix when passed 0", () => {
        expect(createMatrix(0, "foo")).toEqual([]);
    });

    test("it returns a matrix of 1*1 when passed 1", () => {
        expect(createMatrix(1, "noo")).toEqual([["noo"]]); // To test complex values like array or objects use toEqul
    });

    test("it returns a matrix of 2*2 when passed 2", () => {
        expect(createMatrix(2, "hello")).toEqual([
            ["hello", "hello"],
            ["hello", "hello"]
        ]);
    });

    test("it returns a matrix of 3*3 when passed 3", () => {
        expect(createMatrix(3, "tree")).toEqual([
            ["tree", "tree", "tree"],
            ["tree", "tree", "tree"],
            ["tree", "tree", "tree"],
        ]);
    });

    test("it returns a matrix of 5*5 when passed 5", () => {
        expect(createMatrix(5, "me")).toEqual([
            ["me", "me", "me", "me", "me"],
            ["me", "me", "me", "me", "me"],
            ["me", "me", "me", "me", "me"],
            ["me", "me", "me", "me", "me"],
            ["me", "me", "me", "me", "me"],
        ]);
    });
});

describe("areWeCovered", () => {
    test("it returns false if there are no staff at all", () => { // Good start with check what happen with a false result
        expect(areWeCovered([], "Sunday")).toBe(false);
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
    });

    test("it returns false if there are staff but < 3 not scheduled to work", () => {
        const staff1 = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Paul", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "gary", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "peter", rota: ["Monday", "Tuesday", "Friday"] }
        ];
        expect(areWeCovered(staff1, "Wednesday")).toBe(false);
        const staff2 = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Paul", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "gary", rota: ["Monday", "Tuesday"] },
            { name: "peter", rota: ["Monday", "Tuesday"] }
        ];
        expect(areWeCovered(staff2, "Friday")).toBe(false);
        const staff3 = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Paul", rota: ["Monday", "Tuesday", "Friday"] },
        ];
        expect(areWeCovered(staff3, "Tuesday")).toBe(false);
    });

    test("it returns true if there are 3 staff scheduled to work", () => {
        const staff1 = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Paul", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "gary", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "peter", rota: ["Monday", "Tuesday", "Thursday"] }
        ];
        expect(areWeCovered(staff1, "Friday")).toBe(true);
    });

    test("it returns true if there are more than 3 staff scheduled to work", () => {
        const staff1 = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Paul", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "gary", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "peter", rota: ["Monday", "Tuesday", "Thursday"] }
        ];
        expect(areWeCovered(staff1, "Tuesday")).toBe(true);

        const staff2 = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Paul", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "gary", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "peter", rota: ["Monday", "Tuesday", "Friday"] }
        ];
        expect(areWeCovered(staff2, "Friday")).toBe(true);
    });

    test("it returns true if there are more than 3 staff scheduled to work- Not be case sensitive", () => {
        const staff1 = [
            { name: "Sally", rota: ["Monday", "tuesday", "Friday"] },
            { name: "Paul", rota: ["Monday", "tuesday", "Friday"] },
            { name: "gary", rota: ["Monday", "tuesday", "Friday"] },
            { name: "peter", rota: ["Monday", "tuesday", "Thursday"] }
        ];
        expect(areWeCovered(staff1, "Tuesday")).toBe(true);
    });
});




