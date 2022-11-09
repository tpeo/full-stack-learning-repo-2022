//test.js

const server = require("../index.js");
const supertest = require("supertest");
const requestWithSupertest = supertest(server);

describe("Config Endpoint", () => {
  it("GET /config should show version", async () => {
    // Use supertest to call the server
    const res = await requestWithSupertest.get("/config");

    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.headers["content-type"]).toContain("application/json");
    expect(res.body).toMatchObject({ version: "0.0.1" });
  });
});
