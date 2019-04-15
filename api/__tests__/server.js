const request = require("supertest");
const server = require("../server");

describe("Basic server tests", () => {
  it("Should respond with index.html for root GET", async () => {
    const res = await request(server).get("/");
    expect(res.type).toBe("text/html");
  });
});
