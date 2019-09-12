import Greeting from ".";

describe("Greeting Test...", () => {
    test("Greeting Function", () => {
        expect(Greeting("tako")).toBe("Hello, tako.");
    })
})
