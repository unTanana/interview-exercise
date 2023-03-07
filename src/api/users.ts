import { Database } from "sqlite";

export const getUsers = (db: Database) => async () => {
	return await db.all("SELECT * FROM users");
};
