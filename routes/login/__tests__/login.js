const request = require("supertest");
const server = require("../../../api/server");
const db = require("../../../data/config");

describe("Login Model Tests", () => {
  beforeAll(async () => {
    //Seed the database with test information.
    return new Promise(async resolve => {
      setTimeout(async () => {
        await db.seed.run();
        resolve();
      }, 2000);
    });
  });

  it("Should throw a 400 if no email/password provided", async () => {
    const res = await request(server).post("/api/auth/login");
    expect(res.status).toBe(400);
    expect(res.body.message).toBe("Please provide an email and password.");
  });

  it("Should return 401 invalid credentials with wrong email/password", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ email: "test", password: "test" });
    expect(res.status).toBe(401);
    expect(res.body.message).toBe("Invalid credentials.");
  });

  it("Should return a welcome message and JWT with correct login information", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ email: "test", password: "pass" });
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Welcome!");
    expect(res.body.token).toBeTruthy();
  });
});
