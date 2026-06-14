import mongoose from "mongoose";

class Database {
	private DB_URL = "mongodb://mongo:mongo@localhost:27017/db_portal?authSource=admin";

	createConnection() {
		mongoose.connect(this.DB_URL);
	}
}

export default Database;