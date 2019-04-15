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

  it("Should send back 400 if no title,story or highlight", async () => {
    const res = await request(server)
      .post("/api/admin/stories/approve/1")
      .set("authorization", token);
    expect(res.status).toBe(400);
    expect(res.body.message).toBe(
      "Please provide a title, story, and highlight to add."
    );
  });

  it("Should send back newID & 201 if story is successfully approved.", async () => {
    const story = {
      story: "pending1",
      title: "test1",
      highlight: "approved"
    };
    const res = await request(server)
      .post("/api/admin/stories/approve/1")
      .send(story)
      .set("authorization", token);
    expect(res.status).toBe(201);
    expect(res.body.newStoryID).toBeTruthy();

    //Should show the new story in all stories
    const resTwo = await request(server).get("/api/stories");
    const filter = resTwo.body.filter(
      story => story.id === res.body.newStoryID
    );
    expect(filter).toBeTruthy();
    expect(filter).toHaveLength(1);
  });

  it("Should return 404 when trying to post a non existant story", async () => {
    const story = {
      story: "pending1",
      title: "test1",
      highlight: "approved"
    };
    const res = await request(server)
      .post("/api/admin/stories/approve/8")
      .send(story)
      .set("authorization", token);
    expect(res.status).toBe(404);
    expect(res.body.message).toBe("The story could not be found.");
  });

  it("Should return 404 for reject if story doesn't exist", async () => {
    const res = await request(server)
      .delete("/api/admin/stories/reject/8")
      .set("authorization", token);
    expect(res.status).toBe(404);
    expect(res.body.message).toBe("Story could not be located.");
  });

  it("Should return 200 if story is rejected", async () => {
    const res = await request(server)
      .delete("/api/admin/stories/reject/2")
      .set("authorization", token);
    expect(res.status).toBe(200);
  });

  it("Should return 404 for delete if story doesn't exist", async () => {
    const res = await request(server)
      .delete("/api/admin/stories/delete/11")
      .set("authorization", token);
    expect(res.status).toBe(404);
    expect(res.body.message).toBe("Story could not be located.");
  });

  it("Should return 200 if story is deleted", async () => {
    const res = await request(server)
      .delete("/api/admin/stories/delete/2")
      .set("authorization", token);
    expect(res.status).toBe(200);
  });
});
