import { Sequelize } from "sequelize";
import "dotenv/config";

const db = new Sequelize("bkrwl", "root", "", {
  host: process.env.DB_HOST,
  dialect: "mysql",
});

export default db;
