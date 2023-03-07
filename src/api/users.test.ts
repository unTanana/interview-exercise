import { Database } from "sqlite";
import { describe, it, vi, expect } from "vitest";
import { getUsers } from "./users";

const mockDb = {
	all: vi.fn(),
};

describe("users", () => {
	it("should get users", async () => {
		await getUsers(mockDb as unknown as Database)();
		expect(mockDb.all).toHaveBeenCalledWith("SELECT * FROM users");
	});
});
