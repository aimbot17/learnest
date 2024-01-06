// src/index.test.ts
import request from "supertest";
import { app } from "../index";

describe("GET /", () => {
  it('should respond with "Hello, World!"', async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello, World!");
    expect(response.status).toBe(200);
  });
});

describe("404 Not Found", () => {
  it("should respond with a 404 status", async () => {
    const response = await request(app).get("/nonexistent");
    expect(response.status).toBe(404);
  });
});
