import * as express from "express";

import * as sqlite3 from "sqlite3";
import { open } from "sqlite";
import { getUsers } from "./api/users";

// you would have to import / invoke this in another file
export async function openDb() {
	return open({
		filename: "./database.db",
		driver: sqlite3.Database,
	});
}

(async () => {
	const db = await openDb();
	db.exec(
		"CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, password TEXT)",
	);
})();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/users", async (req, res) => {
	const db = await openDb();
	return res.send(getUsers(db));
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
