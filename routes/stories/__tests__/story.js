const request = require("supertest");
const server = require("../../../api/server");

describe("Story Tests", () => {
  it("Should return an array for stories GET endpoint", async () => {
    const res = await request(server).get("/api/stories");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body).toHaveLength(0);
  });

  it("Should return an array for latest GET endpoint", async () => {
    const res = await request(server).get("/api/stories/latest");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body).toHaveLength(0);
  });

  it("Should return a 400 if no title/story submitted", async () => {
    const res = await request(server).post("/api/stories");
    expect(res.status).toBe(400);
    expect(res.body.message).toBe(
      "Please provide a title and story to submit."
    );
  });

  it("Should return an ID of a pending story and 201 if submitted", async () => {
    const res = await request(server)
      .post("/api/stories")
      .send({ title: "test", story: "test" });
    expect(res.status).toBe(201);
    expect(typeof res.body.id).toBe("number");
  });
});
