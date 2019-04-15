const request = require("supertest");
const server = require("../../../api/server");
const db = require("../../../data/config");

describe("Admin Testing", () => {
  let token;
  beforeAll(async () => {
    //Seed the database with test information.
    await db.seed.run();
    //Login for admin token
    const res = await request(server)
      .post("/api/auth/login")
      .send({ email: "test", password: "pass" });

    expect(res.status).toBe(200);
    expect(res.body.token).toBeTruthy();
    token = res.body.token;
  });
  it("Should fetch all pending stories", async () => {
    const res = await request(server)
      .get("/api/admin/stories")
      .set("authorization", token);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body).toHaveLength(3);
  });

  it("Should approve a story and add it to the stories table", () => {});
});
