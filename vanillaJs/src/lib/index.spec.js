var { greet } = require('./index');

describe("Greeting Test...", () => {
    test("Greeting Function", () => {
        expect(greet("tako")).toBe("Hello, tako.");
    })
})
